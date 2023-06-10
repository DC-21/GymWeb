import { useState } from 'react'

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
        <ul className='flex gap-5 pt-3 cursor-pointer'>
          <li className='text-white hover:bg-orange-700 rounded-md px-2 py-1'>
            <a>Home</a>
          </li>
          <li className='text-white hover:bg-orange-700 rounded-md px-2 py-1'>
            <a>About</a>
          </li>
          <li className='text-white hover:bg-orange-700 rounded-md px-2 py-1'>
            <a>Classes</a>
          </li>
          <li className='text-white hover:bg-orange-700 rounded-md px-2 py-1'>
            <a>Plans</a>
          </li>
          <li className='text-white hover:bg-orange-700 rounded-md px-2 py-1'>
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
    <section className='h-screen w-full pt-10' style={{ backgroundColor: '#0a0911' }}>
      <div className='flex'>
        <div className='w-1/2 items-center px-10 relative'>
          <h1 className='text-white font-bold text-5xl text-left pt-20 justify-center px-12'>Transform Your<br/>
          Fitness And Build<br/> Your Life</h1>
          <div className='text-white text-l text-left pt-4 justify-center px-12'>
            <p>
              Lorem ipsum test tha txt before take a seat and remember to free all time coz you dove acquired what made ya work all life
            </p>
          </div>
          <div className='text-white text-l text-left py-2 px-12 justify-between flex gap-4'>
          <button className='text-white rounded py-2 px-12' style={{backgroundColor: '#f74700'}}>
          <a href=''>Book Class</a>
        </button>
        <button className='text-right text-white rounded py-2 px-12' style={{backgroundColor: '#26272e'}}>
          <a href=''>Free Online Class</a>
        </button>
          </div>
        </div>
        <div className='w-1/2 items-center px-10 relative'>
  <img className='items-center px-6 mt-10 rounded-md h-50' src={fit} />
</div>



      </div>
      <div>
            <ul className="flex justify-between text-white pt-20 py-20     px-16">
              <li>
                <a href='' className='text-white rounded py-2 px-4' style={{backgroundColor: '#26272e'}}>mapbox</a>
              </li>
              <li>
                <a href=''className='text-white rounded py-2 px-4' style={{backgroundColor: '#26272e'}}>mparticle</a>
              </li>
              <li>
                <a href='' className='text-white rounded py-2 px-4' style={{backgroundColor: '#26272e'}}>Eclipse</a>
              </li>
              <li>
                <a href='' className='text-white rounded py-2 px-4' style={{backgroundColor: '#26272e'}}>videodesk</a>
              </li>
              <li>
                <a href='' className='text-white rounded py-2 px-4' style={{backgroundColor: '#26272e'}}>outlineWhimsical</a>
              </li>
              <li>
                <a href='' className='text-white rounded py-2 px-4' style={{backgroundColor: '#26272e'}}>Memes</a>
              </li>
            </ul>
          </div>
    </section>
    <section className="h-screen w-full">
      <div>
        <div className="pt-20">
          <h1 className="text-4xl font-bold">Your Fitness Classes</h1>
          <p className="pt-4">I found this on the web trynna catch what i solved <br/>
          Errytime they see me balling</p>
        </div>
        <div>
          <ul className="flex">
            <li>
            <img  className='items-center px-6  mt-10 rounded' src={fit}/>
            </li>
            <li>
            <img  className='items-center px-6  mt-10 rounded h-50' src={fit}/>
            </li>
            <li>
            <img  className='items-center px-6  mt-10 rounded h-50' src={fit}/>
            </li>
          </ul>
        </div>
        <div className='text-white text-l text-left py-2 px-12 pt-20 flex gap-4 justify-center items-center'>
          <button className='text-white rounded py-3 px-20 j' style={{backgroundColor: '#111111'}}>
          <a href=''>See All Classes</a>
        </button>
          </div>
      </div>
    </section>
    </div>
  )
}