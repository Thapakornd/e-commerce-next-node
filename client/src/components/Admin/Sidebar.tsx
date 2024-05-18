import React from 'react'
import Button from './Button'

const Sidebar = () => {
  return (
    <div className='py-[2.5rem] px-[1.8rem] bg-[#FFF] w-[14.5rem] h-screen'>
        <div className=' logo mb-[4rem]'>
            <h4 className='font-bold text-3xl text-[#333333]'>SHOP<span className=' text-[#00B074]'>.</span>CO</h4>
            <p className=' text-[#B9BBBD] font-medium text-sm'>Modern Admin Dashboard</p>
        </div>
        <div className='list flex flex-col'>
            <Button />
            <Button />
            <Button />
        </div>
    </div>
  )
}

export default Sidebar