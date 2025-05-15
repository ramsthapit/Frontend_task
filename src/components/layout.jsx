import React from 'react'
import Header from '../components/header'
import Sidebar from '../components/Sidebar'
import Dashboard from '../pages/dashboard'

const Layout = () => {
  return (
    <div className="flex flex-row w-full">
      <div className="flex w-1/4">
        <Sidebar /> 
      </div>
      <div className="flex flex-col w-3/4 min-h-screen bg-black">
        <Header />
        <Dashboard />
      </div>
    </div>
  )
}

export default Layout