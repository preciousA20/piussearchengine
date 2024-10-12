import React from 'react'
import CountryLoopUp from './CountryLoopUp'

const Footer = () => {
  return (
    <footer className='absolute bottom-0 text-sm text-gray-600 bg-[#f2f2f2] w-full'>
        <div className='ml-3'>
            <CountryLoopUp />
        </div>

        <div className='flex flex-col sm:flex-row justify-between items-center px-5 py-2 space-y-5 sm:space-y-0'>
            <ul className='flex items-center gap-2 flex-wrap'>
                <li className='hover:underline cursor-pointer'>About</li>
                <li className='hover:underline cursor-pointer'>Advertising</li>
                <li className='hover:underline cursor-pointer'>Business</li>
                <li className='hover:underline cursor-pointer'>How Search Works</li>
            </ul>
            <ul className='flex items-center gap-2 flex-wrap'>
                <li className='hover:underline cursor-pointer'>Privacy</li>
                <li className='hover:underline cursor-pointer'>terms</li>
                <li className='hover:underline cursor-pointer'>Setting</li>
               
            </ul>
        </div>
    </footer>
  )
}

export default Footer