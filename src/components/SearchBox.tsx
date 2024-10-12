"use client"
import React, { useEffect, useState } from 'react'
import { RxCross2 } from 'react-icons/rx'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsFillMicFill } from 'react-icons/bs'
import { useSearchParams, useRouter} from 'next/navigation'

const SearchBox = () => {
  
  const searchParams = useSearchParams()
  const router = useRouter()
  const searchTerm = searchParams.get('searchTerm')
  const [term, setTerm] = useState(searchTerm || '')


  const handleSubmit = (e: any) =>{
    e.preventDefault()
    if(!term.trim()) return 
    router.push(`/search/web?searchTerm=${term}`)
  }

  return (
    <form onSubmit={handleSubmit} className='flex border border-gray-200 rounded-full shadow-lg px-3 py-2 ml-10 mr-5 flex-grow max-w-3xl items-center'>
      <input type='text' className='w-full focus:outline-none text-white rounded-full bg-gray-800' value={term} onChange={(e: any)=>setTerm(e.target.value)}/>
      <RxCross2 onClick={()=>setTerm('')}/>
      <BsFillMicFill />
      <AiOutlineSearch onClick={handleSubmit}/>
    </form>
  )
}

export default SearchBox