import Image from 'next/image'
import React from 'react'

const Button = () => {
  return (
    <button className='py-[1rem] rounded-lg font-medium text-[#013CC6] text-left px-[1.2rem] flex gap-[1rem] hover:bg-[#0B63F8] hover:text-white'>
        <Image 
            src={'/admin/product-active.svg'}
            alt='icon'
            className=' fill-[#013CC6] text-[#013CC6]'
            width={20}
            height={20}
        />
        Products
    </button>
  )
}

export default Button