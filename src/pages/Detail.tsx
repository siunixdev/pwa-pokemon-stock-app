import React, { useState } from 'react'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { Link, useParams } from 'react-router-dom'
import Modal from '../components/Modal'

const Detail = () => {
  const param = useParams()
  const name = param.pokeId
  const [showUpdate, setShowUpdate] = useState(false)

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
        <div className='bg-gray-100 w-fit px-4 py-2 border border-gray-300 rounded shadow cursor-pointer' onClick={() => setShowUpdate(true)}>
          <span className='text-cyan-800 text-sm font-medium'>Update stok</span>
        </div>
        <div className='mt-8'>
          <span>Sisa Stok</span>
          <h1 className='text-4xl text-gray-800 capitalize'>23 pcs</h1>
        </div>
        <div className='mt-10'>
          <h3 className='text-xl font-bold text-gray-800'>Riwayat Stok</h3>
          <p>Satuan stok dalam pcs</p>
          <div>
            <table width="100%" className='mt-8'>
              <thead>
                <tr className='border-b border-gray-500 flex justify-between'>
                  <th className='my-4 text-gray-700 w-1/2 text-left'>1 Nov 2022</th>
                  <th className='my-4'>Jumlah</th>
                  <th className='my-4'>Stok</th>
                </tr>
              </thead>
              <tbody>
                {
                  <tr className='border-b border-gray-400 flex justify-between'>
                    <td className='my-4 w-1/2'>
                      <p className='text-sm'>08:00</p>
                      <p className='text-cyan-800 font-semibold capitalize'>Stok Awal</p>
                      <p className='text-sm'>Stok Awal</p>
                    </td>
                    <td className='my-4 text-cyan-800 text-center'>+10</td>
                    <td className='my-4 text-center'>10</td>
                  </tr>
                }
              </tbody>
            </table>
          </div>
        </div>
        <Modal show={showUpdate}>
          <div className='text-center'>
            <h3 className='text-xl font-bold text-gray-800'>Riwayat Stok</h3>
            <p className='text-xs'>Masukkan jumlah stok yang tersedia di rak saat ini.</p>
          </div>
          <div>
            <table width="100%" className='mt-8'>
              <thead>
                <tr className='border-b border-gray-500 flex justify-between'>
                  <th className='my-4 text-gray-700 w-1/2 text-left'>Kemasan</th>
                  <th className='my-4'>Jumlah</th>
                  <th className='my-4'>Stok</th>
                </tr>
              </thead>
              <tbody className='text-gray-700 text-sm'>
                <tr className='border-b border-gray-400 flex justify-between'>
                  <td className='my-4 w-1/2 flex text-left items-center justify-start'>Pcs</td>
                  <td className='my-4'>
                    <div className='flex items-center justify-end'>
                      <span>1 x </span>
                      <input type="text" name="" id="" className='w-10 ml-2 border border-gray-500 outline-none px-2 py-2 rounded text-gray-700' />
                      <span className='mx-2'>=</span>
                    </div>
                  </td>
                  <td className='my-4 flex text-center items-center justify-center'>10</td>
                </tr>
                <tr className='border-b border-gray-400 flex justify-between'>
                  <td className='my-4 w-1/2 flex text-left items-center justify-start'>Lusin</td>
                  <td className='my-4'>
                    <div className='flex items-center justify-end'>
                      <span>12 x </span>
                      <input type="text" name="" id="" className='w-10 ml-2 border border-gray-500 outline-none px-2 py-2 rounded text-gray-700' />
                      <span className='mx-2'>=</span>
                    </div>
                  </td>
                  <td className='my-4 flex text-center items-center justify-center'>10</td>
                </tr>
                <tr className='flex justify-between'>
                  <td colSpan={2} className='my-4 w-1/2'>Total stok (pcs)</td>
                  <td className='my-4 text-center font-semibold'>130</td>
                </tr>
              </tbody>
            </table>
            <div className='flex justify-end mt-4 gap-2'>
              <div className='bg-gray-100 w-fit px-4 py-2 border border-gray-300 rounded shadow cursor-pointer' onClick={() => setShowUpdate(false)}>
                <span className='text-cyan-800 text-sm font-medium'>Batal</span>
              </div>
              <div className='bg-cyan-800 w-fit px-4 py-2 rounded shadow cursor-pointer'>
                <span className='text-white text-sm font-medium'>Simpan</span>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </React.Fragment>
  )
}

export default Detail;