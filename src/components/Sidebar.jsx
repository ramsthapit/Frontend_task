import React,{useState} from 'react'
import { FaTachometerAlt, FaShoppingCart, FaUsers, FaUser, FaBox, FaCog } from 'react-icons/fa';
import { Link } from 'react-router';
import { FaBars, FaTimes } from 'react-icons/fa';

const Sidebar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const data = [
		{ id: 1, name: 'Dashboard', icon: <FaTachometerAlt />, link: '/' },
		{ id: 2, name: 'Data', icon: <FaShoppingCart />, link: '/Data' },
		{ id: 3, name: 'Customers', icon: <FaUsers />, link: '/customers' },
		{ id: 4, name: 'Users', icon: <FaUser />, link: '/users' },
		{ id: 5, name: 'Products', icon: <FaBox />, link: '/products' },
		{ id: 6, name: 'Settings', icon: <FaCog />, link: '/settings' },
		
	]
	return (
		
		<div className="flex flex-col bg-gray-100 text-gray-900 h-full px-4 border-r border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white">
			<div className="md:hidden flex gap-2 items-center mt-4 bg-gray-100 dark:bg-gray-900">
				<h1 className={`flex text-xl font-bold ${isOpen ? "md:block": "hidden"} text-center italic`}>Hamro Saman</h1>
				<button onClick={() => setIsOpen(!isOpen)} className="flex text-2xl p-2">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
			<h1 className='text-2xl font-bold hidden md:block mt-4 text-center italic'>Hamro Saman</h1>
			<ul className='flex flex-col mt-5 text-xl'>
				{data.map((item, index) => (
					<Link to={item.link} key={index} onClick={() => setIsOpen(false)}>
						<li className='flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white'>
							{item.icon}
							<span className={`${!isOpen && "hidden"} md:inline`}>{item.name}</span>
						</li>
					</Link>
				))}
				
			</ul>
		</div>
		
  )
}

export default Sidebar