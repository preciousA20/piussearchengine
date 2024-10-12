"use client"
import React, {useState} from 'react'
import { FaSearch } from "react-icons/fa"
import { IoIosMic } from "react-icons/io"
import {useRouter} from 'next/navigation'

const HomeSearch = () => {

    const [input, setInput] = useState('')
    const [randomSearchLoading, setRandomSearchLoading] = useState(false)
    const router = useRouter() 
    const handleClick = (e)=>{
        e.preventDefault()
        if(!input.trim()) return 
        router.push(`/search/web?searchTerm${input}`)
       
        
    }

    const randomSearch = async () => {
        setRandomSearchLoading(true);
        const response = await fetch('https://random-word-api.herokuapp.com/word', {mode: 'no-cors'})
          .then((res) => res.json())
          .then((data) => data[0])
        if (!response) return;
        router.push(`/search/web?searchTerm=${response}`);
        setRandomSearchLoading(false);
      };

  return (
    <>
    <form  onSubmit={handleClick} className='flex flex-row justify-between items-center bg-white rounded-full'>
        <FaSearch className='text-black font-bold w-8'/>
        <input className='w-full rounded-full h-[40px] shadow-light-600 outline-none text-black' onChange={(e)=>setInput(e.target.value)}/>
        <IoIosMic className='text-black font-bold text-xl'/>
    </form>
    <div className="flex flex-col space-y-3">
        <button className=' rounded-md text-sm text-white hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-md transition-shadow w-26 h-5 cursor-pointer hover:underline' onClick={handleClick}>
            Google Search
        </button>
        <button className='text-white mt-[30px] rounded-md text-sm hover:ring-gray-200 focus:outline-none active:ring-gray-300 transition-shadow w-26 h-5' onClick={randomSearch} disabled={randomSearchLoading}>
            {randomSearchLoading ? 'Loading...' : 'Ushie Pius is feeling Optimistic about the Future!'}
        </button>
    </div>
    </>
  )
}

export default HomeSearch