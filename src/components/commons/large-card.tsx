// import Image from 'next/image';
import React from 'react';
// import web from '../../../public/web-1.png';
const LargeCard = () => {
  return (
    <div className="z-50 flex items-center w-full py-4 bg-yellow-100 rounded-lg shadow-lg opacity-75 cursor-pointer h-41">
      <div className="">{/* <Image src={web} width="250" height="250" /> */}</div>
      <div className="px-2">
        <h1 className="text-lg font-bold">Title</h1>
        <p>easdasdasdasdadasdasdasd</p>
      </div>
    </div>
  );
};

export default LargeCard;
