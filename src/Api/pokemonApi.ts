// src/api/pokemonApi.ts
import axios from 'axios';

const API_BASE = 'https://pokeapi.co/api/v2';

export const fetchPokemon = async (pokemonName: string) => {
  const response = await axios.get(`${API_BASE}/pokemon/${pokemonName}`);
  return response.data;
};

export const fetchMove = async (moveName: string) => {
  const response = await axios.get(`${API_BASE}/move/${moveName}`);
  return response.data;
};
