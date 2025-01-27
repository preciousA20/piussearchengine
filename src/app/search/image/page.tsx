import React from 'react'
import Link from 'next/link'
import ImageSearchResults from '@/components/ImageSearchResults'
import { Suspense } from 'react'

const ImageSearchPage = async({searchParams}:{searchParams: any}) => {
  const startIndex = searchParams.start || '1';
  await new Promise((resolve) => setTimeout(resolve, 1000))
  const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&searchType=image&start=${startIndex}`)
  const data = await response.json()
  const results = data.items

  if(!results){
    return(
      <div className='flex flex-col justify-center items-center pt-10'>
        <h1 className='text-3xl mb-4'>No result found for {searchParams.searchTerm}</h1> 

        <p className='text-lg'>Try searching the web or images for something else</p>
        {" "}
        <Link href="/" className='text-blue-500'>Home</Link>
    </div>
    )
  }

  return (  
    <div>
      {results && (
        <Suspense fallback={<div>Loading...</div>}>
          <ImageSearchResults results={data}/> 
        </Suspense>
      )}
    </div>
  )
}

export default ImageSearchPage