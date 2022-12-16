import React from 'react';
import './category.css'

const Category = () => {
  return (
    <div className='mt-10'>
        <div className='ugd-container text-center max-w-max mx-auto'>
            <div className='ugd-1 relative'>
                <a href='#'>
                    <img className='ugd-catimg' src='https://template.hasthemes.com/ezone/ezone/assets/img/banner/4.jpg' alt=''/>
                </a>
                <div className='ugd-1-overflow'>
                    <h4>20%<br/>OFF</h4>
                    <h3>Trending<br/>Fashion<br/>2022</h3>
                </div>
            </div>
            <div className='ugd-2 relative'>
                <a href='#'>
                    <img className='ugd-catimg' src='https://template.hasthemes.com/ezone/ezone/assets/img/banner/5.jpg' alt=''/>
                </a>
                <div className='ugd-2-overflow'>
                    <h4 className='text-start'>Winter<br/>Collection</h4>
                    <button>Shop now</button>
                </div>
            </div>
            <div className='ugd-3'><img className='ugd-catimg' src='https://template.hasthemes.com/ezone/ezone/assets/img/banner/6.jpg' alt=''/></div>
            <div className='ugd-4'><img className='ugd-catimg' src='https://template.hasthemes.com/ezone/ezone/assets/img/banner/7.jpg' alt=''/></div>
        </div>
    </div>
  )
}

export default Category
