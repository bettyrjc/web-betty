import React from 'react';
import { FiGithub } from 'react-icons/fi';
import { HiOutlineGlobeAlt } from 'react-icons/hi';
import { ImNpm } from 'react-icons/im';

const LinkToOtherpage = ({ link, children }: { link: string; children: React.ReactNode }) => {
  return (
    <a
      target="_blank"
      href={link}
      rel="noopener noreferrer"
      className="flex items-center gap-1 mb-2 ml-2 text-orange-500 cursor-pointer hover:border-b-teal hover:text-teal"
    >
      {children}
    </a>
  );
};
const ProjectCard = ({
  title,
  description,
  tecnologies,
  features,
  link,
  web,
  npm,
}: {
  title: string;
  description: string;
  link: string;
  features: string[];
  tecnologies: { name: string; stack: string }[];
  web?: string;
  npm?: string;
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
          <div className="flex gap-2 my-1 ">
            <LinkToOtherpage link={link}>
              <FiGithub className="text-md" />
              <h6 className="font-bold cursor-pointer hover:text-teal">See repository</h6>
            </LinkToOtherpage>
          </div>
          {web && (
            <div className="flex gap-2 my-1 mt-3 ">
              <LinkToOtherpage link={web}>
                <HiOutlineGlobeAlt className=" text-md" />
                <h6 className="font-bold cursor-pointer hover:text-teal">website</h6>
              </LinkToOtherpage>
            </div>
          )}
          {npm && (
            <div className="flex gap-2 my-1 mt-3 ">
              <LinkToOtherpage link={npm}>
                <ImNpm className=" text-md" />
                <h6 className="font-bold cursor-pointer hover:text-teal">npm package</h6>
              </LinkToOtherpage>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
