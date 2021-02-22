import React from 'react';

class Button extends React.Component {
  render() {
    const { pokemonType, pokemons } = this.props;

    return (
      <div>
        {pokemons.map(pokemon => {
          return <button key={pokemon.id} onClick={pokemonType}>{pokemon.type}</button>
        })}
      </div>
    )
  }
}


export default Button;
