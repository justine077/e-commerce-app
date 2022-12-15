import React from 'react';

const ProductItem = ({product}) => {
  return (
    <>
      <div class="max-w-xs mx-auto">
        <div class="bg-white rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img class="rounded-t-lg p-2" src={product.image} alt="" />
            </a>
            <div class="px-5 pb-5">
              <a href="#">
                <h3 class="text-gray-900 font-semibold text-lg tracking-tight dark:text-white mb-3" title={product.title}>{product.title}</h3>
              </a>
              <div class="flex items-center justify-between">
                <span class="text-3xl font-bold text-gray-900 dark:text-white">${product.price}</span>
                <a href="#"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add
                  to cart</a>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default ProductItem
