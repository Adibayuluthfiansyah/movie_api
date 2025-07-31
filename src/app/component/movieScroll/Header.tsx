import React from 'react'
import Link from 'next/link'


interface movieTitlesProps {
    title : any
    linkHref : any
    linkTitle : any
}

const Header = ({title, linkHref, linkTitle}: movieTitlesProps) => {
  return (
    <div className='flex justify-between items-center p-4'>
    <h1 className="ml-29 mt-2 text-2xl font-bold text-white">{title}</h1>
    {linkHref && linkTitle ?    <Link href={linkHref} className='md:text-xl mr-15 text-sm underline hover:text-red-600 transition-all'>
    {linkTitle}
    </Link>
    : null
    }
    </div>
  )
}

export default Header