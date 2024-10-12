import SearchHeader from '@/components/SearchHeader'
import '../globals.css'
import React, { ReactNode } from 'react'

const layout = ({children}: {children: ReactNode}) => {
  return (
    <div>
        <SearchHeader />
        {children}
    </div>
  )
}
 
export default layout