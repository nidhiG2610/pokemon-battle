// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from './pokemonSlice';

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>; // selected pokemon state
export type AppDispatch = typeof store.dispatch; // dispatch function