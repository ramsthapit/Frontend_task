import React, { useEffect, useState } from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
import Pagination from '../components/Pagination'
import Loader from '../components/Loader'
// https://dummyjson.com/docs/products#products-limit_skip
// https://dummyjson.com/products?limit=10&skip=20&select=title,category,rating,price

const Dashboard = () => {
  
  const [currentPage, setCurrentPage] = useState(1)
  const [itemNo, setItemNo] = useState(1)
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [totalPage, setTotalPage] = useState(0)

  const Category = [
    { id: 1, name: 'S.N.' },
    { id: 1, name: 'Product name' },
    { id: 2, name: 'Category' },
    { id: 3, name: 'Rating' },
    { id: 4, name: 'Price' },
    { id: 5, name: '' },
  ]

  // const Data = {
  //   Products: [
  //     {
  //       "id": 21,
  //       "title": "Cucumber",
  //       "category": "groceries",
  //       "rating": 4.07,
  //       "price": 1.49
  //     },
  //     {
  //       "id": 22,
  //       "title": "Dog Food",
  //       "category": "groceries",
  //       "rating": 4.55,
  //       "price": 10.99
  //     },
  //     {
  //       "id": 23,
  //       "title": "Eggs",
  //       "category": "groceries",
  //       "rating": 2.53,
  //       "price": 2.99
  //     },
  //     {
  //       "id": 24,
  //       "title": "Fish Steak",
  //       "category": "groceries",
  //       "rating": 3.78,
  //       "price": 14.99
  //     },
  //     {
  //       "id": 25,
  //       "title": "Green Bell Pepper",
  //       "category": "groceries",
  //       "rating": 3.25,
  //       "price": 1.29
  //     },
  //     {
  //       "id": 26,
  //       "title": "Green Chili Pepper",
  //       "category": "groceries",
  //       "rating": 3.66,
  //       "price": 0.99
  //     },
  //     {
  //       "id": 27,
  //       "title": "Honey Jar",
  //       "category": "groceries",
  //       "rating": 3.97,
  //       "price": 6.99
  //     },
  //     {
  //       "id": 28,
  //       "title": "Ice Cream",
  //       "category": "groceries",
  //       "rating": 3.39,
  //       "price": 5.49
  //     },
  //     {
  //       "id": 29,
  //       "title": "Juice",
  //       "category": "groceries",
  //       "rating": 3.94,
  //       "price": 3.99
  //     },
  //     {
  //       "id": 30,
  //       "title": "Kiwi",
  //       "category": "groceries",
  //       "rating": 4.93,
  //       "price": 2.49
  //     }
  //   ],
  //   "total": 194,
  //   "skip": 20,
  //   "limit": 10
  // }
  useEffect(() => { 
    fetch(`https://dummyjson.com/products?limit=10&skip=${(currentPage-1)*10}&select=title,category,rating,price`)
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
        setItemNo(data.products[0].id)
        setTotalPage(data.total);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching data:', err);
        setLoading(false);
      });
    
  }, [currentPage])
  

  return (
    <main className="flex w-full h-full bg-gray-100 p-5"> 
      <div className="flex flex-col w-full p-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex flex-col w-full my-5 overflow-auto">
        {loading && <Loader />}
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    {Category.map((item, index) => (
                      <th key={index} scope="col" className="px-3 py-3 text-gray-500">
                        {item.name}
                      </th>))
                    }
                  </tr>
                </thead>
                <tbody>
                  {products.map((item, index) => (
                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">  
                      <td className="pl-6">
                          {item.id}
                      </td>
                      <th scope="row" className="px-3 py-4 font-medium">
                          {item.title}
                      </th>
                      <td className="px-3 py-4">
                          {item.category}
                      </td>
                      <td className="px-3 py-4">
                          {item.rating}
                      </td>
                      <td className="px-3 py-4">
                          ${item.price}
                      </td>
                      <td className="text-center align-middle px-3 py-4">
                        <span className="inline-block text-blue-500 cursor-pointer mx-1">
                          <FaEdit />
                        </span>
                        <span className="inline-block text-red-500 cursor-pointer mx-1">
                          <FaTrash />
                        </span>
                      </td>
                    </tr>
                  ))}       
              </tbody>
          </table>
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPage={totalPage}
            itemNo={itemNo}
          />
      </div>
      
      </div>
    </main>
  )
}

export default Dashboard