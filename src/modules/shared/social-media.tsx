import React from 'react';
import { ImGithub, ImLinkedin } from 'react-icons/im';

import Link from 'next/link';
const SocialMedia = () => {
  return (
    <div className="z-30 flex flex-col items-center justify-end w-16 gap-4 p-4 bg-yellow-100 border rounded-md shadow-xl ">
      <Link href="https://github.com/bettyrjc" target="_blank" className="text-orange-500">
        <ImGithub className="text-4xl text-orange-800" />
      </Link>
      <Link href="https://www.linkedin.com/in/bettyrjc/" target="_blank" className="text-orange-500">
        <ImLinkedin className="text-4xl text-orange-800" />
      </Link>
    </div>
  );
};

export default SocialMedia;
