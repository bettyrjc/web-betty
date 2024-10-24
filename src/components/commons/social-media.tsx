import React from 'react';
import { ImGithub, ImLinkedin } from 'react-icons/im';

import Link from 'next/link';
const SocialMedia = () => {
  return (
    <div className="z-30 flex flex-col items-center justify-end w-16 gap-4 p-4 bg-yellow-100 border rounded-md shadow-xl ">
      <Link href="https://github.com/bettyrjc">
        <a className="text-orange-800">
          <ImGithub className="text-4xl" />
        </a>
      </Link>
      <Link href="https://www.linkedin.com/in/bettyrjc/">
        <a className="text-orange-800">
          <ImLinkedin className="text-4xl" />
        </a>
      </Link>
    </div>
  );
};

export default SocialMedia;
