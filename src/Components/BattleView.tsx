// src/components/BattleView.tsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMove, setBattleLog } from '../store/pokemonSlice';
import { RootState } from '../store';
import {store} from '../store';

const BattleView: React.FC = () => {
  const dispatch = useDispatch<typeof store.dispatch>();
  const { pokemon1, pokemon2, move1, move2, battleLog } = useSelector(
    (state: RootState) => state.pokemon
  );

  useEffect(() => {
    if (pokemon1) dispatch(fetchMove(pokemon1.moves[0].move.name));
    if (pokemon2) dispatch(fetchMove(pokemon2.moves[0].move.name));
  }, [pokemon1, pokemon2, dispatch]);

  // The winner is determined by the Pokémon with the strongest attack.

  const startBattle = () => {
    if (move1 && move2) {
      const winner =
        move1.power > move2.power
          ? `${pokemon1?.name} lands a decisive blow with ${move1.name} knocking out ${pokemon2?.name}!`
          : move1.power < move2.power
          ? `${pokemon2?.name} lands a decisive blow with ${move2.name} knocking out ${pokemon1?.name}!`
          : 'Draw';

      dispatch(setBattleLog(winner));
    }
  };

  return (
    <div className='flex flex-row  gap-[10px]'>      
      <p className='nes-text'>{battleLog}</p>
      <button className='nes-btn items-end' onClick={startBattle}>Start Battle</button>
    </div>
  );
};

export default BattleView;
