import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Dashboard from '../pages/Dashboard'

const Layout = () => {
  return (
    <div className="flex flex-row w-full min-h-screen">
      <div className="flex w-1/4">
        <Sidebar /> 
      </div>
      <div className="flex flex-col w-3/4 bg-black">
        <Header />
        <Dashboard />
      </div>
    </div>
  )
}

export default Layout