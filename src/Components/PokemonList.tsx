// src/components/BattleView.tsx
import React from 'react';
import {  useSelector } from 'react-redux';
import { RootState } from '../store';
import PokemonCard from './PokemonCard';

const PokemonList: React.FC = () => {
 
  
  const { pokemon1, pokemon2 } = useSelector(
    (state: RootState) => state.pokemon
  );
  const pokemonArray = [pokemon1, pokemon2];

  if (!pokemon1 || !pokemon2) return null;
  return (
      <section className='nes-container is-rounded is-dark'>  
        {
          pokemonArray.map((pokemon, index) => (
            <PokemonCard pokemon={pokemon} id={index} align={index === 0 ? 'left' : 'right'} />   
          ))
        }
      </section>
  );
};

export default PokemonList;
