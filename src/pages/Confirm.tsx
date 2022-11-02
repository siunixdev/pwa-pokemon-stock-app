import React from 'react'
import { XMarkIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

const Confirm = () => {
  return (
    <React.Fragment>
      <div className='relative flex items-center justify-center p-4 shadow'>
        <div className='absolute left-5 text-cyan-800'>
          <div>
            <XMarkIcon className='w-6 h-6' />
          </div>
        </div>
        <h3 className='text-xl font-bold text-gray-800'>Stok Pokémon</h3>
      </div>
      <div className='container mx-auto w-auto md:w-1/2 p-8'>
        <h1 className='text-2xl md:text-4xl font-bold text-gray-800 my-6 capitalize'>Konfirmasi Update stok</h1>
        <div className='mt-8'>
          <span>Selisih</span>
          <h1 className='text-2xl md:text-4xl text-gray-800 capitalize'>+123 pcs</h1>
        </div>
        <div className='mt-10'>
          <div className='grid grid-cols-2'>
            <div>
              <p className='text-xs md:text-base'>Di Sistem</p>
              <h3 className='text-xl text-gray-800'>10 pcs</h3>
            </div>
            <div className='flex gap-8'>
              <div className='flex justify-center items-center'>
                <ArrowRightIcon className='w-6 h-6' />
              </div>
              <div>
                <p className='text-xs md:text-base'>Hasil Update Stok</p>
                <h3 className='text-xl text-gray-800'>121 pcs</h3>
              </div>
            </div>
          </div>
          <div className='mt-12'>
            <h3 className='text-sm md:text-xl font-bold text-gray-800'>Detail stok opname</h3>
            <table width="100%" className='mt-8 text-gray-700'>
              <thead>
                <tr className='border-b border-gray-500 flex justify-between'>
                  <th className='my-4 text-gray-700 w-1/2 text-left'>Keterangan</th>
                  <th className='my-4'>Jumlah</th>
                </tr>
              </thead>
              <tbody>
                {
                  <tr className='border-b border-gray-400 flex justify-between'>
                    <td className='my-4 w-1/2'>
                      <p className='text-cyan-800 font-semibold capitalize'>Hasil update stok</p>
                      <p className='text-sm'>3 pcs, 45 lusin (12s)</p>
                    </td>
                    <td className='my-4 text-cyan-800 text-center'>+453 pcs</td>
                  </tr>
                }
                <tr className='flex justify-between'>
                  <td className='my-4 w-1/2 font-semibold'>Total hasil stok opname</td>
                  <td className='my-4 text-cyan-800 text-center'>+453 pcs</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='mt-10'>
            <h3 className='font-bold text-gray-800 mb-4'>Catatan</h3>
            <textarea name="" id="" rows={3} className='w-full border border-gray-200 outline-none p-4 rounded-md'></textarea>
          </div>
          <div className='flex justify-end mt-4'>
            <div className='bg-cyan-800 w-fit px-4 py-2 rounded shadow cursor-pointer'>
              <span className='text-white text-sm font-medium'>Simpan</span>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Confirm