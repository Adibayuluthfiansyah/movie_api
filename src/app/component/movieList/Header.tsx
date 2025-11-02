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
    <h1 className="mt-2 text-2xl font-bold text-white">{title}</h1>
    {linkHref && linkTitle ?    <Link href={linkHref} className='md:text-xl text-sm underline hover:text-red-600 transition-all'>
    {linkTitle}
    </Link>
    : null
    }
    </div>
  )
}

export default Header