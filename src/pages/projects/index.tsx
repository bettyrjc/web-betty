/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react';
import { FiGithub } from 'react-icons/fi';

import Image from 'next/image';
import Link from 'next/link';

import { BACKEND_PROJECTS, FULL_STACK_PROJECTS } from '@components/constanst/projects';
import Layout from '@components/Layout';

import eagerTimer from '../../../public/images/EagerTimer.png';
import flashChat from '../../../public/images/flashChat.png';
import quiz from '../../../public/images/quiz.png';
import registerFlashChat from '../../../public/images/registerFlashChat.png';

const Card = ({
  title,
  description,
  tecnologies,
  features,
  link,
  index,
}: {
  title: string;
  description: string;
  link: string;
  index: number;
  features: string[];
  tecnologies: { name: string; stack: string }[];
}) => {
  return (
    <div
      className="w-full p-4 mb-6 text-gray-900 transition-all duration-300 ease-in-out transform bg-yellow-100 border border-yellow-100 rounded-lg shadow-sm hover:shadow-xl"
      key={index}
    >
      <h1 className="text-lg font-bold text-orange-500">{title}</h1>
      <p className="mt-2 text-gray-600 text-md">{description}</p>
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
      <div key={index} className="flex gap-2 my-1">
        <Link className="mb-2" href={link} target="_blank">
          <div className="flex gap-3 ml-2 border-b items-align border-b-orange-500">
            <FiGithub className="text-orange-500 text-md" />
            <h6 className="font-bold text-orange-500">Repositorio</h6>
          </div>
        </Link>
      </div>
    </div>
  );
};
const Projects = () => {
  const [currentIcon, setCurrentIcon] = React.useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIcon((prevIcon) => (prevIcon < 4 ? prevIcon + 1 : 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      <div className="relative w-full min-h-screen px-4 mt-10 mb-10 transition-all duration-500 lg:px-16 bg-yellow-50">
        {FULL_STACK_PROJECTS.map((job, index) => {
          return (
            <Card
              key={index}
              title={job.title}
              description={job.description}
              tecnologies={job.tecnologies}
              features={job.features}
              link={job.link}
              index={index}
            />
          );
        })}
        <div>
          <h2 className="my-4 text-xl font-bold text-orange-800">Backend projects</h2>
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
            {BACKEND_PROJECTS.map((job, index) => {
              return (
                <Card
                  key={index}
                  title={job.title}
                  description={job.description}
                  tecnologies={job.tecnologies}
                  features={job.features}
                  link={job.link}
                  index={index}
                />
              );
            })}
          </div>
        </div>

        <h1 className="w-full mb-4 text-xl font-bold text-orange-800 "> Swift projects</h1>
        <div className="flex-row-reverse items-center justify-between block w-full mb-10 lg:flex">
          <div className="w-full lg:ml-10 text-teal">
            <p className="w-full md:w-1/2 gray-800">
              In my recent Swift and SwiftUI projects, I undertook a diverse set of tasks, including the implementation
              of a Firebase chat feature and a timer functionality with associated animations. I delved into component
              separation for enhanced code organization, and I installed external packages to extend project
              capabilities.
            </p>
            <p className="w-full mt-2 md:w-1/2 gray-800">
              Throughout my iOS development journey, I utilized a variety of resources, such as courses, templates, and
              guides. In terms of practical applications, I explored Xcode, Interface Builder, and their shortcuts,
              creating projects like the "7 Minute Workout App", "I Am Rich", and more. My Swift programming basics
              covered collections, constants, and variables, with completed projects like "Dicee" and "Magic 8 Ball".
            </p>
            <p className="w-full mt-2 md:w-1/2 gray-800 ">
              Auto Layout and responsive UI design were emphasized, evident in projects like the calculator layout
              challenge. Additionally, I delved into advanced Swift concepts, iOS app design patterns, and networking,
              including projects like "Quizzler", "Destini", "BMI", "Clima", and "ByteCoin". Furthermore, I integrated
              Firebase Cloud Firestore for real-time data storage, utilized Cocoapods for dependency management, and
              completed the "FlashChat" project. Exploring command line usage and terminal shortcuts, as well as
              embracing SwiftUI for declarative UI development, culminated in the completion of the "I am Rich" SwiftUI
              project. This comprehensive journey has equipped me with a diverse skill set in iOS development.
            </p>
          </div>
          <div className="'w-full">
            {currentIcon === 1 && <Image src={quiz} alt="flashchat" width={375} height={800} />}
            {currentIcon === 2 && <Image src={eagerTimer} alt="flashchat" width={375} height={800} />}
            {currentIcon === 3 && <Image src={flashChat} alt="flashchat" width={375} height={800} />}
            {currentIcon === 4 && <Image src={registerFlashChat} alt="flashchat" width={375} height={800} />}
          </div>
        </div>
        {/* https://bettyrjc.github.io/instagram-copy/ 
        https://bettyrjc.github.io/copia_outlook/
        */}
      </div>
    </Layout>
  );
};

export default Projects;
