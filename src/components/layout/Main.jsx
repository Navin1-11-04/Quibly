import React from 'react'
import Header from './Header'
import SideBar from './SideBar'
import SearchBar from '../filters/SearchBar'

const Main = ({children}) => {
  return (
    <div className="w-full h-screen flex overflow-hidden">
        <SideBar/>
        <div className="flex flex-col w-full">
            <Header/>
            <SearchBar/>
            <main className='w-full h-full flex bg-[#f5f5f5] overflow-hidden'>
                {children}
            </main>
        </div>
    </div>
  )
}

export default Main