import React from 'react';

const ProductItem = ({product}) => {
  return (
    <>
      <div class="max-w-xs mx-auto">
        <div class="bg-white rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
            <div className='overflow-hidden'>
              <a className='outline-0' href="#">
                <img class="rounded-t-lg p-2 hover:scale-110 duration-500" src={product.image} alt="" />
              </a>
            </div>
            <div class="px-5 pb-5">
              <a href="#">
                <h3 class="text-gray-900 font-semibold text-lg tracking-tight dark:text-white mb-3" title={product.title}>{product.title}</h3>
              </a>
              <div class="flex items-center justify-between">
                <span class="text-3xl font-bold text-gray-900 dark:text-white">${product.price}</span>
                <a href="#"
                  class="text-white bg-[#36B4E6] hover:bg-[#237494] focus:ring-1 focus:ring-[#99dbf5] font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add to cart</a>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default ProductItem
