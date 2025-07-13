'use client'
import React, { useRef } from 'react'
import { useRouter } from 'next/navigation'
import { MagnifyingGlassIcon } from '@phosphor-icons/react'

const InputSearch = () => {
      const searchRef = useRef<HTMLInputElement>(null)
      const router = useRouter()

      const handleSearch = (event: React.FormEvent) => {
        event.preventDefault()
        const keyword = searchRef.current?.value
        if (keyword) {
          router.push(`/search/${keyword}`)
        }
      }

  return (
      <form className='relative bg-white border-none rounded-xl'>
      <input
      ref={searchRef}
      type='text'
      className=' text-black placeholder-gray-500 rounded-xl outline-none focus:placeholder-black'
      placeholder='Search Movie ... ' />
      <button 
      onClick={handleSearch}
      type="submit"
      className='absolute-1 end-1 cursor-pointer'
      ><MagnifyingGlassIcon/>
      </button>
    </form>
  )
}

export default InputSearch