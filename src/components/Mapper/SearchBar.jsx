import React, { useEffect, useState } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import Fuse from 'fuse.js';
import './style.css';
import { getLocationNames } from './coordinates';

const PokemonSearchInput = ({ allPokemons, debouncedText, setDebouncedText }) => {
  const fuse = new Fuse(allPokemons, { keys: ['monsno', 'name'] });

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedText(debouncedText);
    }, 100);
    return () => clearTimeout(timer);
  }, [debouncedText]);

  const defaultOption = allPokemons.length > 0 ? allPokemons[0] : '';
  return (
    <div className="monSearchBar">
      <Autocomplete
        id="pokemon-search-input"
        options={allPokemons}
        getOptionLabel={(option) => option.name}
        defaultValue={defaultOption}
        onChange={(e, value) => setDebouncedText(value.name)}
        renderInput={(params) => (
          <TextField
            {...params}
            type="search"
            label="Search Pokémon Location"
            fullWidth
            value={debouncedText}
            onChange={(e) => setDebouncedText(e.target.value)}
          />
        )}
      />
    </div>
  );
};

const LocationNameDropdown = ({ locationName, setLocationName }) => {
  const locations = getLocationNames();
  useEffect(() => {
    const timer = setTimeout(() => {
      locationName.current = locationName;
    }, 100);
    return () => clearTimeout(timer);
  }, [locationName]);

  const defaultOption = locations.length > 0 ? locations[0] : '';
  return (
    <div className="location">
      <Autocomplete
        id="location-input"
        options={locations}
        getOptionLabel={(option) => option}
        defaultValue={defaultOption}
        onChange={(e, value) => locationName.current = value}
        renderInput={(params) => (
          <TextField
            {...params}
            type="search"
            label="Current Location"
            fullWidth
            value={locationName}
            onChange={(e) => locationName.current = e.target.value}
          />
        )}
      />
    </div>
  );
};

export const SearchBar = ({
  canvasDimensions,
  pokemonList,
  debouncedText,
  handleDebouncedTextChange,
  locationName,
}) => {
  return (
    <div
      className="infoCol"
      style={{
        width: `${canvasDimensions.width-10}px`,
        height: `${canvasDimensions.height}px`
      }}
    >
        <PokemonSearchInput
          allPokemons={pokemonList}
          debouncedText={debouncedText}
          setDebouncedText={handleDebouncedTextChange}
        />
      <LocationNameDropdown locationName={locationName} />
    </div>
  )
};