import React from 'react';
import { Link } from 'react-router-dom'
import { Box, Container, Typography } from '@mui/material';
import { ImageWithFallback } from '../common/ImageWithFallback';
import { getPokemonIdFromName } from '../../../plugins/pokedex-data-plugin/dex/name';
import { getPokemonMonsNoAndFormNoFromPokemonId } from '../../../plugins/pokedex-data-plugin/dex/name';

export const PokemonAlternativeFormsList = ({ pokemonForms }) => {
  return pokemonForms.length > 1 ? (
    <Box>
      <Typography fontSize="2rem">Alternative Forms</Typography>
      <Container>
        <Box display="flex" flexWrap="wrap">
          {pokemonForms.map((form, i) => {
            const pokemonId = getPokemonIdFromName(form.name); // TODO Add globalState back in
            const [monsno, formno] = getPokemonMonsNoAndFormNoFromPokemonId(pokemonId); // TODO Add globalState back in
            const pokemonPath = formno === 0 ? monsno : `${monsno}_${formno}`;
            return (
              <Box key={`${form.name}-${i}`} display="flex" alignItems="center" margin="4px 16px 16px 4px">
                <ImageWithFallback
                  src={`/img/${form.imageSrc}`}
                  fallbackSrc={`/img/${pokemonForms[0].imageSrc}`}
                  height={30}
                />
                <Link to={`/pokedex/${pokemonPath}`}>
                  <Typography marginLeft="8px">
                    {form.name}
                    {i < pokemonForms.length - 1 && ','}
                  </Typography>
                </Link>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  ) : null;
};
