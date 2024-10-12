import Link from 'next/link'
import Parser from 'html-react-parser'
import PaginationButton from './PaginationButton'

const WebSearchResults = ({results}:{results: any}) => {
  return (
    <div className='w-full mx-auto px-3 pb-20 sm:pl-[5%] md:pl-[15%]'>
         <p className='flex flex-wrap text-green-600 text-sm mb-5 mt-3'>
        About {results.searchInformation?.formattedTotalResults} results (
        {results.searchInformation?.formattedSearchTime} seconds): <span className='text-blue-500'>(Developed by Ushie Pius the Bekwarra Son.)</span>
      </p>

      {results.items?.map((result: any)=>(
        <div className='mb-6 max-w-xl' key={result.link}>
            <div className='group flex flex-col'>
                <Link href={result.link}>
                {result.formattedUrl}
                </Link>

                <Link href={result.link} className='group-hover:underline decoration-blue-800 text-xl truncate font-medium text-blue-800'>
                {result.title}</Link>
            </div>
            <p>
               {Parser(result.htmlSnippet)} 
            </p>
        </div>
      ))}
      <PaginationButton />
    </div>
  )
}

export default WebSearchResults