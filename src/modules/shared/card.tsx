import React from 'react';

// import Image from 'next/image';

// import web from '../../../public/web-1.png';
import Daisy from '../../assets/icons/daisy';

type cardProps = {
  title: string;
  description: string;
};
const Card = ({ title, description }: cardProps) => {
  return (
    <div className="relative right-0 w-full">
      <div className="flex items-center justify-center w-full">
        <Daisy />
      </div>
      <div className="absolute z-20 w-full inset-y-1/2">
        <div className="flex items-center justify-center h-full">
          <div className="z-50 flex items-center w-2/3 py-4 bg-yellow-100 rounded-lg shadow-lg opacity-75 cursor-pointer h-21">
            <div className="flex items-start justify-center h-auto mr-2 w-50 ">
              {/* <Image src={web} width="200" height="200" /> */}
            </div>
            <div className="px-2">
              <h1 className="text-lg font-bold">{title}</h1>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
