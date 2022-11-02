import React from 'react'

type ModalProps = {
  children: React.ReactNode
  show: boolean
}

const Modal = ({ children, show }: ModalProps) => {
  return (
    <>
      {
        show && (
          <>
            <div className='absolute top-0 left-0 min-h-screen w-full bg-gray-500 opacity-50'>
            </div>
            <div className='absolute flex top-0 left-0 min-h-screen w-full items-center justify-center'>
              <div className='bg-white p-8 rounded-md max-w-sm'>
                {children}
              </div>
            </div>
          </>
        )
      }
    </>
  )
}

export default Modal