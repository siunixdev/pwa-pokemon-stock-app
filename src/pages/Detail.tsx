import React from 'react'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { Link, useParams } from 'react-router-dom'

export const Detail = () => {
  const param = useParams()
  const name = param.pokeId

  return (
    <React.Fragment>
      <div className='relative flex items-center justify-center p-4 shadow'>
        <div className='absolute left-5 text-cyan-800'>
          <Link to={'/'}>
            <ArrowLeftIcon className='w-6 h-6' />
          </Link>
        </div>
        <h3 className='text-xl font-bold text-gray-800'>Stok Pokémon</h3>
      </div>
      <div className='container mx-auto p-5'>
        <h1 className='text-4xl font-bold text-gray-800 my-6 capitalize'>{name?.split('-').join(' ')}</h1>
        <div className='bg-gray-100 w-fit px-4 py-2 border border-gray-300 rounded shadow cursor-pointer'>
          <span className='text-cyan-800 text-sm font-medium'>Update stok</span>
        </div>
      </div>
    </React.Fragment>
  )
}
