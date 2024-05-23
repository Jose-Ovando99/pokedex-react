import axios from "axios";
import { useEffect, useState } from "react";

const PokemonPreview = ({ pokemonURL }) => {
  
  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    axios
    .get(pokemonURL)
    .then(({ data }) => setPokemon(data))
    .catch((err) => console.log(err));
  }, []);


  return (
    <article>
      <header>
        <img src={pokemon?.sprites.versions["generation-v"]["black-white"].front_default} />
      </header>
      <span>N</span>
      <h4>PokemonName</h4>
      <ul>
        <li>Poison</li>
      </ul>
    </article>
  )
};

export default PokemonPreview;