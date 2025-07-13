import React from 'react'
import Link from 'next/link'
import InputSearch from './InputSearch'


const Navbar = () => {
return (
<header className='relative shadow-xl'>
            <div className="absolute inset-0 bg-red-600"></div> 
            <div className='relative z-10 container mx-auto px-4'>
                <div className='flex md:flex-row flex-col justify-between items-center py-4'>
                    <Link href="/" className='group flex items-center space-x-2 mb-4 md:mb-0'>
                        <div className='text-white font-bold text-2xl group-hover:text-red-600 transition-all'>
                            70NGHUB
                         <InputSearch/>
                        </div>
                    </Link>
                </div>
            </div>
        </header>
  )
}

export default Navbar