import Link from 'next/link'
import React from 'react'
import { Suspense } from 'react'
import PaginationButton from './PaginationButton'

const ImageSearchResults = ({results}:{results: any}) => {
  return (
    <div className='sm:pb-24 pb-35 mt-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-2 space-x-4'>
            {results.items?.map((result: any)=>(
                <div className='mb-8' key={result.link}>
                    <div className='group'>
                        <Link href={result.image.contextLink}>
                        <img src={result.link} alt={result.title} className='h-50 group-hover:shadow-xl w-full object-contain transition-shadow duration-300'/>
                        </Link>
                        <Link href={result.image.contextLink}>
                       <h3 className='group-hover:underline truncate text-xl'>{result.title}</h3>
                        </Link>
                        <Link href={result.image.contextLink}>
                        <p className='group-hover:underline truncate text-blue-700'>{result.displayLink}</p>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
        <div className='ml-16'>
            <Suspense fallback={<div>Loading...</div>}>
                <PaginationButton />
            </Suspense>
            
        </div>
    </div>
  )
}

export default ImageSearchResults