// src/pages/HomePage.tsx
import React, { useEffect , useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store'; // Adjust the path as necessary
import { fetchPokemon,setBattleLog } from '../store/pokemonSlice';
import BattleView from '../Components/BattleView';
import axios from 'axios';
import PokemonList from '../Components/PokemonList';
const HomePage = () => {
  const [totalPokemon, setTotalPokemon] = useState<number>(0);
  const dispatch: AppDispatch = useDispatch();
  
  const API_BASE = 'https://pokeapi.co/api/v2';

  const getRandomPokemon = () => {
    for (let i = 0; i < 2; i++) {
      const randomPokemon : number = Math.floor(Math.random() * totalPokemon) + 1;    
        if(randomPokemon <= 1000) {
          dispatch(fetchPokemon(randomPokemon));
        }
    }
    // update state to clear battle log
    dispatch(setBattleLog(''));
  };

  useEffect(() => {
    axios.get(`${API_BASE}/pokemon`)
      .then((response) => {
        setTotalPokemon(response.data.count as number);
      });
      dispatch(setBattleLog(''));
  }, []);

  useEffect(() => {
    getRandomPokemon();
  },[totalPokemon]);

  return (
    <>    
    <div  className='nes-container with-title is-centered is-dark flex flex-col gap-8'>
      <p className='title is-dark'>Pokémon Battle</p>
      <div className='main-container'>      
        <PokemonList />
        <button className='nes-btn' onClick={getRandomPokemon}>Get Random Pokémon</button>
      </div>
      <div className='nes-container with-title is-dark'>
        <BattleView />
      </div>
    </div>
    </>
  );
};

export default HomePage;
