"use client"
import { useRouter, usePathname, useSearchParams } from "next/navigation"
import { AiOutlineSearch } from "react-icons/ai"
import { AiOutlineCamera } from "react-icons/ai"

const SearchHeaderOption = () => { 
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const searchTerm = searchParams.get('searchTerm')

    const selectTab = (tab: string) => {
        router.push(
          `/search/${tab === 'Images' ? 'image' : 'web'}?searchTerm=${searchTerm}`
        );
      };

  return (
    <div className='flex space-x-2 select-none border-b w-full justify-center lg:justify-start lg:pl-52 text-gray-700 text-sm'>
      <div onClick={()=>selectTab("All")} className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${pathname === '/search/web' && '!text-blue-600 !border-blue-600'}`}>
        <AiOutlineSearch className='text-md text-white' />
        <p className="text-white">All</p>
      </div>
      <div onClick={()=>selectTab("Images")} className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${pathname === '/search/image' && '!text-blue-600 !border-blue-600'}`}>
        <AiOutlineCamera className='text-md text-white' />
        <p className="text-white">Images</p>
      </div>
    </div>
  )
}

export default SearchHeaderOption