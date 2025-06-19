import React from 'react'
import Header from './Header'
import SideBar from './SideBar'

const Main = ({children}) => {
  return (
    <div className="w-full h-screen flex">
        <SideBar/>
        <div className="flex flex-col w-full">
            <Header/>
            <main className='w-full h-full flex p-4 overflow-y-auto'>
                {children}
            </main>
        </div>
    </div>
  )
}

export default Main