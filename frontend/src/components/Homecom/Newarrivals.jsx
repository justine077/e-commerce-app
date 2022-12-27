import React from 'react';
import Slider from 'react-slick';
import Data from '../../Data';
import ProductItem from '../ProductItem';
import './newarrivals.css';

const Newarrivals = () => {

    const sliderSettings = {
        slidesToShow: 5,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
        responsive: [
            {
              breakpoint: 1950,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 3,
                infinite: true,
                dots: false
              }
            },
            {
                breakpoint: 1525,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: false
                }
              },
            {
                breakpoint: 1270,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 2,
                  infinite: true,
                  dots: false
                }
              },
            {
              breakpoint: 1027,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 755,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
                breakpoint: 450,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
          ]
      };

  return (
    <div className='overflow-hidden mt-20'>
      <div className='max-w-screen-md mx-auto mt-10'>
        <h1 className='relative font-bold text-5xl text-center font-body text-[#383838] ugd-new-title uppercase'><span>New Arrivals</span></h1>
      </div>
      <div className='max-w-screen-2xl mx-auto mt-10'>
        <Slider {...sliderSettings}>
            {
            Data.map(product =>{
                
            return <ProductItem key={product.id} product={product} />
            })
        }
        </Slider>
      </div>
    </div>
  )
}

export default Newarrivals
