import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { PokemonPageContent } from '../components/Pokedex/PokemonPageContent';

export default function PokemonPage({ data, pokemonNames }) {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description="Pokemon Luminescent Version, A ROM Hack for Pokemon Brilliant Diamond and Shining Pearl"
    >
      <PokemonPageContent data={data} pokemonNames={pokemonNames} />
    </Layout>
  );
}
