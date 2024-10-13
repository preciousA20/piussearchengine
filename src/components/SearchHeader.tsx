import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'
import SearchBox from './SearchBox'
import { RiSettings3Line } from 'react-icons/ri'
import { TbGridDots } from 'react-icons/tb'
import SearchHeaderOption from './SearchHeaderOption'

const SearchHeader = () => {
  return (
    <header className='sticky top-0 bg-gray-800'>
      <div className='flex w-full p-4 items-center justify-between'>
        <Link href={"/"}>
        <Image src='https://th.bing.com/th/id/OIP.AfKMLf4rKX7EqOSAVpujIQHaEK?w=310&h=180&c=7&r=0&o=5&pid=1.7' width={40} height={40} alt="logo" className="googleLogo" priority style={{width: 'auto'}}/>      
        </Link>
          

          <div className='hidden md:inline-flex space-x-2'>
            <RiSettings3Line />
            <TbGridDots />
          </div>
          <button className='bg-blue-500 text-white px-3 py-1 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-shadow'>
            SignIn
          </button>
      </div>
      
      <div className='flex-1'>
      <Suspense fallback={<div>Loading...</div>}>
            <SearchBox />
            </Suspense>
          </div>

          <Suspense fallback={<div>Loading...</div>}>
          <SearchHeaderOption />
          </Suspense>
    </header>
  )
}

export default SearchHeader