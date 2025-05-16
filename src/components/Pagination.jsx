import React from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

const Pagination = ({ currentPage, setCurrentPage, totalPage,itemNo }) => {

  const paginateFront = () => setCurrentPage(currentPage + 1);
  const paginateBack = () => setCurrentPage(currentPage - 1);

  
  return (
    <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
      <div>
        <p className="text-sm text-gray-700">
          Showing <span className="font-medium">{itemNo}</span> to{" "}
          <span className="font-medium">{itemNo + 9}</span> of{" "}
          <span className="font-medium">{totalPage}</span> results
        </p>
      </div>
      <nav aria-label="Page navigation example">
        <ul className="flex items-center -space-x-px h-8 text-sm">
          <li className={`${currentPage === 1 && "hidden"} flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}>
            <FaAngleLeft onClick={paginateBack}/>
          </li>
          <li className={`z-10 flex items-center justify-center px-3 h-8 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white`}>
            {currentPage}
          </li>
          <li className={`${currentPage >= parseInt(totalPage/10) && "hidden"} flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}>
            <FaAngleRight onClick={paginateFront}/>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Pagination