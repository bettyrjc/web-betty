import React from 'react';
import { FiGithub } from 'react-icons/fi';
import { HiOutlineGlobeAlt } from 'react-icons/hi';

import Link from 'next/link';

const ProjectCard = ({
  title,
  description,
  tecnologies,
  features,
  link,
  index,
  web,
}: {
  title: string;
  description: string;
  link: string;
  index: number;
  features: string[];
  tecnologies: { name: string; stack: string }[];
  web?: string;
}) => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-2">
        <div className="w-full p-4 mb-6 text-gray-900 transition-all duration-300 ease-in-out transform bg-yellow-100 border border-yellow-100 rounded-lg shadow-sm ">
          <h1 className="text-lg font-bold text-orange-500">{title}</h1>
          <p className="mt-2 text-md">{description}</p>
          <h6 className="my-2 font-semibold text-orange-500">Tecnologies</h6>

          {tecnologies.map((activity, index) => (
            <div key={index} className="flex gap-2 my-1 ml-4">
              <h6 className="mb-1 text-orange-500">{activity?.name}</h6>
              <p className="mb-2">{activity?.stack}</p>
            </div>
          ))}
          <h6 className="my-2 font-semibold text-orange-500">Features</h6>

          {features.map((feature, index) => (
            <div key={index} className="flex gap-2 my-1 ml-4">
              <p className="mb-2">- {feature}</p>
            </div>
          ))}
          <div key={index} className="flex gap-2 my-1 ">
            <Link className="mb-2 " href={link} target="_blank">
              <div className="flex gap-3 ml-2 text-orange-500 border-b cursor-pointer items-align border-b-orange-500 hover:border-b-teal hover:text-teal">
                <FiGithub className=" text-md" />
                <h6 className="font-bold cursor-pointer hover:text-teal">See repository</h6>
              </div>
            </Link>
          </div>
          {web && (
            <div key={index} className="flex gap-2 my-1 mt-3 ">
              <Link className="mb-2 " href={web} target="_blank">
                <div className="flex gap-3 ml-2 text-orange-500 border-b cursor-pointer items-align border-b-orange-500 hover:border-b-teal hover:text-teal">
                  <HiOutlineGlobeAlt className=" text-md" />
                  <h6 className="font-bold cursor-pointer hover:text-teal">website</h6>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
