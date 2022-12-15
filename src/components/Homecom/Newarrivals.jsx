import React from 'react';
import Slider from 'react-slick';
import Data from '../../Data';
import ProductItem from '../ProductItem';

const Newarrivals = () => {

    const sliderSettings = {
        slidesToShow: 7,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
        responsive: [
            {
              breakpoint: 1950,
              settings: {
                slidesToShow: 6,
                slidesToScroll: 3,
                infinite: true,
                dots: false
              }
            },
            {
                breakpoint: 1525,
                settings: {
                  slidesToShow: 5,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: false
                }
              },
            {
                breakpoint: 1270,
                settings: {
                  slidesToShow: 4,
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
    <div>
        <h1 className='font-bold text-7xl text-center font-body text-gray-800'>New Arrivals</h1>
        <Slider {...sliderSettings}>
            {
            Data.map(product =>{
                
            return <ProductItem key={product.id} product={product} />
            })
        }
        </Slider>
    </div>
  )
}

export default Newarrivals
