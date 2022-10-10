import React, { useState } from 'react';
import Link from 'next/link';
import Logo from '../icons/logo';
import { HiOutlineMoon, HiMoon } from 'react-icons/hi';
const Header = () => {
  const [dark, setDark] = useState(false);
  return (
    <div className="flex items-center justify-between p-4 bg-yellow-50">
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <button onClick={() => setDark(!dark)}>
        {dark ? (
          <HiMoon className="text-3xl text-orange-500" />
        ) : (
          <HiOutlineMoon className="text-3xl text-orange-500" />
        )}
      </button>
      <div className="flex items-center justify-between gap-3 text-lg font-medium text-orange-500">
        <p>Blog</p>
        <p>About me</p>
        <p>Contact</p>
        <div className="px-3 py-2 bg-yellow-500 rounded-md cursor-pointer">🇺🇸 English</div>
      </div>
    </div>
  );
};

export default Header;
