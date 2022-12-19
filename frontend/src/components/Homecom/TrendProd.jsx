import React from 'react';
import Data from '../../Data';
import ProductItem from '../ProductItem';

const TrendProd = () => {
  return (
    <div className='mt-10'>
        <div className='max-w-screen-md mx-auto mt-10'>
            <h1 className='relative font-bold text-6xl text-center font-body text-gray-800 ugd-title'><span>Trending Products</span></h1>
        </div>
       <div>
      <section class="bg-white dark:bg-gray-900">
    
    <div class="container px-6 py-8 mx-auto">
                  <div class="grid gap-3 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                      {
                Data.map(product =>{
                    
                return <ProductItem className="mx-auto justify-center" key={product.id} product={product} />
                })
            }
            
        </div>
    </div>
</section>
    </div>
    </div>
  )
}

export default TrendProd
