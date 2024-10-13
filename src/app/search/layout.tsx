import SearchHeader from '@/components/SearchHeader'
import '../globals.css'
import React, { ReactNode } from 'react'
import { Suspense } from 'react'

const layout = ({children}: {children: ReactNode}) => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
      <SearchHeader />
      </Suspense>
       
        {children}
    </div>
  )
}
 
export default layout