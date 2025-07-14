'use client'

import { useRef } from 'react'
import { useRouter } from 'next/navigation'
import { MagnifyingGlassIcon } from '@phosphor-icons/react'

const InputSearch = () => {
      const searchRef = useRef<HTMLInputElement>(null)
      const router = useRouter()

      const handleSearch = (event: React.FormEvent) => {
        event.preventDefault()
        const keyword = searchRef.current?.value
        if(keyword) {
          router.push(`/search/${keyword}`)
        }
      }

  return (

    <form className='relative bg-white border-none rounded-xl '>
      <input
      ref={searchRef}
      placeholder='Search Movie ... '
      className='w-full p-2' />


      <button 
      onClick={handleSearch}
      type="submit"
      className='absolute top-2 end-2 cursor-pointer'>
      <MagnifyingGlassIcon size={24}/>
      </button>

    </form>


  )
}

export default InputSearch