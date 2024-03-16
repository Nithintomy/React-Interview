import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function SinglePageView() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    try {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const productData = await res.json();
      console.log(productData);
      setProduct(productData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container mx-auto border-1 bg-white shadow-xl p-4 rounded-md">
        {product ? (
          <div className="flex justify-between">
            <div className="w-1/3">
              <img src={product.images[0]} alt={product.brand} className="w-full" />
              <div className="grid grid-cols-5 gap-2">
                {product.images.map((image, index) => (
                  <img key={index} src={image} className="w-full" />
                ))}
              </div>
            </div>

            <div className="w-1/3 flex flex-col ml-5">
              <h2 className="text-2xl font-bold">{product.brand}</h2>
              <p className="text-gray-700">{product.category}</p>
              <p className="text-gray-700">{product.description}</p>

              <div className="justify-between mt-4">
                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                  <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <div className="flex items-center mt-5 mb-5 ">
                    <span className="bg-blue-100  text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">{product.rating}</span>
                  </div>
                </div>

                <div className="bg-orange-300 w-1/3 h-12 flex flex-col text-center ">
                  <span className="text-red-500 font-semibold">${product.price}</span>
                  <span>Price</span>
                </div>
                <div className='flex flex-row mt-4'>
                  <h3 className='text-gray-600'>Total Stock </h3>
                  <p className='text-black ml-8 mb-5'>94</p>
                </div>
              </div>
            </div>

            <div className="w-1/4 border border-1 rounded-md">
              <img src="" alt="S" />
              <div className="flex flex-col ml-10 mb-4">
                <h4>Supplier</h4>
                <h4>Guanjoli Trading LLc</h4>
              </div>
              <hr />
              <div className='text-gray-500 ml-6'>
                <h5>Germany, Berlin</h5>
                <h5>Verified Seller</h5>
                <h5>Worldwide Shipping</h5>
              </div>
              <div className=" p-6 m-5 justify-center items-center flex flex-col mt-4">
                <button className="bg-blue-500 w-64 text-white px-4 py-2 rounded-lg">Buy Now</button>
                <button className="border border-1 m-2  w-64  text-gray-700 px-4 py-2 rounded-lg">Add to Cart</button>
              </div>
            </div>
          </div>
        ) : (
          <p>No data</p>
        )}
      </div>
      {product && (
        <div className="container mx-auto border-1 bg-white shadow-xl p-4 rounded-md mt-4">
          <h3 className="text-2xl font-bold">Description</h3>
          <p className="text-gray-700">{product.description}</p>
        </div>
      )}
    </>
  );
}

export default SinglePageView;
