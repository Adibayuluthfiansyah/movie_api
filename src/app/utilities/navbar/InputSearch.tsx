'use client'

import { useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { MagnifyingGlassIcon } from '@phosphor-icons/react'

const InputSearch = () => {
    const searchRef = useRef<HTMLInputElement>(null)
    const router = useRouter()
    const [isSearchOpen, setIsSearchOpen] = useState(false)

    const handleSearch = (event: React.FormEvent) => {
        event.preventDefault()
        const keyword = searchRef.current?.value
        
        if (!keyword || keyword.trim() === "") return
        
        router.push(`/search/${keyword}`)
        setIsSearchOpen(false)
        if (searchRef.current) {
            searchRef.current.value = ""
        }
    }

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen)
        if (!isSearchOpen) {
            setTimeout(() => {
                searchRef.current?.focus()
            }, 100)
        }
    }

    return (
        <div className="flex items-center">
            {/* Desktop Search - Hidden on Mobile */}
            <form onSubmit={handleSearch} className="relative hidden md:block">
                <input
                    ref={searchRef}
                    placeholder='Search Movie ...'
                    className="bg-black/50 text-white placeholder-gray-400 border border-gray-600 rounded-md px-4 py-2 pr-10 w-64 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                />
                <button 
                    type="submit"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white cursor-pointer"
                >
                    <MagnifyingGlassIcon size={18}/>
                </button>
            </form>

            {/* Mobile Search Icon - Hidden on Desktop */}
            <button 
                onClick={toggleSearch}
                className="md:hidden text-white hover:text-red-500 transition-colors p-2"
                type="button"
                aria-label="Search"
            >
                <MagnifyingGlassIcon size={24}/>
            </button>

            {/* Mobile Search Overlay */}
            {isSearchOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-98 z-50 md:hidden">
                    <div className="flex flex-col h-full">
                        {/* Header */}
                        <div className="flex items-center justify-between p-4 border-b border-gray-800">
                            <h2 className="text-white text-lg font-semibold">Search Movies</h2>
                            <button 
                                onClick={toggleSearch}
                                className="text-white hover:text-red-500 transition-colors p-2"
                                type="button"
                                aria-label="Close"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Search Form */}
                        <div className="p-4">
                            <form onSubmit={handleSearch}>
                                <div className="relative">
                                    <input 
                                        ref={searchRef}
                                        placeholder="Search Movie ..." 
                                        className="w-full p-4 pl-12 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-red-500 text-base"
                                        autoFocus
                                        autoComplete="off"
                                    />
                                    <MagnifyingGlassIcon 
                                        size={20} 
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                                    />
                                </div>
                                <button 
                                    type="submit"
                                    className="w-full mt-4 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition-colors active:scale-95"
                                >
                                    Search
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default InputSearch