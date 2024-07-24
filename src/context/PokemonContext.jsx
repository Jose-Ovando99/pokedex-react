import { createContext, useState } from "react";

const PokemonContext = createContext();

const PokemonProvider = ({ children }) => {

  const [showDetailPokemon, setShowDetailPokmeon] = useState(false);

  const showPokemonById = () => {
    setShowDetailPokmeon(true);
  };

  const closePokemonDetail = () => {
    setShowDetailPokmeon(false);
  };

  return (
  <PokemonContext.Provider value={{
    showDetailPokemon,
    showPokemonById,
    closePokemonDetail,
  }}>
    {children}
  </PokemonContext.Provider>
  );
};

export { PokemonContext, PokemonProvider };
