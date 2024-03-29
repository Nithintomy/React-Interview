import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import love from '../assets/love.svg'
function ProductList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch('https://dummyjson.com/products');
      const productData = await res.json();
      setData(productData.products);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {data.map((product) => (
        <div key={product.id} className="bg-white border border-gray-200 rounded-lg shadow ">
          <Link to={`/products/${product.id}`}>
            <img className="p-8 rounded-t-lg" src={product.thumbnail} alt="product image" />
          </Link>
          <hr />

          <div className="flex items-center justify-between mt-5">
            <span className="ml-5 text-xl font-bold text-gray-900 dark:text-white">${product.price}</span>
            <div className="flex items-center">
              <div className="  mr-5 mt-5 w-6 h-6 rounded-md p-2">

              </div>
            </div>
          </div>

          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            {Array.from({ length: 5 }, (_, index) => (
              <svg
                key={index}
                className="ml-5 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill={index < Math.floor(product.rating) ? 'orange' : index === 4 ? '' : 'none'}
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2z"></path>
              </svg>
            ))}
            <div className="flex items-center mt-5 mb-5 ">
              <span className="bg-blue-100  text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">{product.rating}</span>
            </div>
          </div>

          <div className="px-5 pb-5 flex flex-col justify-between">
            <h5 className="text-sm  tracking-tight text-gray-900">{product.title}</h5>
            <h5 className="text-sm font-light tracking-tight text-gray-900">{product.description}</h5>
          </div>

        </div>
      ))}
    </div>
  );
}

export default ProductList;