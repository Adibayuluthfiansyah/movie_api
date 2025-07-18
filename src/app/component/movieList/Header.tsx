import React from 'react'
import Link from 'next/link'


interface movieTitleProps {
    title : any
    linkHref : any
    linkTitle : any
}

const Header = ({title, linkHref, linkTitle}: movieTitleProps) => {
  return (
    <div className='flex justify-between items-center p-4'>
    <h1 className="ml-29 mt-2 text-2xl font-bold text-red-600">{title}</h1>
    <Link href={linkHref} className='md:text-xl mr-15 text-sm underline hover:text-red-600 transition-all'>
    {linkTitle}
    </Link>
    </div>
  )
}

export default Header