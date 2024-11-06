// src/components/PokemonCard.tsx
import React , {useEffect, useState} from 'react';
import { Pokemon } from '../types/pokemonTypes';
import { SyntheticEventData } from 'react-dom/test-utils';
import Modal from './Modal';

interface PokemonCardProps {
  pokemon: Pokemon | null;
  align: string;
  id: number;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon, align, id }) => {
  const [shouldShowstats, setShouldShowStats] = useState<boolean>(false); 
  const [isModalOpen, setModalOpen] = useState(false);
    // The problem is that the onStatButtonClick function is not properly toggling the shouldShowstats state
    // const onStatButtonClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => setShouldShowStats(prevState => !prevState);

  
  useEffect(() => { 
    console.log('shouldShowstats', shouldShowstats);
   
  },[shouldShowstats]);

   if (!pokemon) return null;

   // Use react create portal to display the stats in a modal
   
  const PokemonStats = (): React.JSX.Element => (
    <div className="nes-table-responsive">
      <table className="nes-table is-bordered is-dark">
        <thead>
          <tr>
            <th>Type</th>
            <th>HP</th>
            <th>Attack</th>
            <th>Defense</th>
            <th>Moves</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{pokemon.types[0].type.name}</td>
            <td>{pokemon.stats[0].base_stat}</td>
            <td>{pokemon.stats[1].base_stat}</td>
            <td>{pokemon.stats[2].base_stat}</td>
            <td> {pokemon.moves.map((move) => (
                    <span key={move.move.name}>{move.move.name}, </span>
                  ))}</td>
          </tr>
        </tbody>
      </table>
  </div> 
  )
 

  const handleStatButtonClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  
  return (
    <div>
        <section className="message-list flex items-center" >
          <section className={`message -${align}`}>          
            <div className={`align-${align} message-bubble`} >
              <div className={`nes-balloon from-${align}`}>
                <p className='text-black'>Hello! I'm {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}.</p>
                <button className='nes-btn' onClick={handleStatButtonClick}>
                  <span className='nes-text is-primary'>{shouldShowstats ? 'Hide' : 'Show'} Stats</span>
                </button>
              </div>             
            </div>            
            <img className={`align-${align} pokemon-image`} src={pokemon.sprites.front_default} alt={pokemon.name} width={150} height={150}/>
          </section>
        </section>
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <div className="pokemon-stats">
            <PokemonStats />
          </div>
        </Modal>
        {
          id === 0 && <hr />
        }
    </div>
  );
};

export default PokemonCard;
