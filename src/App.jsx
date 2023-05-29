import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  return (
    <div style={{ backgroundColor: '#0a0911' }} className="flex w-full h-screen justify-between">
      <div>Logo</div>
      <div>
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Classes</a>
          </li>
          <li>
            <a>Plans</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
      <div></div>
    </div>
  )
}