'use client'
import React, { useRef } from 'react'
import { useRouter } from 'next/router'

const InputSearch = () => {
      // const searchRef = useRef<HTMLInputElement>(null)
      // const router = useRouter()

      // const handleSearch = (event: React.FormEvent) => {
      //   event.preventDefault()
      //   const keyword = searchRef.current?.value
      //   if (keyword) {
      //     router.push(``)
      //   }
      // }

  return (
      <form className='bg-white border-none rounded-xl'>
      <input
      // ref={searchRef}
      type='text'
      className='w-full py-3 pl-12 pr-16 bg-transparent text-black placeholder-gray-500 rounded-2xl outline-none focus:placeholder-gray-400 transition-all duration-300'
      placeholder='Search Movie ... ' />
      <button 
      type="submit"
      className='absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-xl transition-all duration-300'
      >       
      </button>
    </form>
  )
}

export default InputSearch