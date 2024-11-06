// src/store/pokemonSlice.ts
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { PokemonState,Pokemon, Move } from '../types/pokemonTypes';
import axios from 'axios';

const API_BASE = 'https://pokeapi.co/api/v2';

// Thunks to fetch Pokémon and Moves data
export const fetchPokemon = createAsyncThunk(
  'pokemon/fetchPokemon',
  async (pokemonId: number) => {
    const response = await axios.get<Pokemon>(`${API_BASE}/pokemon/${pokemonId}`);
    return response.data;
  }
);

// fetchMove radonmly fetches a move from the API
export const fetchMove = createAsyncThunk(
  'pokemon/fetchMove',
  async (name: string) => {
    const response = await axios.get<Move>(`${API_BASE}/move/${name}`);
    return response.data;
  }
);



const initialState: PokemonState = {
  pokemon1: null,
  pokemon2: null,
  move1: null,
  move2: null,
  battleLog: '',
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setBattleLog: (state : PokemonState, action: PayloadAction<string>) => {
      state.battleLog = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemon.fulfilled, (state, action) => {
        if (!state.pokemon1) {
          state.pokemon1 = action.payload;
        } else {
          state.pokemon2 = action.payload;
        }
      })
      .addCase(fetchMove.fulfilled, (state, action) => {
        if (!state.move1) {
          state.move1 = action.payload;
        } else {
          state.move2 = action.payload;
        }
      });
  },
});

export const { setBattleLog } = pokemonSlice.actions;

export default pokemonSlice.reducer;
