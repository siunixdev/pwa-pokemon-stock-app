import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

interface Pokemon {
  name: string
}

const Home = () => {
  const pokeUrl = 'https://pokeapi.co/api/v2/pokemon'
  const [next, setNext] = useState<string>('')
  const [prev, setPrev] = useState<string>('')
  const [pokemon, setPokemon] = useState<Pokemon[]>([])

  const fetchPokemon = (url: string) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data.results)
        setNext(data.next)
        setPrev(data.previous)
      })
  }

  useEffect(() => {
    fetchPokemon(pokeUrl)
  }, [])

  return (
    <React.Fragment>
      <div className='container mx-auto p-8'>
        <div>
          <h1 className='text-3xl md:text-4xl font-bold text-gray-800'>Stok Pokémon</h1>
        </div>
        <div className='mt-10'>
          <input type="text" name="" id="" className='border border-gray-500 outline-none px-4 py-2 rounded text-gray-700 w-full md:w-min' placeholder='Search Pokémon' />
          <table width="100%" className='mt-8'>
            <thead>
              <tr className='border-b border-gray-500 flex justify-between'>
                <th className='my-4 text-gray-700'>Nama</th>
                <th className='my-4'>Stok</th>
              </tr>
            </thead>
            <tbody>
              {
                pokemon.map((poke, i) => (
                  <Link to={`${poke.name}`} key={i}>
                    <tr className='border-b border-gray-400 flex justify-between'>
                      <td className='my-4 text-cyan-800 font-semibold capitalize'>{poke.name.split('-').join(' ')}</td>
                      <td className='my-4'>{i}</td>
                    </tr>
                  </Link>
                ))
              }
            </tbody>
          </table>
          <div className='flex justify-between mt-8'>
            <div className={`flex items-center justify-center gap-2 bg-gray-100 text-cyan-800 w-fit px-4 py-2 border border-gray-300 rounded shadow ${!prev ? 'text-gray-400 cursor-not-allowed' : 'cursor-pointer'}`}
              onClick={() => {
                if (prev) {
                  fetchPokemon(prev)
                }
              }}
            >
              <ChevronLeftIcon className='w-4 h-4' />
              <span className='text-sm font-medium'>Prev</span>
            </div>
            <div className={`flex items-center justify-center gap-2 bg-gray-100 text-cyan-800 w-fit px-4 py-2 border border-gray-300 rounded shadow ${!next ? 'text-gray-400 cursor-not-allowed' : 'cursor-pointer'}`}
              onClick={() => {
                if (next) {
                  fetchPokemon(next)
                }
              }}
            >
              <span className='text-sm font-medium'>Next</span>
              <ChevronRightIcon className='w-4 h-4' />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Home