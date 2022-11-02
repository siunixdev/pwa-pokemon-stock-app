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
            <div className='overlay'>
            </div>
            <div className='modal'>
              <div className='modal-body'>
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