import type { NextPage } from 'next';
import Head from 'next/head';

import CSSIcon from '@components/icons/css';
import Doll from '@components/icons/doll';
import JSIcon from '@components/icons/js';
import ReactIcon from '@components/icons/react';
import SwiftIcon from '@components/icons/swift';
import Layout from '@components/Layout';
// import { Cards } from '@components/layout/Cards';

const Home: NextPage = () => {
  return (
    <div className="bg-yellow-50">
      <Head>
        <title>Frontend Developer - Betty Jiménez</title>
        <meta
          name="description"
          content="Experienced frontend developer specializing in React.js. Explore my portfolio showcasing projects and achievements in web development."
        />
        <link rel="icon" href="/images/icon.png" />
      </Head>
      <Layout>
        <div className="w-full mb-10 lg:px-16 bg-yellow-50">
          <div className="flex flex-col-reverse w-full h-auto px-3 mb-40 lg:px-10 lg:justify-center lg:flex lg:flex-row">
            <div className="flex items-center justify-center w-full lg:w-1/6">
              <div className="z-10 w-full p-4 font-bold text-center bg-yellow-500 rounded-lg shadow font-roboto mt-18 mr-18">
                <p className="text-sm text-orange-500 opacity-100 lg:text-xl ">Betty Jiménez Frontend Engineer 👩🏻‍💻</p>
              </div>
            </div>
            <div className="mb-2 lg:mb-0">
              <Doll />
              <div className="flex items-center justify-center w-full bg-yellow-100 rounded-lg shadow-lg opacity-75 lg:p-2 lg:gap-5 ">
                <ReactIcon />
                <JSIcon />
                <SwiftIcon />
                <CSSIcon />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Home;
