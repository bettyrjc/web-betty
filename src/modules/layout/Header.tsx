import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

import Link from 'next/link';
import { useRouter } from 'next/router';

import Logo from '../../assets/icons/logo';

const Header = () => {
  // const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const router = useRouter();
  const path = router.pathname;

  return (
    <>
      <div className="relative flex items-center justify-between p-4 mx-2 bg-yellow-50">
        <Link href="/" className="w-full cursor-pointer">
          <div className=" w-[160px]  cursor-pointer ">
            <Logo />
          </div>
        </Link>
        <button className="text-3xl text-orange-500 md:bg-transparent lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <HiMenu />
        </button>
        <div className="items-center justify-end hidden w-1/2 gap-4 text-lg font-medium text-orange-500 lg:flex">
          <Link
            href="/projects"
            className={`block py-2 hover:text-orange-800 ${path === '/projects' && ' text-orange-800'}`}
          >
            Projects
          </Link>
          <Link
            href="/experience"
            className={`block py-2 hover:text-orange-800 ${path === '/experience' && ' text-orange-800'}`}
          >
            Experience
          </Link>
          <Link
            href="/about-me"
            className={`block py-2 hover:text-orange-800 ${path === '/about-me' && ' text-orange-800'}`}
          >
            About me
          </Link>
        </div>
      </div>
      {menuOpen && (
        <div className="fixed inset-0 z-50 pt-10 bg-white">
          <div className="absolute top-4 right-4">
            <button className="text-2xl text-orange-500" onClick={() => setMenuOpen(false)}>
              <HiX />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center text-lg font-medium text-orange-500">
            <Link href="/experience" className="block py-2 hover:text-orange-800" onClick={() => setMenuOpen(false)}>
              Experience
            </Link>
            <Link href="/projects" className="block py-2 hover:text-orange-800" onClick={() => setMenuOpen(false)}>
              Projects
            </Link>
            <Link href="/about-me" className="block py-2 hover:text-orange-800" onClick={() => setMenuOpen(false)}>
              About me
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
