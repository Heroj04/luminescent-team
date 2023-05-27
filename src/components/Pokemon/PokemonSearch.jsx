import React, { useState } from 'react';
import { Autocomplete, TextField } from '@mui/material';

const MAX_CURRENT_POKEMON = 493;
const getPokemonNames = () => [];
const getPokemonIdFromName = () => 1;

export const PokemonSearch = ({ setPokemonDexId }) => {
  // pokemonNameEndRange number is not including
  const pokemonNames = getPokemonNames(MAX_CURRENT_POKEMON + 1);
  const [selectedPokemonName, setSelectedPokemonName] = useState(pokemonNames[1]);
  const [inputValue, setInputValue] = React.useState('');

  return (
    <Autocomplete
      disablePortal
      id="pokemonIdSelector"
      sx={{ width: 300 }}
      options={pokemonNames}
      value={selectedPokemonName}
      onChange={(_, newValue) => {
        setSelectedPokemonName(newValue);

        if (!newValue) {
          return;
        }

        const pokemonId = getPokemonIdFromName(newValue);
        setPokemonDexId(pokemonId);
      }}
      inputValue={inputValue}
      onInputChange={(_, newInputValue) => {
        setInputValue(newInputValue);
      }}
      renderInput={(params) => <TextField {...params} label="Search Pokemon" />}
    />
  );
};
