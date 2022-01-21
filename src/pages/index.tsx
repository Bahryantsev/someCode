import type { NextPage } from 'next'
import Calculator from '../features/calculator'
import CalcLogo from '../assets/calculator'
import { useState } from 'react'


const IndexPage: NextPage = () => {
  const [hidden, setHidden] = useState(true)
  const handleClick = ()=>{
    setHidden(!hidden)
  }
  return (
    <div className= 'w-screen h-screen flex items-center justify-center wallpaper bg-cover'>
      <Calculator hidden = {hidden}/>
      <div className='absolute left-10 top-32 font-semibold text-xl flex items-center flex-col justify-around'
        onClick={handleClick}  
      >
        <CalcLogo />
        <span className='bg-teal-700 px-1'>
          Calculator
        </span>
      </div>
    </div>
  )
}

export default IndexPage
