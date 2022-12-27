import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div>
        <footer className="bg-[#36B4E6]">
            <div className="container p-6 pt-12 mx-auto">
                <div className="mt-6 lg:mt-0 lg:flex-1 my-8">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto max-w-screen-2xl">
                        <div className='ugd-foot-cont1'>
                            <h3 className="uppercase dark:text-white text-2xl font-bold ugd-foot-1">customer service</h3>
                            <a href="#" className="block mt-2 text-lg font-bold hover:underline">cart</a>
                            <a href="#" className="block mt-2 text-lg font-bold hover:underline">my account</a>
                            <a href="#" className="block mt-2 text-lg font-bold hover:underline">log in</a>
                            <a href="#" className="block mt-2 text-lg font-bold hover:underline">register</a>
                            <a href="#" className="block mt-2 text-lg font-bold hover:underline">support</a>
                        </div>

                        <div className='ugd-foot-cont1'>
                            <h3 className="uppercase dark:text-white text-2xl font-bold ugd-foot-1">categories</h3>
                            <a href="#" className="block mt-2 text-lg font-bold hover:underline">mens</a>
                            <a href="#" className="block mt-2 text-lg font-bold hover:underline">womens</a>
                            <a href="#" className="block mt-2 text-lg font-bold hover:underline">kids</a>
                        </div>

                        <div className='ugd-foot-cont1'>
                            <h3 className="uppercase dark:text-white text-2xl font-bold ugd-foot-1">contact</h3>
                            <h4 className='text-[#ffffff] text-xl mb-4'>Subscribe our news letter</h4>
                            <input className='mb-4 focus:ring-[#99dbf5] ugd-foot-em' placeholder='Enter Your E-mail'></input>
                            <a href="#" className="block mt-2 text-lg font-bold hover:underline">Mega cloud</a>
                            <a href="#" className="block mt-2 text-lg font-bold hover:underline">Aperion UI</a>
                            <a href="#" className="block mt-2 text-lg font-bold hover:underline">Meraki UI</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='ugd-foot-last'>
                <p className="text-center">All rights reserved © Under Ground Developer</p>
            </div>
        </footer>
    </div>
  )
}

export default Footer
