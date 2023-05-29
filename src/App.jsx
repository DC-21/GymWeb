import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import logo from './logo.png'
import fit from './fit.jpg'
import './App.css'

export default function App() {
  return (
    <div> 
      <div style={{ backgroundColor: '#0a0911' }} className="flex w-full py-4 justify-between p-5">
      <div className='text-white'>
        <img className='w-10 h-10' src={logo}/>
      </div>
      <div>
        <ul className='flex gap-5 pt-3'>
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
        <button className='text-white rounded py-2 px-4' style={{backgroundColor: '#f74700'}}>
          <a href=''>Sign Up</a>
        </button>
      </div>
    </div>
    <section className='h-screen w-full ' style={{ backgroundColor: '#0a0911' }}>
      <div className='flex'>
        <div className='w-1/2 items-center'>
          <p className='text-white font-bold text-4xl justify-center pt-8'>TRANSFORM YOUR
          FITNESS AND YOUR LIFE</p>
        </div>
        <div className='w-1/2'>
          <img src={fit}/>
        </div>
      </div>
    </section>
    </div>
  )
}