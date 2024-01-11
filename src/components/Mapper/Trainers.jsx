import React, { useState } from 'react';
import { PokemonStats } from './PokemonStats';
import { Autocomplete, Box, MenuItem, Select, TextField, Typography } from '@mui/material';
import './style.css';
import { getMoveProperties, getPokemonName } from '../../utils/dex';
import { PokemonMoveType, TYPE_COLOR_MAP } from '../Pokedex2/PokemonMovesetList';
import { ImageWithFallback } from '../common/ImageWithFallback';

const responsiveFontSize = { fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' } };

const TrainerDropdown = ({ trainer, setTrainer, trainerList }) => {
  const defaultTrainer = {
    team_name: ""
  }
  return (
    <div className="trainer-dropdown">
      <Autocomplete
        id="trainer-input"
        options={[defaultTrainer, ...trainerList]}
        getOptionLabel={(option) => option.team_name}
        defaultValue={defaultTrainer}
        value={trainer}
        onChange={(e, value) => setTrainer(value)}
        renderInput={(params) => (
          <TextField
            {...params}
            type="search"
            label="Select Trainer"
          />
        )}
      />
    </div>
  );
};

export const Trainers = ({ trainerList, pokemonList }) => {
  const [selectedTrainer, setSelectedTrainer] = useState(null);

  return (
    <div>
      <TrainerDropdown trainer={selectedTrainer} setTrainer={setSelectedTrainer} trainerList={trainerList} />

      {selectedTrainer && (
        <Box
          className="trainerBox"
          sx={{
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(1, 1fr)',
              md: 'repeat(2, 1fr)'
            },
            width: {
              xs: '400px',
              sm: '520px',
              md: '1060px'
            }
          }}
        >
          {selectedTrainer.team && selectedTrainer.team.map((pokemon, index) => {
            const pokemonInfo = pokemonList.find(p => p.id === pokemon.id)
            const baseStats = pokemonInfo.baseStats;
            return (
              <Box
                className='trainerMon'
                key={index}
                sx={{
                  width: { xs: "396px", sm: "515px" },
                  height: { xs: "260px", sm: "280px" }
                }}
              >
                <Box className='monDetails' sx={{ width: { xs: "145px", sm: "165px" }}}>
                  <ImageWithFallback
                    alt={pokemonInfo.name}
                    src={`/img/${pokemonInfo.imageSrc}`}
                    fallbackSrc={`/img/pm0000_00_00_00_L.webp`}
                    style={{ objectFit: 'contain', marginTop: '8px' }}
                    width="64px"
                    height="64px"
                  />
                  <Typography sx={{ ...responsiveFontSize }}>{`${getPokemonName(pokemon.id)} Lv. ${pokemon.level}`}</Typography>
                  <Box display={"flex"}>
                    <Box sx={{ width: { xs: "65px", sm: "72px" }}} marginLeft="5px">
                      <PokemonMoveType
                        typeName={TYPE_COLOR_MAP[pokemonInfo.type1].name}
                        typeColor={TYPE_COLOR_MAP[pokemonInfo.type1].color}
                        fontSize={[".7rem", ".875rem"]}
                      />
                    </Box>
                    {pokemonInfo.type1 !== pokemonInfo.type2 && (
                      <Box sx={{ width: { xs: "65px", sm: "72px" }}} marginLeft="5px">
                        <PokemonMoveType
                          typeName={TYPE_COLOR_MAP[pokemonInfo.type2].name}
                          typeColor={TYPE_COLOR_MAP[pokemonInfo.type2].color}
                          fontSize={[".7rem", ".875rem"]}
                        />
                      </Box>
                    )}
                  </Box>
                  <Typography sx={{ ...responsiveFontSize }}>{`Nature: ${pokemon.nature}`}</Typography>
                  <Typography sx={{ ...responsiveFontSize }}>{`Ability: ${pokemon.ability}`}</Typography>
                  <Typography sx={{ ...responsiveFontSize }}>{`Item: ${pokemon.item}`}</Typography>
                </Box>
                <Box className='stats' sx={{ width: { xs: "250px", sm: "350px" }}}>
                  <PokemonStats baseStats={baseStats} trainerPokemon={pokemon}/>
                  <Box
                    className='moveList'
                    sx={{
                      width: { xs: "250px", sm: "350px" },
                      height: { xs: "84px", sm: "104px" }
                    }}
                  >
                    {pokemon.moves.map((move, index) => {
                      const moveInfo = getMoveProperties(move);
                      return (
                        <Box key={`${move}-${index}`} sx={{ width: { xs: "110px", sm: "160px" }}} margin="5px 2px 2.5px">
                          <PokemonMoveType
                            typeName={moveInfo.name}
                            typeColor={TYPE_COLOR_MAP[moveInfo.type].color}
                            fontSize={[".7rem", ".875rem"]}
                          />
                        </Box>
                      );
                    })}
                  </Box>
                </Box>
              </Box>
            )
          })}
        </Box>
      )}
    </div>
  )
};