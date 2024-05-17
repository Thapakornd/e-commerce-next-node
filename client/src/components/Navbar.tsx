import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='w-full'>
        <div className='bg-black text-white py-[0.5rem] text-[0.875rem] flex justify-center w-full items-center'>
          <p>Sign up and get 20% off your first order <span className='underline'><a href="#">Sign up now</a></span></p>
        </div>
        <div className=' mx-auto container my-[1.5rem] py-[0.8rem] flex items-center gap-[2.5rem]'>
          <div className="logo">
            <h1 className=' text-4xl font-extrabold'>SHOP.CO</h1>
          </div>
          <div className="navlink">
            <ul className='flex gap-[1.5rem]'>
              <li>Shop</li>
              <li>On Sale</li>
              <li>New Arrivals</li>
              <li>Brands</li>
            </ul>
          </div>
          <div className="search-bar bg-[#F0F0F0] w-[36rem] px-[1rem]">
            dsadsa
          </div>
          <div className="cart-profile flex gap-[0.88rem]">
            <Image 
              src={"/homepage/cart.svg"}
              alt='cart'
              width={24}
              height={24}
            />
            <Image 
              src={"/homepage/profile.svg"}
              alt='cart'
              width={24}
              height={24}
            />
          </div>
        </div>
    </div>
  )
}

export default Navbar