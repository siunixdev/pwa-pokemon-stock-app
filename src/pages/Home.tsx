import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

interface Pokemon {
  name: string,
  stok: number
}

const Home = () => {
  const pokeUrl = 'https://pokeapi.co/api/v2/pokemon'
  const [pokemon, setPokemon] = useState<Pokemon[]>([])
  const [filteredPokemon, setFilteredPokemon] = useState<Pokemon[]>([])
  const [keyword, setKeyword] = useState<string>('')

  const fetchPokemon = (url: string) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const pokemonData: { name: string; stok: number }[] = []

        data.results.forEach((dt: { name: string }) => {
          pokemonData.push({
            name: dt.name,
            stok: 0,
          })
        });

        setPokemon(pokemonData)
        setFilteredPokemon(pokemonData)
      })
  }

  useEffect(() => {
    if(keyword.trim() === '') {
      fetchPokemon(pokeUrl)
    }
  }, [keyword])

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if(event.key === 'Enter') {
      setFilteredPokemon(pokemon.filter(poke => poke.name.includes(keyword)))
    }
  }

  return (
    <React.Fragment>
      <div className='container mx-auto p-8'>
        <div>
          <h1 className='text-3xl md:text-4xl font-bold text-gray-800'>Stok Pokémon</h1>
        </div>
        <div className='mt-10'>
          <input type="text" name="" id="" value={keyword} onChange={e => setKeyword(e.target.value)} onKeyDown={handleKeyDown} className='border border-gray-500 outline-none px-4 py-2 rounded text-gray-700 w-full md:w-min' placeholder='Search Pokémon' />
          <table width="100%" className='mt-8'>
            <thead>
              <tr className='border-b border-gray-500 flex justify-between'>
                <th className='my-4 text-gray-700'>Nama</th>
                <th className='my-4'>Stok</th>
              </tr>
            </thead>
            <tbody>
              {
                filteredPokemon.map((poke, i) => (
                  <Link to={`${poke.name}`} key={i}>
                    <tr className='border-b border-gray-400 flex justify-between'>
                      <td className='my-4 text-cyan-800 font-semibold capitalize'>{poke.name.split('-').join(' ')}</td>
                      <td className='my-4'>{poke.stok}</td>
                    </tr>
                  </Link>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Home