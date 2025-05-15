import React from 'react'
import Header from '../components/header'
import Sidebar from '../components/Sidebar'

const Dashboard = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <div className="">
          <div className="bg-white flex items-end justify-end pr-4">
            <Header />
          </div>
        </div>
        <main className="h-full bg-gray-100"> HEllo there</main>
      </div>
    </div>
  )
}

export default Dashboard