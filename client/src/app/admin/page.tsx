import Sidebar from '@/components/Admin/Sidebar';
import TableProducts from '@/components/Admin/TableProducts';
import React from 'react'

const Admin = () => {
  return (
    <div className=' flex flex-row'>
        <Sidebar />
        <canvas className=' fixed w-screen h-screen bg-[#F3F2F7] top-0 -z-10'></canvas>
        <TableProducts />
    </div>
  )
}

export default Admin;