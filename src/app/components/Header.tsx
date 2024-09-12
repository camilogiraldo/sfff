'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import menuOpenIcon from '../../../public/menu-open.svg';
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname()
  const [menuOpen, openMenu] = useState(false)

  const onOpenMenu = () => openMenu(!menuOpen)
  const closeMenu = () => openMenu(false)

  return (
    <nav className="relative bg-white h-16 md:h-16.5 flex justify-center items-center md:justify-between md:w-11/12 2xl:w-9/12 3xl:w-7/12 mx-auto">

      {/* Mobile menu */}
      <div className="absolute inset-y-0 left-4 flex items-center md:hidden">
        <button
          type="button"
          className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          aria-controls="mobile-menu"
          aria-expanded="false"
          onClick={() => onOpenMenu()}>
          <span className="absolute -inset-0.5"></span>
          <span className="sr-only">Open main menu</span>

          {/* Icon when menu is closed. Menu open: "hidden", Menu closed: "block" */}
          <Image
            className={(menuOpen ? "hidden " : "block ") + "h-6 w-6"}
            src={menuOpenIcon}
            priority={true}
            alt="Open Menu">
          </Image>

          {/* Icon when menu is open. Menu open: "block", Menu closed: "hidden" */}
          <svg className={(menuOpen ? "block " : "hidden ") + "h-6 w-6 text-black"} fill="none" viewBox="0 0 24 24"
            strokeWidth="3" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" fill="#000" />
          </svg>
        </button>
      </div>


      <Link className="bg-gray h-full w-32 flex justify-center items-center font-bold text-primary-blue hover:text-orange" href="/" onClick={() => closeMenu()}>SFFF</Link>


      <div className="hidden md:flex items-center justify-center">
        <div className="hidden md:flex">
          <div className="flex space-x-4">
            <Link href="/" className={(`${pathname === '/' ? 'text-orange ' : 'text-primary-blue '}`) + "font-bold hover:text-orange"}>Map</Link>
          </div>
        </div>
      </div>

      <div className={(menuOpen ? "block " : "hidden ") + "absolute w-full flex items-center bottom-[-138px] bg-white z-30"} id="mobile-menu">
        <div className="w-full space-y-1 px-2 pb-3 pt-2 flex flex-col items-center">
          <Link href="/" className="px-3 py-2 hover:text-orange h-14 border-b border-gray w-full flex justify-center font-bold" onClick={() => closeMenu()}>Map</Link>
        </div>
      </div>
    </nav>
  )
}

export default Header;