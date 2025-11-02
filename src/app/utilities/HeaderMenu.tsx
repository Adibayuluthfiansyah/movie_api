import React from 'react'

interface HeaderMenuProps {
    title: string
}

const HeaderMenu = ({ title }: HeaderMenuProps) => {
    return (
        <div className="mb-6">
            <h1 className="text-white text-2xl md:text-3xl font-bold">
                {title}
            </h1>
            <div className="h-1 w-20 bg-red-600 mt-2 rounded-full"></div>
        </div>
    )
}

export default HeaderMenu