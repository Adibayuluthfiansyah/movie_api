import React from 'react'
import Link from 'next/link'


const Navbar = () => {
return (
<header className='relative shadow-xl'>
            <div className="absolute inset-0 bg-black"></div> 
            <div className='relative z-10 container mx-auto px-4'>
                <div className='flex md:flex-row flex-col justify-between items-center py-4'>
                    <Link href="/" className='group flex items-center space-x-2 mb-4 md:mb-0'>
                        <div className='text-white font-bold text-2xl group-hover:text-amber-500 transition-all'>
                            70NGHUB
                        </div>
                    </Link>
                </div>
            </div>
        </header>
  )
}

export default Navbar