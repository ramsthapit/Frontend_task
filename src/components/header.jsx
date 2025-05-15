import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp, FaUser } from 'react-icons/fa'

const Header = () => {

  const [toggle, setToggle] = useState(false)
  const handleClick = () => { 
    setToggle(!toggle)
    console.log(toggle)
  }

  return (
    <header className="flex items-end justify-end pr-4 sticky top-0 bg-white border-gray-200 dark:border-gray-800 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-between grow lg:flex-row lg:px-6">
        
        <div className={"flex items-center justify-between w-full gap-4 px-5 py-4 lg:flex shadow-theme-md lg:justify-end lg:px-0 lg:shadow-none"}>
          <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
            Ram Sthapit
          </h1>
          <button className='flex items-center' onClick={() => handleClick()}>
            <div className="items-center justify-center w-10 h-10 bg-gray-100 border-gray-200 rounded-3xl dark:border-gray-800 lg:flex dark:text-gray-400 lg:h-11 lg:w-11 lg:border">
              <FaUser />
            </div>
            {toggle ? <FaAngleUp /> : <FaAngleDown />}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header