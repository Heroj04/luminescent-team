const { EvolutionData } = require('./data');
const { EvolutionData3 } = require('./data3');
const { EVOLUTION_METHOD_DETAILS, REPLACE_STRING } = require('./evolutionConstants');
const { getPokemonIdFromMonsNoAndForm } = require('./functions');

function getEvolutionMethodDetail(methodId, methodParameter = 0, mode = "2.0", level, pokemon = null) {
  if (methodId === -1) {
    return -1;
  }
  if (!EVOLUTION_METHOD_DETAILS[methodId]){
    throw Error(`This Method is currently not handled: ${methodId}`)
  }
  const evolutionDetails = { ...EVOLUTION_METHOD_DETAILS[methodId] };
  const evoFunction = evolutionDetails.function;
  let evoMethod = evolutionDetails.method;
  if (evolutionDetails.requiresLevel) {
    evoMethod = "Level"
    evolutionDetails.method = evolutionDetails.method.replace(REPLACE_STRING, level);
  } else {
    try {
      evoMethod = evoFunction(methodParameter, mode);
    } catch (error){
      throw Error(`This method parameter doesn't work ${error} ${pokemon} ${methodId}, ${methodParameter}, ${evoFunction.name}`)
    }

    evolutionDetails.method = evolutionDetails.method.replace(REPLACE_STRING, evoMethod);
  }
  return [evolutionDetails, evoMethod];
}

function getEvolutionTree(pokemonId = 0, fromRoot = true, mode = "2.0") {
  if (!Number.isInteger(pokemonId) || pokemonId < 0) {
    throw new Error(`Bad pokemon ID: ${pokemonId}`);
  }

  const evolutionData = mode === "2.0" ? EvolutionData : EvolutionData3;

  const pokemon = evolutionData[pokemonId];
  if (!pokemon) {
    throw new Error(`Bad pokemon ID: ${pokemonId}. Mode: ${mode}`);
  }

  const startPokemonId = fromRoot ? pokemon.path[0] : pokemonId;

  const evolution = evolutionData[startPokemonId];

  const evolutionTree = {
    pokemonId: startPokemonId,
    evolutionDetails: getEvolutionDetails(startPokemonId, mode),
    evolvesInto: evolution.targets.map((nextStagePokemonId) => getEvolutionTree(nextStagePokemonId, false, mode)),
  };
  return evolutionTree;
}

function checkEvolutionPath(evolutionPath, originalPokemonId, mode = "2.0") {
  const evolutionData = mode === "2.0" ? EvolutionData : EvolutionData3
  const originalPath = evolutionData[originalPokemonId].path;

  function comparePath(treeNode, expectedId) {
  }

  comparePath(evolutionPath, originalPath[0]);
}

function getEvolutionDetails(pokemonId, mode = "2.0") {
  const evolutionData = mode === "2.0" ? EvolutionData : EvolutionData3
  const evolutionDetails = evolutionData[pokemonId].ar;

  if (!evolutionDetails) {
    return null;
  }

  for (let i = 0; i < evolutionDetails.length; i++) {
    const evolutionInfo = evolutionDetails[i];
    let methodIds = [];
    let methodParameters = [];
    let monsNos = [];
    let formNos = [];
    let levels = [];

    for (let j = 0; j < evolutionInfo.length; j += 5) {
      const methodId = evolutionInfo[j + 0];
      const methodParameter = evolutionInfo[j + 1];
      const monsNo = evolutionInfo[j + 2];
      const formNo = evolutionInfo[j + 3];
      const level = evolutionInfo[j + 4];

      const evolutionPokemonId = getPokemonIdFromMonsNoAndForm(monsNo, formNo, mode);
      if (evolutionPokemonId === pokemonId) {
        methodIds.push(methodId);
        methodParameters.push(methodParameter);
        monsNos.push(monsNo);
        formNos.push(formNo);
        levels.push(level);
      }
    }
    if (methodIds.length > 0) {
      return {
        methodIds,
        methodParameters,
        monsNos,
        formNos,
        levels,
      };
    }
  }
  return null;
}

module.exports = { getEvolutionTree, getEvolutionMethodDetail };