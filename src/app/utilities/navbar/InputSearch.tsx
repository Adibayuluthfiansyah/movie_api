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
    <div>
      <form className="relative hidden sm:block">
      <input
      ref={searchRef}
      placeholder='Search Movie ... '
      className="bg-black/50 text-white placeholder-gray-400 border border-gray-600 rounded-md px-4 py-2 pr-10 w-64 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"/>
      <button 
      onClick={handleSearch}
      type="submit"
      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white cursor-pointer">
      <MagnifyingGlassIcon size={18}/>
      </button>
    </form>
    </div>

  )
}

export default InputSearch