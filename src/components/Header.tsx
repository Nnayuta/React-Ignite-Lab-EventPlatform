import React from 'react';
import OpenMenu from './icons/menu-open';
import { Logo } from './Logo';

interface HeaderProps {
  MenuOnClick: () => void
}

export const Header: React.FC<HeaderProps> = ({ MenuOnClick }) => {
  return (
    <header className="w-full py-5 flex items-center justify-center bg-gray-700 border-b border-gray-600 md:justify-around">
      <Logo />
      <div className='hidden md:flex md:items-center md:gap-2'>
        <label>Aulas</label>
        <button onClick={MenuOnClick}><OpenMenu /></button>
      </div>
    </header>
  )
}