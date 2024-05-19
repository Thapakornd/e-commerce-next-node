import React from 'react'
import SearchBar from './SearchBar'

const TableProducts = () => {
  return (
    <div className=' mx-[2.5rem] py-[3.5rem]'>
        <SearchBar />
        <div className='name-table mt-[2.75rem]'>
            <h4 className=' text-2xl'>Products</h4>
        </div>
        <div className='filter-search flex gap-[1.5rem] mt-[1.5rem]'>
            <div className='flex flex-col gap-4 w-[16rem]'>
                <label htmlFor="search-id">ID</label>
                <input type="text" id='search-id' className='px-[1.5rem] py-[0.8rem]' placeholder='Enter Product Name..'/>
            </div>
            <div className='flex flex-col gap-4 w-[16rem]'>
                <label htmlFor="search-category">Category</label>
                <input type="text" id='search-category' className='px-[1.5rem] py-[0.8rem]' placeholder='Enter Category Name..' />
            </div>
            <div className='flex flex-col gap-4 w-[16rem]'>
                <label htmlFor="created-date">Created Date</label>
                <input type="text" id='created-date' className='px-[1.5rem] py-[0.8rem]' placeholder='mm/dd/yyyy' />
            </div>
        </div>
        <div className="table relative overflow-x-auto mt-[2.5rem]">
            <table className=' w-full rtl:text-right text-left'>
                <thead className='bg-gray-50 text-xs uppercase'>
                    <tr>
                        <th scope='col' className='p-4'>
                            <div className='flex items-center'>
                                <input type="checkbox"  name="" id="checkbox-search" className='w-4 h-4 ' />
                            </div>
                        </th>
                        <th scope='col' className='px-8 py-3'>
                            Product ID
                        </th>
                        <th scope='col' className='px-8 py-3'>
                            Created Date
                        </th>
                        <th scope='col' className='px-8 py-3'>
                            Product name
                        </th>
                        <th scope='col' className='px-8 py-3'>
                            Category
                        </th>
                        <th scope='col' className='px-8 py-3'>
                            Price
                        </th>
                        <th scope='col' className='px-8 py-3'>
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='bg-white border-b'>
                        <td className='w-4 p-4'>
                            <div className='flex items-center'>
                                <input type="checkbox" id='checkout-table-1'/>
                            </div>
                        </td>
                        <th className='px-8 py-4 font-medium text-gray-900 whitespace-nowrap'>
                            1
                        </th>
                        <td className="px-8 py-4">
                            10/23/2001
                        </td>
                        <td className="px-8 py-4">
                            Apple Macbook Pro 17
                        </td>
                        <td className='px-8 py-4'>
                            Shirt
                        </td>
                        <td className='px-8 py-4'>
                            17.00 Baht
                        </td>
                        <td className='px-8 py-4'>
                            <a href="#" className=' font-medium text-blue-600'>Edit</a>
                        </td>
                    </tr>
                    <tr className='bg-white border-b'>
                        <td className='w-4 p-4'>
                            <div className='flex items-center'>
                                <input type="checkbox" id='checkout-table-1'/>
                            </div>
                        </td>
                        <th className='px-8 py-4 font-medium text-gray-900 whitespace-nowrap'>
                            1
                        </th>
                        <td className="px-8 py-4">
                            10/23/2001
                        </td>
                        <td className="px-8 py-4">
                            Apple Macbook Pro 17
                        </td>
                        <td className='px-8 py-4'>
                            Shirt
                        </td>
                        <td className='px-8 py-4'>
                            17.00 Baht
                        </td>
                        <td className='px-8 py-4'>
                            <a href="#" className=' font-medium text-blue-600'>Edit</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default TableProducts