import React, { useContext, useEffect, useState } from 'react'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { Link, useParams, useNavigate } from 'react-router-dom'
import Modal from '../components/Modal'
import Button from '../components/Button'
import PokemonContext from '../context/PokemonContext'

interface DetailData {
  name: string,
  stok: number,
  log: [
    {
      date: string,
      data: [
        {
          time: string,
          title: string,
          description: string,
          updateStok: number,
          updatedStok: number,
        }
      ]
    }
  ]
}

const Detail = () => {
  const {
    setPokemonName,
    setPokemonLastPage,
    pokemonLusin,
    setPokemonLusin,
    pokemonPcs,
    setPokemonPcs,
    setPokemonUpdateStok,
    setPokemonUpdatedStok,
    isUpdate
  } = useContext(PokemonContext)
  const navigate = useNavigate()
  const param = useParams()
  const name = param.pokeId
  const [showUpdate, setShowUpdate] = useState(isUpdate)
  const [detail, setDetail] = useState<DetailData>()
  const [pcs, setPcs] = useState<number>(pokemonPcs)
  const [lusin, setLusin] = useState<number>(pokemonLusin)

  const handlePcsChange = (value: string) => {
    let pcs = parseInt(value.replace(/\D/g, ''))
    pcs = +pcs || 0
    setPcs(pcs)
  }

  const handleLusinChange = (value: string) => {
    let lusin = parseInt(value.replace(/\D/g, ''))
    lusin = +lusin || 0
    setLusin(lusin)
  }

  const handleSave = () => {
    if(pcs + lusin * 12 === 0) {
      window.alert("Maaf, Tidak ada data yang dapat disimpan!")
      return false
    }
    setPokemonLastPage(name)
    setPokemonLusin(lusin)
    setPokemonPcs(pcs)
    setPokemonUpdateStok(detail?.stok)
    setPokemonUpdatedStok(pcs + lusin * 12)
    setPokemonName(name)
    navigate('/confirm')
  }

  const handleBatal = () => {
    setPokemonLusin(0)
    setPcs(0)
    setLusin(0)
    setShowUpdate(false)
  }

  useEffect(() => {
    const getPokemon = () => {
      const pokemonData = localStorage.getItem('pokemonData')
      if (pokemonData) {
        const data = JSON.parse(pokemonData)
        const index = data.findIndex((dt: { name: string }) => dt.name === name)

        setDetail(data[index])
      }
    }

    getPokemon()
  }, [name])

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
      {
        detail ? (
          <>
            <div className='container mx-auto w-auto p-8'>
              <h1 className='text-4xl font-bold text-gray-800 my-6 capitalize'>{detail?.name?.split('-').join(' ')}</h1>
              <Button text='Update Stok' type='secondary' handle={() => setShowUpdate(true)} />
              <div className='mt-8'>
                <span>Sisa Stok</span>
                <h1 className='text-4xl text-gray-800 capitalize'>{detail?.stok} pcs</h1>
              </div>
              <div className='mt-10'>
                <h3 className='text-xl font-bold text-gray-800'>Riwayat Stok</h3>
                <p>Satuan stok dalam pcs</p>
                <div>
                  {
                    detail?.log.map((data, i: number) => {
                      return (
                        <table width="100%" className='mt-8' key={i}>
                          <thead>
                            <tr className='border-b border-gray-500 flex justify-between'>
                              <th className='my-4 text-gray-700 w-1/2 text-left'>{data?.date}</th>
                              <th className='my-4'>Jumlah</th>
                              <th className='my-4'>Stok</th>
                            </tr>
                          </thead>
                          <tbody>
                            {
                              data?.data.slice(0).map((dt, i) => {
                                return (
                                  <tr className='border-b border-gray-400 flex justify-between' key={i}>
                                    <td className='my-4 w-1/2'>
                                      <p className='text-sm'>{dt.time}</p>
                                      <p className='text-cyan-800 font-semibold capitalize'>{dt.title}</p>
                                      <p className='text-xs text-gray-600 mt-2'>{dt.description}</p>
                                    </td>
                                    <td className='my-4 text-cyan-800 text-center'>+ {dt.updatedStok}</td>
                                    <td className='my-4 text-center'>{dt.updateStok + dt.updatedStok}</td>
                                  </tr>
                                )
                              })
                            }
                          </tbody>
                        </table>
                      )
                    })
                  }
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
                            <input type="text" name="" id="" value={pcs} onChange={e => handlePcsChange(e.target.value)} className='w-16 ml-2 border border-gray-500 outline-none px-2 py-2 rounded text-gray-700' />
                            <span className='mx-2'>=</span>
                          </div>
                        </td>
                        <td className='my-4 flex text-center items-center justify-center'>{pcs}</td>
                      </tr>
                      <tr className='border-b border-gray-400 flex justify-between'>
                        <td className='my-4 w-1/2 flex text-left items-center justify-start'>Lusin</td>
                        <td className='my-4'>
                          <div className='flex items-center justify-end'>
                            <span>12 x </span>
                            <input type="text" name="" id="" value={lusin} onChange={e => handleLusinChange(e.target.value)} className='w-16 ml-2 border border-gray-500 outline-none px-2 py-2 rounded text-gray-700' />
                            <span className='mx-2'>=</span>
                          </div>
                        </td>
                        <td className='my-4 flex text-center items-center justify-center'>{lusin * 12}</td>
                      </tr>
                      <tr className='flex justify-between'>
                        <td colSpan={2} className='my-4 w-1/2'>Total stok (pcs)</td>
                        <td className='my-4 text-center font-semibold'>{pcs + lusin * 12}</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className='flex justify-end mt-4 gap-2'>
                    <Button text='Batal' type='secondary' handle={handleBatal} />
                    <Button text='Simpan' type='primary' handle={handleSave} />
                  </div>
                </div>
              </Modal>
            </div>
          </>
        ) : (
          <>
            <div className='pokemon-container'>
              <p className='text-gray-600 text-center mb-4'>Tidak ada data pokemon ditemukan</p>
              <Link to={'/'}>
                <p className='text-cyan-800 text-center underline'>
                  Kembali ke daftar Pokemon
                </p>
              </Link>
            </div>
          </>
        )
      }
    </React.Fragment>
  )
}

export default Detail;