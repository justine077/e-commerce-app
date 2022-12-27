import React from 'react';
import Slider from 'react-slick';
import './followus.css';

const Followus = () => {

    const sliderSettings = {
        slidesToShow: 5,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
        responsive: [
            {
              breakpoint: 1950,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 3,
                infinite: true,
                dots: false
              }
            },
            {
                breakpoint: 1525,
                settings: {
                  slidesToShow: 4,
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
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 755,
              settings: {
                slidesToShow: 1,
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
    <div className='mt-20 bg-[#fafafa] overflow-hidden'>
        <div className='py-12'>
            <div>
                <h2 className='relative font-bold text-5xl text-center font-body text-[#383838] uppercase mb-4'>insta feed</h2>
                <h4 className='text-center ugd-fol-title'>Follow us on instagram</h4>
            </div>
            <div className='max-w-fit mx-auto mt-10'>
                <Slider {...sliderSettings}>
                    <div>
                        <img className='w-full' src='https://template.hasthemes.com/ezone/ezone/assets/img/instra/1.jpg' alt=''/>
                    </div>
                    <div>
                        <img className='w-full' src='https://template.hasthemes.com/ezone/ezone/assets/img/instra/2.jpg' alt=''/>
                    </div>
                    <div>
                        <img className='w-full' src='https://template.hasthemes.com/ezone/ezone/assets/img/instra/3.jpg' alt=''/>
                    </div>
                    <div>
                        <img className='w-full' src='https://template.hasthemes.com/ezone/ezone/assets/img/instra/4.jpg' alt=''/>
                    </div>
                    <div>
                        <img className='w-full' src='https://template.hasthemes.com/ezone/ezone/assets/img/instra/5.jpg' alt=''/>
                    </div>
                </Slider>
            </div>
        </div>
    </div>
  )
}

export default Followus
