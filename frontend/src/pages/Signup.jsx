import React from 'react';
import './Signup.css';

const Signup = () => {
  return (
    <div className="bg-[#36B4E6] sticky top-0 z-50">
      <div className='flex justify-between w-8/12 mx-auto mb-3 pt-2'>
        <div className='ugd-nav-link text-2xl text-[#ffffff]'>
            <a href="/" className='font-bold'>Home</a>
            <span className='font-thin'>|</span>
            <a href="/Products" className='font-bold'>Products</a>
        </div>
        <div className='text-2xl text-[#ffffff] font-bold'>
          <a href="/Login">Sign up <span className='font-thin'>|</span> Login</a>
        </div>
      </div>
      <div className='flex justify-around w-9/12 mx-auto items-center pb-2'>
        <div>
          <a href="/">
            <img className='h-20 w-20' src="https://img.freepik.com/premium-vector/abstract-modern-ecommerce-logo-design-colorful-gradient-shopping-bag-logo-template_467913-995.jpg?w=2000" alt="" />
          </a>
        </div>
        <div className='w-4/5'>
          <form action=""><input className="ugd-search-input focus:ring-1 rounded-lg" type="search" name="search" placeholder='Search Products'/></form>
        </div>
        <div>
          <a href="#"><i class="fa fa-cart-plus text-5xl text-[#ffffff]" aria-hidden="true"></i></a>
        </div>
      </div>
    </div>
  )
}

export default Signup
