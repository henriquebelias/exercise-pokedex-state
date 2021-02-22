import React from 'react';

class Button extends React.Component {
  render() {
    const { pokemonType, pokemons } = this.props;

    return (
      <div>
        {pokemons.reduce((acc, { type }) => {
          if(acc.includes(type)) {
            return acc;
          }
          acc.push(type);
          return acc;
        }, []).map(buttonName => <button onClick={pokemonType} key={buttonName}>{buttonName}</button>)}
      </div>
    )
  }
}


export default Button;
