import React from 'react';
import '../App.css';

function Main() {
  return (
    <main>
      <div className="todos">
        <div className="pokemon-todos" id="listaPokemon">
          <div className="pokemon">
            <p className="pokemon-id-back">#025</p>
            <div className="pokemon-imagen">
              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" alt='Pikachu' />
            </div>
            <div className="pokemon-info">
              <div className="nombre-contenedor">
                <p className="pokemon-id">#025</p>
                <h2 className="pokemon-nombre">Pikachu</h2>
              </div>
              <div className="pokemon-tipos">
                <p className="electric tipo">Electric</p>
                <p className="fighting tipo">Fighting</p>
              </div>
              <div className="pokemon-stats">
                <p className="stat">4m</p>
                <p className="stat">60kg</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main;