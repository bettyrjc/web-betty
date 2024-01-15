import React from 'react';

// import Image from 'next/image';

import Image from 'next/image';

import WavePhot from '@components/icons/wave-three';
import Layout from '@components/Layout';

import me from '../../public/images/betty.jpeg';
const AboutMe = () => {
  return (
    <Layout>
      <div className="flex justify-center w-full p-16">
        <div className="flex items-start justify-center w-full">
          <div className="relative mr-40 rounded">
            <div className="relative bottom-0 left-0 right-0 z-10 rounded-full top-20">
              <Image
                src={me}
                alt="Picture of the author"
                width={300}
                height={300}
                className="rounded-full"
                object-fit="contain"
              />
            </div>
            <div className="absolute top-0 right-0 w-full -left-14">
              <WavePhot />
            </div>
          </div>
          <div className=" text-teal">
            <h1 className="mb-4 text-4xl font-bold">Betty Jiménez</h1>
            <p className="text-lg leading-8 w-96 min-h-3">
              Hello! I am a passionate front-end developer with over 4 years of hands-on experience in crafting engaging
              and responsive user interfaces. Throughout my journey, I have honed my skills with a diverse set of
              technologies, bringing ideas to life and creating seamless digital experiences. In my projects, I have
              extensively worked with technologies such as{' '}
              <span className="my-2 font-bold">
                React Native, React.js, Swift, CSS, HTML, JavaScript, Docker, TypeScript, Firebase, GitHub Actions,
                Tailwind CSS, Chakra UI, Redux, React Queries, Figma, and more.{' '}
              </span>{' '}
              Each project is a testament to my dedication to staying at the forefront of cutting-edge technologies,
              ensuring that the solutions I deliver are not just functional but also innovative and user-friendly. I
              thrive on challenges and am always eager to explore new ways to elevate the user experience. Let us
              connect and explore the possibilities of bringing your ideas to the digital realm!
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutMe;
