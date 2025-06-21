import React from 'react'
import Header from './Header'
import SideBar from './SideBar'
import ToolBar from './ToolBar'
const Main = ({children}) => {
  return (
    <div className="w-full h-screen flex overflow-hidden text-main">
        <SideBar/>
        <div className="flex flex-col w-full">
            <Header/>
            <ToolBar/>
            <main className='w-full h-full flex bg-light overflow-hidden'>
                {children}
            </main>
        </div>
    </div>
  )
}

export default Main