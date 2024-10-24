import React from 'react';

import Logo from '../../assets/icons/logo';
// import WaveOne from '../icons/wave-one';
// import WaveTwo from '../icons/wave-two';

const Footer = () => {
  return (
    <>
      <div className="flex items-center justify-around py-4 m-0 border-t bg-yellow-50 between border-t-gray-100">
        <div className="hidden md:block">
          <Logo />
        </div>
        <p className="text-orange-500"> 2024 Betty jimenez - Frontend Developer</p>
        <p></p>
      </div>
    </>
  );
};

export default Footer;
