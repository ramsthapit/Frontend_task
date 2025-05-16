import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

const Layout = ({children}) => {
  return (
    <div className="flex flex-row w-full min-h-screen">
      <div className="flex w-1/4">
        <Sidebar /> 
      </div>
      <div className="flex flex-col w-3/4">
        <Header />
        {children}
      </div>
    </div>
  )
}

export default Layout