import React from 'react'
import Button from './Button'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className=' relative bg-[#F2F0F1] py-[6.5rem]'>
      <div className="left container mx-auto">
        <div className=' w-[50%]'>
          <div className='flex flex-col gap-[2rem]'>
            <h1 className='text-6xl font-bold'>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
            <p>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
          </div>
          <div className='mt-[2rem]'>
            <Button />
          </div>
          <div className='summery flex justify-between gap-[2rem] mt-[3rem]'>
            <div className=''>
              <h3 className=' text-4xl font-bold'>200+</h3>
              <p className=' leading-snug'>International Brands</p>
            </div>
            <canvas className=' h-[4.625rem] bg-[#b1b1b1] w-[2px]'></canvas>
            <div className=''>
              <h3 className=' text-4xl font-bold'>2,000+</h3>
              <p className=' leading-snug'>High-Quality Products</p>
            </div>
            <canvas className=' h-[4.625rem] bg-[#b1b1b1] w-[2px]'></canvas>
            <div>
              <h3 className=' text-4xl font-bold'>30,000+</h3>
              <p className=' leading-snug'>Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
      <div className="right absolute right-[5rem] top-0 z-20">
        <Image 
          src={'/homepage/hero-bg.png'}
          alt='model'
          width={600}
          height={663}
        />
      </div>
      <Image 
        src={'/homepage/star-lg.svg'}
        alt='start-lg'
        className=' absolute top-[5rem] right-[5rem] z-30'
        width={104}
        height={104}
      />
      <Image 
        src={'/homepage/star-sm.svg'}
        alt='star-sm'
        className=' absolute top-[18rem] right-[40rem] z-30'
        height={56}
        width={56}
      />
      <div className=" absolute w-full bg-black text-white text-4xl z-100 mt-[6.5rem] z-30">
          <div className=" container mx-auto flex justify-between py-[2.5rem]">
            <h2>SHOP.CO</h2>
            <h2>SHOP.CO</h2>
            <h2>SHOP.CO</h2>
            <h2>SHOP.CO</h2>
            <h2>SHOP.CO</h2>
          </div>
        </div>
    </div>
  )
}

export default Hero