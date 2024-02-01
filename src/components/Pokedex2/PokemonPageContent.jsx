import React from 'react';
import style from './styles.module.css';
import { Box, Typography, Container } from '@mui/material';
import Type from './type';
import EvolutionGraph from './EvolutionGraph';
import { PokemonStats } from './PokemonStats';
import { PokemonSearchBox } from './PokemonSearchBox';
import { PokemonMovesetList } from './PokemonMovesetList';
import { PokemonAccordion } from './PokemonAccordion';
import { PokemonAlternativeFormsList } from './PokemonAlternativeFormsList';
import { PokemonAbilities } from './PokemonAbilities';
import { PokemonGenderRatio } from './PokemonGenderRatio';
import { PokemonEggGroups } from './PokemonEggGroups';
import { ImageWithFallback } from '../common/ImageWithFallback';
import { PokemonItems } from './PokemonItems';
import { PokemonInfoButton } from './PokedexInfoButton';
import ModeSwitch from './ModeSwitch';
import { useGlobalState } from '../common/GlobalState';
import { getPokemonIdFromMonsNoAndForm } from '../../utils/dex';

function padNumberWithZeros(number) {
  const strNumber = String(number);
  const zerosToAdd = 4 - strNumber.length;
  
  if (zerosToAdd > 0) {
      return '0'.repeat(zerosToAdd) + strNumber;
  } else {
      return strNumber;
  }
}

export const PokemonPageContent = ({ pokemon, pokemonNames, pokemon3, pokemonNames3 }) => {
  const [globalState, updateMode] = useGlobalState();
  const pokemonInfo = globalState.mode === "2.0" ? pokemon : pokemon3;
  const allPokemonNames = globalState.mode === "2.0" ? pokemonNames : pokemonNames3;
  const pokemonId = getPokemonIdFromMonsNoAndForm(pokemonInfo.monsno, pokemonInfo.formno, globalState.mode)

  if (pokemon === pokemon3 && globalState.mode === "2.0") {
    return (
      <Container>
        <Container>
          <Box display="flex" justifyContent="center" marginTop="16px">
            <PokemonSearchBox pokemonNames={allPokemonNames} monsNo={1} formNo={0} />
            <PokemonInfoButton />
            <ModeSwitch />
          </Box>
        </Container>
  
        <Typography variant='h6' display="flex" sx={{marginTop: "16px", justifyContent: "center"}} >{pokemon.name} Does Not Exist in this Mode.</Typography>
      </Container>
    )
  }

  return (
    <Container>
      <Container>
        <Box display="flex" justifyContent="center" marginTop="16px">
          <PokemonSearchBox pokemonNames={allPokemonNames} monsNo={pokemonInfo.monsno} formNo={pokemonInfo.formno} />
          <PokemonInfoButton />
          <ModeSwitch />
        </Box>
      </Container>
      <div className="container">
        <div className="row">
          <Typography variant="h6" display="flex" sx={{ paddingLeft: '16px', paddingBottom: '12px', alignItems: "end"}}>
            {`#${padNumberWithZeros(pokemonInfo.monsno)}: `}
          </Typography>
          <Typography variant="h2" display="flex" sx={{ paddingLeft: '8px', alignItems: "end"}}>
            {` ${pokemonInfo.name}`}
          </Typography>
        </div>
      </div>
      <div className="container">
        <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={1}>
          <Box className={style.pokeColumn} gridColumn="span 1">
            <ImageWithFallback
              alt={pokemonInfo.name}
              src={`/img/pkm/${pokemonInfo.imageSrc}`}
              fallbackSrc={`/img/pkm/${pokemonInfo.forms[0].imageSrc}`}
              style={{ objectFit: 'contain', margin: '16px' }}
              width="80px"
              height="80px"
            />
          </Box>
          <Box className={style.pokeColumn} gridColumn="span 1">
            <Type type1={pokemonInfo.type1} type2={pokemonInfo.type2} />
          </Box>
          <Box className={style.pokeColumn} gridColumn="span 1">
            <Typography variant="h6" component="h6">
              <p className={style.flex}>Size:</p>
              {pokemonInfo.height}m, {pokemonInfo.weight}kg
              <br />
              <span style={{ fontSize: '0.8rem' }}>
                <i>Grass Knot: {pokemonInfo.grassKnotPower}</i>
              </span>
            </Typography>
          </Box>
        </Box>
      </div>

      <Container>
        <PokemonAbilities
          abilityName1={pokemonInfo.ability1}
          abilityName2={pokemonInfo.ability2}
          abilityNameHidden={pokemonInfo.abilityH}
          globalState={globalState}
        />
      </Container>

      <Box display="grid" gridTemplateColumns="repeat(9, 1fr)" gap={1}>
        <Box className={style.secondPokeColumn} gridColumn="span 5">
          <PokemonStats baseStats={pokemonInfo.baseStats} baseStatsTotal={pokemonInfo.baseStatsTotal} />
        </Box>
        <Box className={style.secondPokeColumn} gridColumn="span 4">
          <PokemonItems item1={pokemonInfo.item1} item2={pokemonInfo.item2} item3={pokemonInfo.item3}/>
          <PokemonEggGroups eggGroupNames={pokemonInfo.eggGroupNames} sx={{ marginTop: '16px' }} />
          <PokemonGenderRatio genderDecimalValue={pokemonInfo.genderDecimalValue} sx={{ marginTop: '16px' }} />
        </Box>
      </Box>

      <div className="container">
        <EvolutionGraph evolutionTree={pokemonInfo.evolutionTree} globalState={globalState} />
      </div>

      <Container>
        <PokemonAlternativeFormsList pokemonForms={pokemonInfo.forms} />
      </Container>

      <Container>
        <PokemonAccordion title="Moves learnt via level-up" id="levelMoveset">
          <PokemonMovesetList moveset={pokemonInfo.learnset.level} movesetPrefix="levelup" pokemonDexId={pokemonId} />
        </PokemonAccordion>
        <PokemonAccordion title="Moves learnt via Technical Machine" id="tmMoveset">
          <PokemonMovesetList moveset={pokemonInfo.learnset.tm} movesetPrefix="tm" pokemonDexId={pokemonId} />
        </PokemonAccordion>
        <PokemonAccordion title="Moves learnt via breeding" id="eggMoveset">
          <PokemonMovesetList moveset={pokemonInfo.learnset.egg} movesetPrefix="egg" pokemonDexId={pokemonId} />
        </PokemonAccordion>
        <PokemonAccordion title="Moves learnt via Tutor" id="eggMoveset">
          <PokemonMovesetList moveset={pokemonInfo.learnset.tutor} movesetPrefix="tutor" pokemonDexId={pokemonId} />
        </PokemonAccordion>
      </Container>

      <Container>
        <Box style={{marginTop: '50px', marginBottom: '10px'}}>
          <Typography variant="overline">
            <b>Credits:</b><br/>
          </Typography>
          <Typography variant="caption">
            Design based on the application by the <a href="https://github.com/Zarel/Pokemon-Showdown-Dex/graphs/contributors">Smogon Dex Team</a>, which can be found <a href="https://dex.pokemonshowdown.com/">here.</a><br/>
            Specific credits for the full Pokédex application go to Denmark, Glup and A-A-ron from Team Luminescent. Smogon Dex Team credits are as follows:<br/> Zarel, Marty-D, scheibo, KrisXV, Karthik99999, AnnikaCodes, SadisticMystic, pyuk-bot, mia-pi-git, penpexgit, asgdf and jakobw.<br/>
            This is the only section of the site where external inspiration was used.
          </Typography>
        </Box>
      </Container>
    </Container>
  );
};
