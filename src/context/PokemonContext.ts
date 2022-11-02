import React from 'react'

interface IPokemonContext {
  pokemon:any,
  setPokemon?: any,
  pokemonName:string,
  setPokemonName?: any,
  pokemonDescription:string,
  setPokemonDescription?: any,
  pokemonPcs:number,
  setPokemonPcs?: any,
  pokemonLusin:number,
  setPokemonLusin?: any,
  pokemonUpdateStok:number,
  setPokemonUpdateStok?: any,
  pokemonUpdatedStok:number,
  setPokemonUpdatedStok?: any,
  pokemonLastPage:string,
  setPokemonLastPage?: any,
}

const defaultstate = {
  pokemon:[],
  pokemonName:'',
  pokemonDescription:'',
  pokemonPcs:0,
  pokemonLusin:0,
  pokemonUpdateStok:0,
  pokemonUpdatedStok:0,
  pokemonLastPage:''
}

const PokemonContext = React.createContext<IPokemonContext>(defaultstate)

export default PokemonContext