import * as React from 'react';
import { Box, Grid, Typography, useMediaQuery } from '@mui/material';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { getEvolutionMethodDetail, getEvolutionTree } from '../../utils/dex/evolution';
import styles from './styles.module.css';
import { getPokemonImageFilename } from '../../core/pokemonFormSelector';
import { getPokemonMonsNoAndFormNoFromPokemonId, getPokemonName } from '../../utils/dex/name';
import { evolutionFunctions } from '../../utils/dex/evolutionConstants';
import { getItemImageUrl, getTMImageUrl } from '../../../plugins/pokedex-data-plugin/dex/item';
import { getMoveProperties } from '../../utils/dex/moves';
import { getTypeName } from '../../utils/dex/types';
import { getPokemonIdFromMonsNoAndForm } from '../../utils/dex/functions';

export default function EvolutionGraph(props) {
  const evolutionTree = getEvolutionTree(props.pokemonID);
  const [monsNo, formNo] = getPokemonMonsNoAndFormNoFromPokemonId(evolutionTree.pokemonId);
  const pokemonID = getPokemonIdFromMonsNoAndForm(monsNo, formNo)
  const defaultEvo = {
    pokemonId: -1,
    evolutionDetails: {
      formNos: [-1],
      levels: [-1],
      methodIds: [-1],
      methodParameters: [-1],
      monsNos: [-1],
    },
    evolvesInto: [],
  };

  let fullEvolutionTree = (
    <div className="container">
      <div className="row" style={{ margin: 'auto', textAlign: 'center' }}>
        <span className="col col-12">
          <Typography variant="h6" sx={{ margin: 'auto' }}>
            Evolutions
          </Typography>
        </span>
      </div>

      <div className="row" style={{ margin: 'auto', textAlign: 'center' }}>
        <span className="col col-12">
          <Typography variant="h6" sx={{ margin: 'auto' }}>
            Does Not Evolve
          </Typography>
        </span>
      </div>
    </div>
  );

  const secondEvolvesInto = evolutionTree.evolvesInto;
  if (secondEvolvesInto.length === 0) {
    return fullEvolutionTree
  }

  if (secondEvolvesInto.length > 1) {
    if (secondEvolvesInto[0].evolvesInto.length > 0) {
      secondEvolvesInto[0].evolvesInto.push(secondEvolvesInto[1].evolvesInto[0])
    } else if (secondEvolvesInto[1].evolvesInto.length > 0) {
      secondEvolvesInto[0].evolvesInto.push(defaultEvo)
      secondEvolvesInto[0].evolvesInto.push(secondEvolvesInto[1].evolvesInto[0])
    }
  }

  const renderEvolutions = (methods, pokemonImages, methodIndex) => {
    const methodStyle = methodIndex === 1 ? (
      styles.firstMethodContainer
      ) : (styles.secondMethodContainer)
    return methods.map((method, index) => (
      <Grid container className={styles.evolutionDetails} key={index}>
        <Grid item xs={6} sm={6} className={methodStyle}>
          {method}
        </Grid>
        <Grid item xs={6} sm={6} className={styles.imageColumn}>
          {pokemonImages[index]}
        </Grid>
      </Grid>
    ));
  };

  const renderItemImage = (evoMethod, methodId, methodParameter, methodDetail) => {
    const evoFunction = evolutionFunctions[methodId];
    const evoImages = [];
    if (evoMethod.includes("Level")) {
      evoImages.push(getItemImageUrl("Rare Candy"));
    } else if (evoFunction === "getItemString") {
      evoImages.push(getItemImageUrl(evoMethod));
    } else if (evoFunction === "getMoveString") {
      const moveType = getTypeName(getMoveProperties(methodParameter).type);
      evoImages.push(getTMImageUrl(moveType));
    } else if (evoFunction === "getPokemonName") {
      evoImages.push(`img/${getPokemonImageFilename(methodParameter, 0)}`);
    } else if (evoFunction === "getMoveProperties") {
      const moveType = getTypeName(methodParameter);
      evoImages.push(getTMImageUrl(moveType));
    }
    if (methodDetail.method.includes("Friendship")) {
      evoImages.push(getItemImageUrl("Soothe Bell"))
    }
    if (methodDetail.method.includes("Day")) {
      evoImages.push("/img/Sun.webp")
    } else if (methodDetail.method.includes("Night")) {
      evoImages.push("/img/Moon.webp")
    }
    if (methodDetail.method.includes("Moss Rock")) {
      evoImages.push("/img/Moss Rock.webp")
    } else if (methodDetail.method.includes("Ice Rock")) {
      evoImages.push("/img/Ice Rock.webp")
    }
    if (methodDetail.method.includes("Male")) {
      evoImages.push("/img/male.webp")
    } else if (methodDetail.method.includes("Female")) {
      evoImages.push("/img/female.webp")
    }
    return evoImages;
  };

  const renderSecondMethod = (methodId, methodParameter, level) => {
    const [methodDetail, evoMethod] = getEvolutionMethodDetail(methodId, methodParameter, level);
    const evoImages = renderItemImage(evoMethod, methodId, methodParameter, methodDetail);

    return (
      <>
        Or
        <Box style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
          {evoImages.map((image, index) => (
            <img key={index} src={useBaseUrl(image)} width="40" alt="" />
          ))}
        </Box>
        {methodDetail.method}
      </>
    )
  };

  const renderMethods = (methodIds, methodParameters, levels) => {
    const firstMethodId = methodIds[0];
    if (firstMethodId === -1) {
      return (
        <Box className={styles.method}>
        </Box>
      )
    }
    const firstMethodParameter = parseInt(methodParameters[0]);
    const [ firstMethodDetail, firstEvoMethod ] = getEvolutionMethodDetail(firstMethodId, firstMethodParameter, levels[0]);

    const evoImages = renderItemImage(firstEvoMethod, firstMethodId, firstMethodParameter, firstMethodDetail);
    return (
      <Box className={styles.method}>
        {firstMethodDetail.method}
        <Box style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
          {evoImages.map((image, index) => (
            <img key={index} src={useBaseUrl(image)} width="40" alt="" />
          ))}
        </Box>
        {methodIds.length > 1 && (
          renderSecondMethod(methodIds[1], methodParameters[1], levels[1])
        )}
      </Box>
    );
  };

  const renderEvolutionTree = (tree, methodIndex) => {
    const evolutionStyle = methodIndex === 1 ? (
      styles.firstEvolution
      ) : (styles.secondEvolution)
    const { evolvesInto } = tree;

    // Collect data for methods and images from all evolutions
    const allMethods = [];
    const allImages = [];

    evolvesInto.forEach((evolution) => {
      const { 
        methodIds,
        methodParameters,
        monsNos,
        formNos,
        levels
      } = evolution.evolutionDetails;
      const methods = renderMethods(methodIds, methodParameters, levels);
      allMethods.push(methods);

      if (methodIds[0] === -1) {
        const pokemonImages = (
          <Box className={styles.imageRow} key="Blank"></Box>
        );
        allImages.push(pokemonImages);
      } else {
        const pokemonImages = monsNos.map((monsno, index) => (
          index === 0 ? (
            <Box className={styles.imageRow} key={monsno}>
              <img
                key={getPokemonIdFromMonsNoAndForm(monsno, formNos[index])}
                src={useBaseUrl(`/img/${getPokemonImageFilename(monsno, formNos[index])}`)}
                alt={getPokemonName(getPokemonIdFromMonsNoAndForm(monsno, formNos[index]))}
                title={getPokemonName(getPokemonIdFromMonsNoAndForm(monsno, formNos[index]))}
              />
            </Box>
          ) : ""
        ));
        allImages.push(pokemonImages);
      }
    });

    // Render a single firstEvolution component with all methods and images
    return (
      <Grid container className={evolutionStyle}>
        {renderEvolutions(allMethods, allImages, methodIndex)}
      </Grid>
    );
  };

  if (secondEvolvesInto.length > 0) {
    fullEvolutionTree = (
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h6" sx={{ margin: 'auto', textAlign: 'center' }}>
            Evolutions
          </Typography>
        </Grid>

        <Grid container className={styles.evolutionContainer}>
          <Grid item xs={12} className={styles.scrollContent}>
            <Grid item xs={12} sm={6} className={styles.startPokemon}>
              <img
                key={pokemonID}
                src={useBaseUrl(`/img/${getPokemonImageFilename(monsNo, formNo)}`)}
                alt={getPokemonName(pokemonID)}
                title={getPokemonName(pokemonID)}
              />
            </Grid>
            {renderEvolutionTree(evolutionTree, 1)}
            {secondEvolvesInto[0].evolvesInto.length >= 1 && (
              renderEvolutionTree(secondEvolvesInto[0], 2)
            )}  
          </Grid>
        </Grid>
      </Grid>
    );
  }
  return (fullEvolutionTree);
}
