import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import CSSIcon from '@components/icons/css';
import Doll from '@components/icons/doll';
import JSIcon from '@components/icons/js';
import NodeIcon from '@components/icons/node';
import ReactIcon from '@components/icons/react';
import SwiftIcon from '@components/icons/swift';
import TyIcon from '@components/icons/TyIcon';
import Layout from '@components/Layout';
// import { Cards } from '@components/layout/Cards';

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Frontend Developer - Betty Jiménez</title>
        <meta
          name="description"
          content="Experienced frontend developer specializing in React.js. Explore my portfolio showcasing projects and achievements in web development."
        />
        <link rel="icon" href="/images/icon.png" />
      </Head>

      <div className="w-full h-screen mb-10 lg:px-16 bg-yellow-50">
        <div className="flex flex-col-reverse w-full h-auto px-3 mb-5 lg:px-10 lg:justify-center lg:flex lg:flex-row">
          <div className="flex items-center justify-center w-full lg:w-3/6">
            <div className="z-10 w-full p-6 px-10 font-bold text-center bg-yellow-100 rounded-lg shadow font-roboto mt-18 mr-18">
              <p className="text-xs font-normal text-orange-500 opacity-100 lg:text-xl ">
                I consider I am proactive and I always look to stay up-to-date with the technologies to be a better
                professional. I&apos;ll embrace change positively, be a great role model, and take ownership of my
                ongoing development. I like to bring ideas for improving project results and giving users satisfactory
                customer service as I consider being commercially-driven is so important. I am also always forward to
                accountability for achieving the team’s mission or goal. I’m team-oriented, as I work closely with other
                people and fit seamlessly into a team. Since I’m a result-oriented person, I’m always focused on
                achieving great things in my work.
              </p>
              <button className="px-4 py-2 mt-4 text-white rounded-lg bg-teal hover:bg-yellow-500">
                <Link href="/projects">See projects</Link>
              </button>
            </div>
          </div>
          <div className="mb-2 lg:mb-0">
            <Doll />
            <div
              // className="flex items-center justify-center w-full bg-yellow-100 rounded-lg shadow-lg opacity-75 lg:p-2 lg:gap-5 "
              style={{
                width: '590px',
              }}
            ></div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full">
          <div className="flex items-center justify-center w-1/3 lg:p-2 lg:gap-5 ">
            <ReactIcon className="animate-icon-up" />
            <TyIcon className="animate-icon-down" />
            <JSIcon className="animate-icon-up" />
            <NodeIcon className="animate-icon-down" />
            <SwiftIcon className="animate-icon-up" />
            <CSSIcon className="animate-icon-down" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
