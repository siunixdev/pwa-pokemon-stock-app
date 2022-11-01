import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <React.Fragment>
      <div className='container mx-auto p-8'>
        <div>
          <h1 className='text-4xl font-bold text-gray-800'>Stok Pokémon</h1>
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
              <Link to={'sdsds'}>
                <tr className='border-b border-gray-400 flex justify-between'>
                  <td className='my-4 text-cyan-800 font-semibold'>Pikachu</td>
                  <td className='my-4'>10</td>
                </tr>
              </Link>
              <Link to={'sdsds'}>
                <tr className='border-b border-gray-400 flex justify-between'>
                  <td className='my-4 text-cyan-800 font-semibold'>Bulbasaur</td>
                  <td className='my-4'>10</td>
                </tr>
              </Link>
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Home