import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/6901511/pexels-photo-6901511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`
      }}
    >
      <h1 className='bg-red-200'>Test for Taiwind</h1>
    </div>
  );
}

export default App
