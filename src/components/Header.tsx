import Link from 'next/link'
import {TbGridDots} from 'react-icons/tb'
import React from 'react'
import Image from "next/image";

const Header = () => {
  return (
    <header className='flex flex-row justify-end p-5 text-sm'>
      <Image src='https://th.bing.com/th/id/OIP.AfKMLf4rKX7EqOSAVpujIQHaEK?w=310&h=180&c=7&r=0&o=5&pid=1.7' width={40} height={40} alt="logo" className="googleLogo" priority style={{width: 'auto'}}/>
      
        <div className='flex space-x-2 items-center'>
            <Link href={"https://mail.google.com"} className='hover:underline'>Gmail</Link>

            <Link href={"https://image.google.com"} className='hover:underline'>Image</Link>

            <TbGridDots className='bg-transparent hover:bg-gray-500 rounded-full cursor-pointer text-4xl'/>
            <button className='bg-blue-500 text-white px-3 py-1 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-shadow'>
            SignIn
          </button>
        </div>
    </header>
  )
}

export default Header