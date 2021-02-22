import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemonIndex: 0,
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state, props) => {
      if(state.pokemonIndex === props.pokemons.length - 1) {
        return {pokemonIndex: 0};
      } else {
        return {pokemonIndex: state.pokemonIndex + 1};
      }
    })
  }

  render() {
    return (
      <div>
        <div className="pokedex">
          <Pokemon pokemon={this.props.pokemons[this.state.pokemonIndex]} />
        </div>
        <button onClick={this.handleClick}>Próximo Pokemon</button>
      </div>
    );
  }
}

export default Pokedex;