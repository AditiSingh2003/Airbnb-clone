import React from 'react';
import Image from 'next/image';
import logo from '../images/logo.png';
import { GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon } from '@heroicons/react/solid';


function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md px-5 py-3 md:px-10">
      <div className="relative flex items-center h-10 cursor-pointer my-auto "> 
        {/* left */}
        <Image
      src="https://links.papareact.com/qd3"
      alt="Picture of the author"
      layout="fill"
      objectFit='contain'
      objectPosition='left'
    />
      </div>

      <div className="flex items-center border-2 rounded-full py-2 md:shadow-sm">
         {/* middle */}
        <input className='flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400'
         type="text" placeholder="Start your search"/>
        <SearchIcon className="h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer hidden md:inline-flex md:mx-2" /> 

      </div>

      <div className='flex items-center space-x-4 justify-end text-gray-500'>
        {/* right */}
        <p className="hidden md:inline-flex cursor-pointer">Become a host</p>
        <GlobeAltIcon className='h-6 cursor-pointer'/>
        <div className='flex space-x-2 px-2 border-2 rounded-full py-2'>
          <MenuIcon className='h-6 cursor-pointer'/>
          <UserCircleIcon className='h-6 cursor-pointer'/>
        </div>
      </div>

    </header>
  )
}

export default Header
