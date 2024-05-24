import { useEffect, useState, useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import axios from 'axios';
import { IconSearch } from '@tabler/icons-react';
import PokemonList from './PokemonList';

const INITIAL_LIMIT = 40;
const INCREASE_LIMIT = 20;

const Pokemons = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [pokemonName, setPokemonName] = useState('');
  const [limit, setLimit] = useState(INITIAL_LIMIT);

  const targetObserver = useRef(null);
  const entry = useIntersectionObserver(targetObserver, {});
  const isVisible = !!entry?.isIntersecting;

  const pokemonsByName = allPokemons.filter((pokemon) => pokemon.name.includes(pokemonName));

 const handleChangePokemonName = (e) => setPokemonName(e.target.value.toLowerCase());

  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=898')
      .then(({ data }) => setAllPokemons(data.results))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
  if(isVisible) {
    const maxPokemons = pokemonsByName.length;
    const newLimit = limit + INCREASE_LIMIT;
    newLimit > maxPokemons ? setLimit(maxPokemons) : setLimit(newLimit);
  }
  }, [isVisible]);

  useEffect(() => {
    setLimit(INITIAL_LIMIT);
  }, [pokemonName])

  return(
  <section className='p-4 py-5'>
    <form>
      <div className='bg-white p-4 flex rounded-2xl text-lg'>
        <input className='outline-none flex-1' onChange={handleChangePokemonName} autoComplete='off' type='text' name='pokemonName' placeholder='Search your Pokemon' />
        <button className='bg-red-500 p-2 rounded-xl shadow-lg  shadow-red-500/50 hover:bg-red-400 transition-colors'>
          <IconSearch color='white' stroke={3} />
        </button>
      </div>
    </form>
    <PokemonList pokemons={pokemonsByName.slice(0, limit)}/>
  
  {/* Target observer */}
  <span ref={targetObserver}></span>
  </section>
  );
};

export default Pokemons;
