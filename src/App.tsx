import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PokemonContext from './context/PokemonContext';
import Confirm from './pages/Confirm';
import Detail from './pages/Detail';
import Home from './pages/Home';
import dayjs from 'dayjs'

interface Pokemon {
  name: string,
  stok: number
}

const App = () => {
  const pokeUrl = 'https://pokeapi.co/api/v2/pokemon'
  const [pokemon, setPokemon] = useState<Pokemon[]>([])
  const [pokemonName, setPokemonName] = useState<string>('')
  const [pokemonDescription, setPokemonDescription] = useState<string>('')
  const [pokemonPcs, setPokemonPcs] = useState<number>(0)
  const [pokemonLusin, setPokemonLusin] = useState<number>(0)
  const [pokemonUpdateStok, setPokemonUpdateStok] = useState<number>(0)
  const [pokemonUpdatedStok, setPokemonUpdatedStok] = useState<number>(0)
  const [pokemonLastPage, setPokemonLastPage] = useState<string>('')

  const fetchPokemon = (url: string) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        let pokemonData: { name: string; stok: number, log: object }[] = []

        const localData = localStorage.getItem('pokemonData')

        data.results.forEach((dt: { name: string }) => {
          pokemonData.push({
            name: dt.name,
            stok: 0,
            log : [
              {
                date: dayjs().format('DD MMM YYYY'),
                data: [
                  {
                    time: dayjs().format('HH:mm'),
                    title: 'Stok Awal',
                    updateStok: 0,
                    updatedStok: 0,
                    description: 'Inital Value'
                  }
                ]
              }
            ]
          })
        });

        if(!localData) {
          localStorage.setItem('pokemonData', JSON.stringify(pokemonData))
        } else {
          const localPokemonData = localStorage.getItem('pokemonData')
          if(localPokemonData) {
            pokemonData = JSON.parse(localPokemonData)
          }
        }

        setPokemon(pokemonData)
      })
  }

  useEffect(() => {
      fetchPokemon(pokeUrl)
  }, [])

  return (
    <PokemonContext.Provider
      value={{
        pokemon,
        setPokemon,
        pokemonName,
        setPokemonName,
        pokemonDescription,
        setPokemonDescription,
        pokemonPcs,
        setPokemonPcs,
        pokemonLusin,
        setPokemonLusin,
        pokemonUpdateStok,
        setPokemonUpdateStok,
        pokemonUpdatedStok,
        setPokemonUpdatedStok,
        pokemonLastPage,
        setPokemonLastPage
      }}
    >
      <React.Fragment>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path='confirm' element={<Confirm />} />
            <Route path=':pokeId' element={<Detail />} />
          </Routes>
        </BrowserRouter>
      </React.Fragment>
    </PokemonContext.Provider>
  );
}

export default App;
