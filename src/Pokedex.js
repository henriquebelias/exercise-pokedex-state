import React from 'react';
import Pokemon from './Pokemon';
import Button from './Button';
import './Pokedex.css';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemonIndex: 0,
      typeFilter: 'All',
    }

    this.nextPokemon = this.nextPokemon.bind(this);
    this.pokemonType = this.pokemonType.bind(this);
  }

  nextPokemon() {
    this.setState(({ pokemonIndex }, _props) => {
      if(pokemonIndex === this.filterPokemons(this.state.typeFilter).length - 1) {
        return {pokemonIndex: 0};
      } else {
        return {pokemonIndex: pokemonIndex + 1};
      }
    })
  }

  pokemonType({ target }) {
    this.setState({
      pokemonIndex: 0,
      typeFilter: target.innerText,
    })
  }

  filterPokemons(type) {
    const { pokemons } = this.props;

    return pokemons.filter(pokemon => {
      return type === 'All' ? true : pokemon.type === type
    });
  }

  render() {
    const { pokemons } = this.props;
    const { pokemonIndex, typeFilter } = this.state;
    return (
      <div>
        <div className="pokedex">
          <Pokemon pokemon={this.filterPokemons(typeFilter)[pokemonIndex]} />
        </div>
        <button onClick={this.pokemonType}>All</button>
        <Button pokemonType={this.pokemonType} pokemons={pokemons} />
        <div>
          <button
            onClick={this.nextPokemon}
            disabled={this.filterPokemons(typeFilter).length === 1}
          >
            Próximo Pokemon
          </button>
        </div>
      </div>
    );
  }
}

export default Pokedex;