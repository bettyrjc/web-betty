import Link from 'next/link';
import React from 'react';
import { ImGithub, ImTwitter, ImMug } from 'react-icons/im';
const SocialMedia = () => {
  return (
    <div className="z-30 flex flex-col items-center justify-end w-16 gap-4 p-4 bg-yellow-100 border rounded-md shadow-xl ">
      <Link href="https://github.com/bettyrjc">
        <a className="text-orange-500">
          <ImGithub className="text-4xl" />
        </a>
      </Link>
      <Link href="https://twitter.com/betjce">
        <a className="text-orange-500">
          <ImTwitter className="text-4xl" />
        </a>
      </Link>

      <Link href="https://www.buymeacoffee.com/bettyrjc">
        <a className="text-orange-500">
          <ImMug className="text-4xl" />
        </a>
      </Link>
    </div>
  );
};

export default SocialMedia;
