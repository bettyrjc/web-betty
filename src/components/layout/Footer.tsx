import React from 'react';
import Logo from '../icons/logo';
import WaveOne from '../icons/wave-one';
import WaveTwo from '../icons/wave-two';

const Footer = () => {
  return (
    <>
      <div className="relative w-full ">
        <div className="motion-safe:animate-wiggle">
          <WaveOne />
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-100">
          <WaveTwo />
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-around py-4 between ">
          <Logo />
          <p className="text-orange-500">© 2022 Betty jimenez All rights reserved.</p>
          <p></p>
        </div>
      </div>
    </>
  );
};

export default Footer;
