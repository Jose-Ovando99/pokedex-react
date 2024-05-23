import axios from "axios";
import { useEffect, useState } from "react";
import { colorByType } from "../constants/pokemon";

const PokemonPreview = ({ pokemonURL }) => {
  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    axios
      .get(pokemonURL)
      .then(({ data }) => setPokemon(data))
      .catch((err) => console.log(err));
  }, []);


  return (
    <article className="grid gap-2 text-center capitalize shadow-lg shadow-slate-400/20 bg-white rounded-[30px] relative font-semibold pb-4 border-2 hover:border-slate-200 border-transparent cursor-pointer group">
      <header className="h-9">
        <img
          className="group-hover:scale-110 pixelated transition-transform absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2"
          src={pokemon?.sprites.versions["generation-v"]["black-white"].front_default} />
      </header>
      <span className="text-sm text-slate-400">N° {pokemon?.id}</span>
      <h4 className="text-lg">{pokemon?.name}</h4>
      <ul className="flex gap-2 justify-center">
        {pokemon?.types.map(type => <li 
        className={`p-1 rounded-md px-2 text-white text-sm ${colorByType[type.type.name]}`} key={type.type.name}>{type.type.name}</li>)}
      </ul>
    </article>
  )
};

export default PokemonPreview;