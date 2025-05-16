import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

const Layout = ({children}) => {
  return (
    <div className="flex flex-row w-full min-h-screen">
      <div className="md:flex">
        <Sidebar /> 
      </div>
      <div className="flex flex-col w-full bg-gray-100">
        <Header />
        {children}
      </div>
    </div>
  )
}

export default Layout