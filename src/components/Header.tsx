import React from 'react';
import CloseMenu from './icons/menu-close';
import OpenMenu from './icons/menu-open';
import { Logo } from './Logo';

interface HeaderProps {
  MenuOnClick: () => void
  mobileMenu: boolean
}

export const Header: React.FC<HeaderProps> = (props) => {
  return (
    <header className="w-full py-5 flex items-center justify-center bg-gray-700 border-b border-gray-600 md:justify-around">
      <Logo />
      <div className='hidden md:flex md:items-center md:gap-2'>
        <label>Aulas</label>
        <button onClick={props.MenuOnClick}>{props.mobileMenu ? <OpenMenu /> : <CloseMenu />}</button>
      </div>
    </header>
  )
}