import React, { useEffect, useState } from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
import Pagination from '../components/Pagination'
import Loader from '../components/Loader'
// https://dummyjson.com/docs/products#products-limit_skip
// https://dummyjson.com/products?limit=10&skip=20&select=title,category,rating,price

const Dashboard = () => {
  
  const [currentPage, setCurrentPage] = useState(1)
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [totalItems, setTotalItems] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState("")

  const TableHeading = [
    { id: 1, name: 'S.N.' },
    { id: 1, name: 'Product name' },
    { id: 2, name: 'Category' },
    { id: 3, name: 'Rating' },
    { id: 4, name: 'Price' },
    { id: 5, name: '' },
  ]

  const categories = [
    {
        "slug": "beauty",
        "name": "Beauty",
        "url": "https://dummyjson.com/products/category/beauty"
    },
    {
        "slug": "fragrances",
        "name": "Fragrances",
        "url": "https://dummyjson.com/products/category/fragrances"
    },
    {
        "slug": "furniture",
        "name": "Furniture",
        "url": "https://dummyjson.com/products/category/furniture"
    },
    {
        "slug": "groceries",
        "name": "Groceries",
        "url": "https://dummyjson.com/products/category/groceries"
    },
    {
        "slug": "home-decoration",
        "name": "Home Decoration",
        "url": "https://dummyjson.com/products/category/home-decoration"
    },
    {
        "slug": "kitchen-accessories",
        "name": "Kitchen Accessories",
        "url": "https://dummyjson.com/products/category/kitchen-accessories"
    },
    {
        "slug": "laptops",
        "name": "Laptops",
        "url": "https://dummyjson.com/products/category/laptops"
    },
    {
        "slug": "mens-shirts",
        "name": "Mens Shirts",
        "url": "https://dummyjson.com/products/category/mens-shirts"
    },
    {
        "slug": "mens-shoes",
        "name": "Mens Shoes",
        "url": "https://dummyjson.com/products/category/mens-shoes"
    },
    {
        "slug": "mens-watches",
        "name": "Mens Watches",
        "url": "https://dummyjson.com/products/category/mens-watches"
    },
    {
        "slug": "mobile-accessories",
        "name": "Mobile Accessories",
        "url": "https://dummyjson.com/products/category/mobile-accessories"
    },
    {
        "slug": "motorcycle",
        "name": "Motorcycle",
        "url": "https://dummyjson.com/products/category/motorcycle"
    },
    {
        "slug": "skin-care",
        "name": "Skin Care",
        "url": "https://dummyjson.com/products/category/skin-care"
    },
    {
        "slug": "smartphones",
        "name": "Smartphones",
        "url": "https://dummyjson.com/products/category/smartphones"
    },
    {
        "slug": "sports-accessories",
        "name": "Sports Accessories",
        "url": "https://dummyjson.com/products/category/sports-accessories"
    },
    {
        "slug": "sunglasses",
        "name": "Sunglasses",
        "url": "https://dummyjson.com/products/category/sunglasses"
    },
    {
        "slug": "tablets",
        "name": "Tablets",
        "url": "https://dummyjson.com/products/category/tablets"
    },
    {
        "slug": "tops",
        "name": "Tops",
        "url": "https://dummyjson.com/products/category/tops"
    },
    {
        "slug": "vehicle",
        "name": "Vehicle",
        "url": "https://dummyjson.com/products/category/vehicle"
    },
    {
        "slug": "womens-bags",
        "name": "Womens Bags",
        "url": "https://dummyjson.com/products/category/womens-bags"
    },
    {
        "slug": "womens-dresses",
        "name": "Womens Dresses",
        "url": "https://dummyjson.com/products/category/womens-dresses"
    },
    {
        "slug": "womens-jewellery",
        "name": "Womens Jewellery",
        "url": "https://dummyjson.com/products/category/womens-jewellery"
    },
    {
        "slug": "womens-shoes",
        "name": "Womens Shoes",
        "url": "https://dummyjson.com/products/category/womens-shoes"
    },
    {
        "slug": "womens-watches",
        "name": "Womens Watches",
        "url": "https://dummyjson.com/products/category/womens-watches"
    }
]
  const Data = {
    Products: [
      {
        "id": 21,
        "title": "Cucumber",
        "category": "groceries",
        "rating": 4.07,
        "price": 1.49
      },
      {
        "id": 22,
        "title": "Dog Food",
        "category": "groceries",
        "rating": 4.55,
        "price": 10.99
      },
      {
        "id": 23,
        "title": "Eggs",
        "category": "groceries",
        "rating": 2.53,
        "price": 2.99
      },
      {
        "id": 24,
        "title": "Fish Steak",
        "category": "groceries",
        "rating": 3.78,
        "price": 14.99
      },
      {
        "id": 25,
        "title": "Green Bell Pepper",
        "category": "groceries",
        "rating": 3.25,
        "price": 1.29
      },
      {
        "id": 26,
        "title": "Green Chili Pepper",
        "category": "groceries",
        "rating": 3.66,
        "price": 0.99
      },
      {
        "id": 27,
        "title": "Honey Jar",
        "category": "groceries",
        "rating": 3.97,
        "price": 6.99
      },
      {
        "id": 28,
        "title": "Ice Cream",
        "category": "groceries",
        "rating": 3.39,
        "price": 5.49
      },
      {
        "id": 29,
        "title": "Juice",
        "category": "groceries",
        "rating": 3.94,
        "price": 3.99
      },
      {
        "id": 30,
        "title": "Kiwi",
        "category": "groceries",
        "rating": 4.93,
        "price": 2.49
      }
    ],
    "total": 194,
    "skip": 20,
    "limit": 10
  }

  useEffect(() => { 
    setLoading(true)
    const baseUrl = selectedCategory==="" ?
      'https://dummyjson.com/products' :
      'https://dummyjson.com/products/category/' + selectedCategory
    
    fetch(`${baseUrl}?limit=10&skip=${(currentPage-1)*10}&select=title,category,rating,price`)
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
        setTotalItems(data.total);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching data:', err);
        setLoading(false);
      });
    
    
  }, [currentPage, selectedCategory])
  
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value)
    setCurrentPage(1)
  }

  return (
    <main className="flex flex-col min-h-screen bg-gray-100 p-3 md:p-9"> 
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="flex flex-col w-full my-5 overflow-auto">
        {loading && <Loader />}
        <select
          id="countries"
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="block w-full sm:w-1/2 md:w-1/4  p-2.5 mb-3 items-end bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="">Select Category</option>
          {categories.map((item, index) => (
            <option key={index} value={item.slug}>
              {item.name}
            </option>
          ))}
        </select>

        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  {TableHeading.map((item, index) => (
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
          totalItems={totalItems}
          itemsPerPage={10}
        />
    </div>
      
    </main>
  )
}

export default Dashboard