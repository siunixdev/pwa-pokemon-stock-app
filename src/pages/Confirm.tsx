import React, { useContext, useState } from 'react'
import { XMarkIcon, ArrowRightIcon, PencilIcon } from '@heroicons/react/24/outline'
import Button from '../components/Button'
import PokemonContext from '../context/PokemonContext'
import { useNavigate } from 'react-router-dom'
import dayjs from 'dayjs'

const Confirm = () => {
  const navigate = useNavigate()
  const {
    pokemon,
    setPokemon,
    pokemonName,
    pokemonLastPage,
    pokemonLusin,
    setPokemonLusin,
    pokemonPcs,
    setPokemonPcs,
    pokemonUpdateStok,
    setPokemonUpdateStok,
    pokemonUpdatedStok,
    setPokemonUpdatedStok,
    setIsUpdate
  } = useContext(PokemonContext)
  const [description, setDescription] = useState<string>('')

  const handleClose = () => {
    if (window.confirm("Are you sure ? your recent update will be reset if you close this window")) {
      setPokemonLusin(0)
      setPokemonPcs(0)
      setPokemonUpdatedStok(0)
      setPokemonUpdateStok(0)
      setIsUpdate(false)
      navigate(`/${pokemonLastPage}`)
    }
  }

  const handleEdit = () => {
    setIsUpdate(true)
    navigate(`/${pokemonLastPage}`)
  }

  const handleSave = () => {
    const date = dayjs().format('DD MMM YYYY')
    const time = dayjs().format('HH:mm')
    const pokemonIndex = pokemon.findIndex((dt: { name: string }) => dt.name === pokemonName)
    const pokemonDateIndex = pokemon[pokemonIndex].log.findIndex((dt: { date: string }) => dt.date === date)
    pokemon[pokemonIndex].stok = pokemonUpdateStok + pokemonUpdatedStok

    if (pokemonDateIndex !== -1) {
      pokemon[pokemonIndex].log[pokemonDateIndex].data.push({
        time: time,
        title: 'Update Stok',
        updateStok: pokemonUpdateStok,
        updatedStok: pokemonUpdatedStok,
        description: description
      })
    } else {
      pokemon[pokemonIndex].log.push({
        date: date,
        data: [
          {
            time: time,
            title: 'Update Stok',
            updateStok: pokemonUpdateStok,
            updatedStok: pokemonUpdatedStok,
            description: description
          }
        ]
      })
    }

    setPokemon(pokemon)
    localStorage.setItem('pokemonData', JSON.stringify(pokemon))
    setPokemonLusin(0)
    setPokemonPcs(0)
    setPokemonUpdatedStok(0)
    setPokemonUpdateStok(0)
    setIsUpdate(false)
    navigate(`/${pokemonLastPage}`)
  }

  return (
    <React.Fragment>
      <div className='relative flex items-center justify-center p-4 shadow'>
        <div className='absolute left-5 text-cyan-800'>
          <XMarkIcon className='w-6 h-6' onClick={handleClose} />
        </div>
        <h3 className='text-xl font-bold text-gray-800'>Stok Pokémon</h3>
      </div>
      <div className='container mx-auto w-auto md:w-1/2 p-8'>
        <h1 className='text-2xl md:text-4xl font-bold text-gray-800 my-6 capitalize'>Konfirmasi Update stok</h1>
        <div className='mt-8'>
          <span>Selisih</span>
          <h1 className='text-2xl md:text-4xl text-gray-800 capitalize'>+{pokemonUpdatedStok} pcs</h1>
        </div>
        <div className='mt-10'>
          <div className='grid grid-cols-2'>
            <div>
              <p className='text-xs md:text-base'>Di Sistem</p>
              <h3 className='text-xl text-gray-800'>{pokemonUpdateStok} pcs</h3>
            </div>
            <div className='flex gap-8'>
              <div className='flex justify-center items-center'>
                <ArrowRightIcon className='w-6 h-6' />
              </div>
              <div>
                <p className='text-xs md:text-base'>Hasil Update Stok</p>
                <h3 className='text-xl text-gray-800'>{pokemonUpdateStok + pokemonUpdatedStok} pcs</h3>
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
                      <p className='text-sm'>{pokemonPcs} pcs, {pokemonLusin} lusin (12pcs)</p>
                    </td>
                    <td className='flex items-center gap-3 my-4 text-cyan-800 text-center'>
                      <span>+{pokemonUpdatedStok} pcs</span>
                      <div className='cursor-pointer' onClick={handleEdit}>
                        <PencilIcon className='w-4 h-4' />
                      </div>
                    </td>
                  </tr>
                }
                <tr className='flex justify-between'>
                  <td className='my-4 w-1/2 font-semibold'>Total hasil stok opname</td>
                  <td className='my-4 text-cyan-800 text-center'>+{pokemonUpdatedStok} pcs</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='mt-10'>
            <h3 className='font-bold text-gray-800 mb-4'>Catatan</h3>
            <textarea name="" id="" rows={3} value={description} onChange={e => setDescription(e.target.value)} className='w-full border border-gray-200 outline-none p-4 rounded-md'></textarea>
          </div>
          <div className='flex justify-end mt-4'>
            <Button text='Simpan' type='primary' handle={handleSave} />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Confirm