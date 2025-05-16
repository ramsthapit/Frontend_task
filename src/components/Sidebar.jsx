import React from 'react'
import { FaTachometerAlt, FaShoppingCart, FaUsers, FaUser, FaBox, FaCog } from 'react-icons/fa';
import { Link } from 'react-router';
const Sidebar = () => {
	const data = [
		{ id: 1, name: 'Dashboard', icon: <FaTachometerAlt />, link: '/' },
		{ id: 2, name: 'Data', icon: <FaShoppingCart />, link: '/Data' },
		{ id: 3, name: 'Customers', icon: <FaUsers />, link: '/customers' },
		{ id: 4, name: 'Users', icon: <FaUser />, link: '/users' },
		{ id: 5, name: 'Products', icon: <FaBox />, link: '/products' },
		{ id: 6, name: 'Settings', icon: <FaCog />, link: '/settings' },
		
	]
  return (
    <div className="flex flex-col w-full bg-gray-100 text-gray-900 h-full px-4 border-r border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white">
			<h1 className='text-2xl font-bold hidden md:block mt-4 text-center italic'>Ram Sthapit</h1>
			<ul className='flex flex-col mt-5 text-xl'>
				{data.map((item, index) => (
					<Link to={item.link} key={index}>
						<li className='flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
						hover:bg-blue-600 hover:text-white'>
							{item.icon}
							<span className='hidden md:inline'>{item.name}</span>
						</li>
					</Link>
				))}
				
			</ul>
		</div>
  )
}

export default Sidebar