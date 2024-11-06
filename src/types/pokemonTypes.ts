// src/types/pokemonTypes.ts
export interface Pokemon {
    name: string;
    stats: { base_stat: number }[];
    sprites: { front_default: string; back_default: string };
    types: { type: { name: string } }[];
    moves: { move: { name: string } }[];
    isStatCardOpen: boolean;
  }
  
  export interface Move {
    name: string;
    power: number;
  }

  export interface PokemonState { 
      pokemon1: Pokemon | null;
      pokemon2: Pokemon | null;
      move1: Move | null;
      move2: Move | null;
      battleLog: string;
 }
  