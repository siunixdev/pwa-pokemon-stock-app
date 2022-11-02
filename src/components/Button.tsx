import React from 'react'

const Button = ({ text, type, handle }: { text: string, type: string, handle: any }) => {
  return (
    <React.Fragment>
      <div className={`btn ${type === 'primary' ? 'btn--primary' : type === 'secondary' ? 'btn--secondary' : 'btn--primary'}`} onClick={handle}>
        <span className='text-sm font-medium'>{text}</span>
      </div>
    </React.Fragment>
  )
}

export default Button