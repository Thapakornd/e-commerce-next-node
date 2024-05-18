import Sidebar from '@/components/Admin/Sidebar';
import React from 'react'

const Admin = () => {
  return (
    <div className=''>
        <Sidebar />
        <canvas className=' fixed w-screen h-screen bg-[#F3F2F7] top-0 -z-10'></canvas>
    </div>
  )
}

export default Admin;