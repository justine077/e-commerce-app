import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div>
        <footer className="bg-[#36B4E6]">
            <div className="container pt-12 mx-auto">
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
                            <div className='ugd-foot-email mb-4'>
                                <input className="ugd-email-input focus:ring-0" type="email" name="email" placeholder='Enter Your E-mail'/>
                                <div className='ugd-foot-email2'>
                                    <a href="#"><i class="fa fa-envelope-o" aria-hidden="true"></i></a>
                                </div>
                            </div>
                            <div className='ugd-foot-contact py-3'>
                                <h4 className='text-[#ffffff] text-xl mb-4'><i class="fa fa-map-marker" aria-hidden="true"></i><span>77 Seventh avenue Philippines 12555.</span></h4>
                                <h4 className='text-[#ffffff] text-xl mb-4'><i class="fa fa-phone" aria-hidden="true"></i><span>+88 (015) 123456 or +88 (012) 112233</span></h4>
                            </div>
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
