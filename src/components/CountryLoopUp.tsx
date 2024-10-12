'use client';

import { useEffect, useState } from 'react'

export default function CountryLookup() {
  const [country, setCountry] = useState('Gakem')
useEffect(()=>{
    const getCountry = async()=>{
        const res = await fetch(`https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_IP_API_KEY}`)
        if(!res) return 
        const resJson = await res.json()
        setCountry(resJson.country)
    }
    getCountry()
},[])


  return <div>{country}</div>
}