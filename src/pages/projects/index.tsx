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
