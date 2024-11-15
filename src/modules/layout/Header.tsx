import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

import Link from 'next/link';
import { useRouter } from 'next/router';

import Logo from '../../assets/icons/logo';

type NavLinkProps = {
  path: string;
  name: string;
  url: string;
  onClick?: () => void;
};
const NavLink = ({ path, name, url, onClick }: NavLinkProps) => {
  return (
    <Link href={url} onClick={onClick}>
      <p
        className={`block  py-2 px-3 cursor-pointer hover:text-orange-800 ${path === url && '  text-orange-800 border-b-4 border-b-orange-800'}`}
      >
        {name}
      </p>
    </Link>
  );
};
const Header = () => {
  // const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const router = useRouter();
  const path = router.pathname;
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div className="flex items-center justify-between h-full p-4 bg-yellow-50">
        <Link href="/" className="w-full cursor-pointer">
          <div className=" w-[160px] cursor-pointer ">
            <Logo />
          </div>
        </Link>
        <button className="text-3xl text-orange-500 md:bg-transparent lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <HiMenu />
        </button>
        <div className="items-center justify-end hidden w-1/2 gap-4 text-lg font-medium text-orange-500 lg:flex">
          <NavLink path={path} name="Projects" url="/projects" />
          <NavLink path={path} name="Experience" url="/experience" />
          <NavLink path={path} name="About me" url="/about-me" />
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
            <NavLink path={path} name="Projects" url="/projects" onClick={closeMenu} />
            <NavLink path={path} name="Experience" url="/experience" onClick={closeMenu} />
            <NavLink path={path} name="About me" url="/about-me" onClick={closeMenu} />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
