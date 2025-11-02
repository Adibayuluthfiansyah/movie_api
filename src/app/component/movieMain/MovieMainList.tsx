'use client'

import React from 'react'
import Link from 'next/link';
import { Star } from 'lucide-react'; // Impor ikon Star

interface MovieMainProps {
  api : any;
}

const MovieMainList = ({api} : MovieMainProps) => {

  // Fungsi helper untuk mengambil tahun
  const getYear = (dateString: string) => {
    if (!dateString) return '';
    return new Date(dateString).getFullYear();
  }

  return (
    // 1. Ubah grid-cols-2 menjadi grid-cols-1 (hanya di mobile)
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 gap-4" >      
    {api.results?.map ((movie:any) => {
      
      const year = getYear(movie.release_date);

      return (
      // 2. Bungkus item dengan Link. Dibuat 'flex' di mobile, dan 'flex-col' (tampilan block) di desktop
      <Link 
        href={`/${movie.id}`} 
        key={movie.id} 
        className="group flex gap-3 rounded-lg overflow-hidden md:flex-col md:gap-0"
      >
        {/* 3. Poster */}
        <div className="relative w-28 flex-shrink-0 md:w-full">
          <img 
            src={`${process.env.NEXT_PUBLIC_API_IMG_URL}${movie.poster_path}`} 
            width={112} // w-28
            height={168} // ~rasio 2:3
            // 4. Tinggi gambar: 'h-full' di mobile (menyesuaikan flex), 'h-80' di desktop
            className='w-full h-full object-cover md:h-80 group-hover:scale-105 transition-transform duration-300 rounded-lg'
            alt={movie.title}
          />
          {/* 5. Overlay "Watch" (HANYA MUNCUL DI DESKTOP) */}
          <div className="hidden md:flex absolute inset-0 bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 items-center justify-center rounded-lg">
            <span className="text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              ▶ Watch
            </span>
          </div>
        </div>

        {/* 6. Konten Teks */}
        <div className="flex flex-col justify-center py-2 pr-2 md:py-0 md:items-center md:text-center overflow-hidden">
          {/* Judul (berubah di desktop) */}
          <h1 className='text-white font-semibold group-hover:text-red-500 transition-colors truncate md:mt-4'>
            {movie.title}
          </h1>
          
          {/* 7. Detail (Tahun, Rating, Overview) (HANYA MUNCUL DI MOBILE) */}
          <div className="flex items-center flex-wrap gap-2 mt-2 text-xs text-gray-400 md:hidden">
            {year && (
              <span className="border border-gray-600 px-2 py-0.5 rounded-sm">
                {year}
              </span>
            )}
            {movie.vote_average > 0 && (
              <div className="flex items-center gap-1">
                <Star size={14} className="text-yellow-500" fill="currentColor" />
                <span>{movie.vote_average?.toFixed(1)}</span>
              </div>
            )}
          </div>
          <p className="text-gray-400 text-xs mt-3 line-clamp-2 md:hidden">
            {movie.overview}
          </p>

          {/* 8. Paragraf kosong asli Anda untuk desktop */}
          <p className="text-gray-400 text-xs hidden md:block"></p>
        </div>
      </Link>
      )
    })}
    </div>
  )
}

export default MovieMainList