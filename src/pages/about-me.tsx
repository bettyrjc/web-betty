/* eslint-disable @next/next/no-img-element */
import React from 'react';

import Layout from 'src/modules/layout/Layout';
const AboutMe = () => {
  return (
    <Layout>
      <div className="flex justify-center w-full p-16">
        <div className="items-start justify-center w-full lg:flex">
          <div className="mr-10 rounded ">
            <div className="relative top-0 bottom-0 left-0 right-0 z-10 bg-yellow-100 rounded-full shadow-md shadow-yellow-500/50">
              <img
                src="/images/doll-pink.png"
                alt="Picture of the author"
                className=" w-[320px] h-[320px] object-contain"
                // objectFit="contain"
              />
            </div>
          </div>
          <div className="w-full h-screen mt-1 lg:w-4/6 text-teal">
            <h1 className="mb-4 text-4xl font-bold">Betty Jiménez</h1>
            <p className="w-full text-xl leading-8 min-h-3">
              Hello! I am a front-end developer with over 5 years of hands-on experience crafting engaging and
              responsive user interfaces. Throughout my journey, I have honed my skills with diverse technologies,
              bringing ideas to life and creating seamless digital experiences. In my projects, I have extensively
              worked with technologies such as JavaScript for frontend using frameworks like React Native, and React.js.
              I use CSS 3 for styles using frameworks like chakraUI and Tailwind for further efficiency. Besides, I am
              knowledgeable in Redux and React queries to manage the global state of the applications. Furthermore, I
              have experience with Figma for making designs. I’m proficient in using typed applications using
              typescript, To make easier to write accurate code more quickly and catch bugs before runtime. Each project
              is a testament to my dedication to staying at the forefront of cutting-edge technologies, ensuring that
              the solutions I deliver are functional but also innovative and user-friendly. I thrive on challenges and
              am always eager to explore new ways to elevate the user experience. I am passionate about connecting and
              exploring the possibilities of bringing customers’ ideas to the digital realm! I am a proactive person and
              look to stay up-to-date with the technologies to be a better professional. I like to bring ideas for
              improving project results and giving users satisfactory customer service. As well I am always forward to
              accountability for achieving the team’s mission or goal.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutMe;
