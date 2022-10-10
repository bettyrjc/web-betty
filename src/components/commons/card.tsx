import Image from 'next/image';
import React from 'react';
import web from '../../../public/web-1.png';

type cardProps = {
  title: string;
  description: string;
};
const Card = ({ title, description }: cardProps) => {
  return (
    <div className="flex w-1/3 py-4 bg-yellow-100 rounded-lg shadow-md cursor-pointer hover:animate-bounce">
      <div className="flex items-start justify-center h-auto mr-2 w-50">
        <Image src={web} width="200" height="200" />
      </div>
      <div className="px-2">
        <h1 className="text-lg font-bold">{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};
export default Card;
