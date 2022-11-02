import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PokemonContext from '../context/PokemonContext'
interface Pokemon {
  name: string,
  stok: number
}

const Home = () => {
  const {
    pokemon,
    setPokemonLusin,
    setPokemonPcs,
    setPokemonUpdatedStok,
    setIsUpdate
  } = useContext(PokemonContext)
  const [filteredPokemon, setFilteredPokemon] = useState<Pokemon[]>([])
  const [keyword, setKeyword] = useState<string>('')

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setFilteredPokemon(pokemon.filter((poke: { name: string | string[] }) => poke.name.includes(keyword)))
    }
  }

  useEffect(() => {
    if (keyword.trim() === '') {
      setFilteredPokemon(pokemon)
    }

    setPokemonLusin(0)
    setPokemonPcs(0)
    setPokemonUpdatedStok(0)
    setIsUpdate(false)
  }, [keyword, pokemon, setIsUpdate, setPokemonLusin, setPokemonPcs, setPokemonUpdatedStok])

  return (
    <React.Fragment>
      <div className='pokemon-container'>
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