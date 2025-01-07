import React from 'react'
import './Spinner.css';
const Spinner = () => {
  return (
    <div className='flex items-center flex-col space-y-2'>
        <div className='spinner'></div>
        <p className='text-xl text-slate-950 font-bold'>Loading...</p>
    </div>
  )
}

export default Spinner;