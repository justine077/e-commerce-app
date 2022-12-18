import React from 'react';
import Data from '../../Data';
import ProductItem from '../ProductItem';

const TrendProd = () => {
  return (
    <div className='mt-10'>
        <div className='max-w-screen-md mx-auto mt-10'>
            <h1 className='relative font-bold text-6xl text-center font-body text-gray-800 ugd-title'><span>Trending Products</span></h1>
        </div>
        <div class="grid grid-flow-col auto-cols-max justify-center mt-10 grid-cols-4 grid-rows-2 mx-auto max-w-max">
            {
                Data.map(product =>{
                    
                return <ProductItem className="mx-auto justify-center" key={product.id} product={product} />
                })
            }
        </div>
    </div>
  )
}

export default TrendProd
