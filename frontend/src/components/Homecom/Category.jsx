import React from 'react';
import './category.css';

const Category = () => {
  return (
    <div className='cath-all'>
        <div className='ugd-cat-container text-center max-w-max mx-auto'>
            <div className='ugd-cat-1 relative overflow-hidden'>
                <a href='#'>
                    <img className='ugd-catimg hover:scale-110 duration-500' src='https://template.hasthemes.com/ezone/ezone/assets/img/banner/4.jpg' alt=''/>
                </a>
                <div className='ugd-cat-1-overflow'>
                    <h3 className='cath-h3'><span>20%</span><br/><span className='cath-span'>OFF</span></h3>
                    <h2 className='cath-h2'><span className='cath-span1'>Trending</span><br/><span>Fashion</span><br/><span>2022...</span></h2>
                </div>
            </div>
            <div className='ugd-cat-2 relative overflow-hidden'>
                <a href='#'>
                    <img className='ugd-catimg hover:scale-110 duration-500' src='https://template.hasthemes.com/ezone/ezone/assets/img/banner/5.jpg' alt=''/>
                </a>
                <div className='ugd-cat-2-overflow'>
                    <h3 className='text-start'>Winter<br/>Collection</h3>
                    <a href='#'>Shop now</a>
                </div>
            </div>
            <div className='ugd-cat-3 relative overflow-hidden'>
                <a href='#'>
                    <img className='ugd-catimg hover:scale-110 duration-500' src='https://template.hasthemes.com/ezone/ezone/assets/img/banner/6.jpg' alt=''/>
                </a>
                <div className='ugd-cat-3-overflow'>
                    <h3><span>new</span><br/>fashion</h3>
                </div>
            </div>
            <div className='ugd-cat-4 relative overflow-hidden'>
                <a href='#'>
                    <img className='ugd-catimg hover:scale-110 duration-500' src='https://template.hasthemes.com/ezone/ezone/assets/img/banner/7.jpg' alt=''/>
                </a>
                <div className='ugd-cat-4-overflow'>
                    <h2>gift shop</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Category
