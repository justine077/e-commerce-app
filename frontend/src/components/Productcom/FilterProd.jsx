import React from 'react';
import { useState } from 'react';
import Data from '../../Data';
import './filterprod.css';

const FilterProd = () => {

    const[data, setData] = useState(Data);
    const filterResult = (catItem) => {
        const result = Data.filter((curDate) => {
            return curDate.category === catItem;
        });
        setData(result);
    }

  return (
    <>
        <div className='mx-auto font-body'>
            <div className='ugd-prod-bg'>
                <div className='ugd-prod-overlay'>
                    <h1 className='relative font-bold text-6xl text-center font-body text-white'>Products</h1>
                </div>
            </div>
            <div className='ugd-fil-container'>
                <div className='span-1'>
                    <ul className='ugd-fil-btn'>
                        <li><button className='ugd-li-btn' onClick={() => setData(Data)}>All</button></li>
                        <li><button className='ugd-li-btn' onClick={() => filterResult('Men')}>Men</button></li>
                        <li><button className='ugd-li-btn' onClick={() => filterResult('Women')}>Women</button></li>
                        <li><button className='ugd-li-btn' onClick={() => filterResult('Kids')}>Kid</button></li>
                    </ul>
                </div>
                <div className='ugd-fil-span-4'>
                    <div className="ugd-fil-container1">
                    
                        {data.map((product) => {
                            const{title, price, image} = product;
                                return (
                                    <> 
                                        <div class="max-w-xs mx-auto">
                                            <div class="bg-white rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
                                                <div className='overflow-hidden'>
                                                    <a className='outline-0' href="#">
                                                        <img class="rounded-t-lg p-2 hover:scale-110 duration-500" src={image} alt="" />
                                                    </a>
                                                </div>
                                                <div class="px-5 pb-5 ugd-fil-title">
                                                <a href="#">
                                                    <h3 class="text-gray-900 font-semibold text-lg tracking-tight dark:text-white mb-3" title={title}>{title}</h3>
                                                </a>
                                                <div class="flex items-center justify-between ugd-cart-btn">
                                                    <span class="text-3xl font-bold text-gray-900 dark:text-white ugd-fil-price">${price}</span>
                                                    <a href="#"
                                                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ugd-cart-btn">Add
                                                    to cart</a>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })}
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default FilterProd
