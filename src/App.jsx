import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  return (
    <div style={{ backgroundColor: '#0a0911' }} className="flex w-full py-4 justify-between p-5">
      <div className='text-white'>Logo</div>
      <div>
        <ul className='flex gap-5'>
          <li className='text-white'>
            <a>Home</a>
          </li>
          <li className='text-white'>
            <a>About</a>
          </li>
          <li className='text-white'>
            <a>Classes</a>
          </li>
          <li className='text-white'>
            <a>Plans</a>
          </li>
          <li className='text-white'>
            <a>Contact</a>
          </li>
        </ul>
      </div>
      <div className='flex gap-4'>
        <button className='text-white'>
          <a href=''>Login</a>
        </button>
        <button className='text-white'>
          <a href=''>Sign Up</a>
        </button>
      </div>
    </div>
  )
}