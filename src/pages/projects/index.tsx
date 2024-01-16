/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react';

import Image from 'next/image';

import { JOBS_ASSISTENSI, JOBS_MERU, JOBS_MICA } from '@components/constanst/positions';
import CSSIcon from '@components/icons/css';
import JSIcon from '@components/icons/js';
import ReactIcon from '@components/icons/react';
import SwiftIcon from '@components/icons/swift';
import Layout from '@components/Layout';

import eagerTimer from '../../../public/images/EagerTimer.png';
import flashChat from '../../../public/images/flashChat.png';
import quiz from '../../../public/images/quiz.png';
import registerFlashChat from '../../../public/images/registerFlashChat.png';

const Projects = () => {
  const [showMica, setShowMica] = React.useState(false);
  const [showMeru, setShowMeru] = React.useState(false);
  const [showAssistensi, setAssitensi] = React.useState(false);
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
        <h1 className="mb-4 text-xl font-bold text-orange-800"> Latest jobs</h1>
        <div className="flex flex-col items-center justify-center lg:flex-row lg:items-start">
          <div className="lg:w-1/2">
            <div className="flex items-center justify-between w-full p-3 duration-500 bg-yellow-100 border border-yellow-500 rounded-md shadow-md md:w-3/4 hover:scale-105 h-14 hover:shadow-xl">
              <h3 className="text-sm font-bold text-orange-500 md:text-md ">
                Mica Leasing Company - UI/UX Designer and Developer
              </h3>
              <button
                className="w-24 p-2 ml-2 text-sm rounded-md cursor-pointer text-teal hover:bg-teal hover:text-white hover:opacity-90"
                onClick={() => {
                  setAssitensi(false);
                  setShowMica(!showMica);
                  setShowMeru(false);
                }}
              >
                Ver más
              </button>
            </div>
            <div className="flex items-center justify-between w-full p-3 my-6 text-sm duration-500 bg-yellow-100 border border-yellow-500 rounded-md shadow-md md:w-3/4 hover:scale-105 h-14 hover:shadow-xl">
              <h3 className="font-bold text-orange-500 text-md md:text-md ">
                Meru Auto-Parts E-Commerce - Frontend Engineer
              </h3>
              <button
                className="w-24 p-2 text-sm rounded-md cursor-pointer text-teal hover:bg-teal hover:text-white hover:opacity-90"
                onClick={() => {
                  setAssitensi(false);
                  setShowMica(false);
                  setShowMeru(!showMeru);
                }}
              >
                Ver más
              </button>
            </div>
            <div className="flex items-center justify-between w-full p-3 my-6 text-sm duration-500 bg-yellow-100 border border-yellow-500 rounded-md shadow-md md:w-3/4 hover:scale-105 h-14 hover:shadow-xl">
              <h3 className="font-bold text-orange-500 text-md md:text-md ">
                Asistensi Insurance Company - Leader Front at EMS | UX/UI Designer in EMS
              </h3>
              <button
                className="w-24 p-2 text-sm rounded-md cursor-pointer text-teal hover:bg-teal hover:text-white hover:opacity-90"
                onClick={() => {
                  setAssitensi(!showAssistensi);
                  setShowMica(false);
                  setShowMeru(false);
                }}
              >
                Ver más
              </button>
            </div>
          </div>
          {showMica &&
            JOBS_MICA.map((job) => {
              return (
                <div
                  className="w-full text-gray-900 transition-all duration-300 ease-in-out transform md:w-3/4 lg:ml-0 lg:w-1/2"
                  key={job.id}
                >
                  <h1 className="text-xl font-bold text-orange-800">{job?.name}</h1>
                  <p className="mt-2 text-gray-600 text-md">{job?.stack}</p>
                  <h4 className="mt-4 text-lg font-medium text-gray-900 ">{job?.description}</h4>
                  <h5 className="my-2 text-lg font-bold">{job?.activities_name}</h5>
                  {job.activities.map((activity) => (
                    <div key={activity.id} className="my-1">
                      <h6 className="mb-1 font-semibold">{activity?.name}</h6>
                      <p className="mb-2 ml-4">{activity?.description}</p>
                    </div>
                  ))}
                </div>
              );
            })}
          {showMeru &&
            JOBS_MERU.map((job) => {
              return (
                <div
                  className="w-full text-gray-900 transition-all duration-300 ease-in-out transform md:w-3/4 lg:ml-0 lg:w-1/2 "
                  key={job.id}
                >
                  <h1 className="text-xl font-bold text-orange-800">{job?.name}</h1>
                  <p className="mt-2 text-gray-600 text-md">{job?.stack}</p>
                  <h4 className="mt-4 text-lg font-medium text-gray-900 ">{job?.description}</h4>
                  <h5 className="my-2 text-lg font-bold">{job?.activities_name}</h5>
                  {job.activities.map((activity) => (
                    <div key={activity.id} className="my-1">
                      <h6 className="mb-1 font-semibold">{activity?.name}</h6>
                      <p className="mb-2 ml-4">{activity?.description}</p>
                    </div>
                  ))}
                </div>
              );
            })}
          {showAssistensi &&
            JOBS_ASSISTENSI.map((job) => {
              return (
                <div
                  className="w-full text-gray-900 transition-all duration-300 ease-in-out transform md:w-3/4 lg:ml-0 lg:w-1/2"
                  key={job.id}
                >
                  <h1 className="text-xl font-bold text-orange-800">{job?.name}</h1>
                  <p className="mt-2 text-gray-600 text-md">{job?.stack}</p>
                  <h4 className="mt-4 text-lg font-medium text-gray-900 ">{job?.description}</h4>
                  <h5 className="my-2 text-lg font-bold">{job?.activities_name}</h5>
                  {job.activities.map((activity) => (
                    <div key={activity.id} className="my-1">
                      <h6 className="mb-1 font-semibold">{activity?.name}</h6>
                      <p className="mb-2 ml-4">{activity?.description}</p>
                    </div>
                  ))}
                </div>
              );
            })}
          {!showMica && !showMeru && !showAssistensi && (
            <div className="flex items-start justify-center w-1/2 icon-container">
              {currentIcon === 1 && <ReactIcon largeSize={true} />}
              {currentIcon === 2 && <JSIcon largeSize />}
              {currentIcon === 3 && <SwiftIcon largeSize={true} />}
              {currentIcon === 4 && <CSSIcon largeSize />}
            </div>
          )}
        </div>
        <h1 className="w-full mb-4 text-xl font-bold text-orange-800 "> Latest project</h1>
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
