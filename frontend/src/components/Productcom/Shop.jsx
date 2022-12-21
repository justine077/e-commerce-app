import React from 'react';
import { useState } from 'react';
import './Shop.css';
import Categories from './Categories';

const Shop = () => {

  const[data, setData] = useState(Categories);

    const filterResult = (catItem) => {
        const result = Categories.filter((curDate) => {
            return curDate.category === catItem;
        });
        setData(result);
    }

  return (
    <div className='mx-auto'>
        <h1 className='text-center'>SHOP PAGE</h1>
        <div className='container'>
            <div className='span-1'>
                <ul className='btn-cat'>
                    <li><button className='btn' onClick={() => setData(Categories)}>All</button></li>
                    <li><button className='btn' onClick={() => filterResult('Men')}>Men</button></li>
                    <li><button className='btn' onClick={() => filterResult('Women')}>Women</button></li>
                    <li><button className='btn' onClick={() => filterResult('Kids')}>Kid</button></li>
                </ul>
            </div>
            <div className='span-4'>
                <div className="container1">
                   
                    {data.map((values) => {
                        const{id, title, price, image} = values;
                            return (
                                <> 
                                  <div className="span-1-1 mb-1">
                                    <div key={id}>
                                        <div>
                                            <img src={image} alt={title} />
                                        </div>
                                        <div>
                                            <h2 className='card-title'>{title}</h2>
                                            <span className='card-price'>${price}</span>
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
  )
}

export default Shop