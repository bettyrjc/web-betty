import type { NextPage } from 'next';
import Head from 'next/head';
import Doll from '@components/icons/doll';
import { Cards } from '@components/layout/Cards';
import SocialMedia from '@components/commons/social-media';
import Layout from '@components/Layout';
import CSSIcon from '@components/icons/css';
import JSIcon from '@components/icons/js';
import ReactIcon from '@components/icons/react';
import SwiftIcon from '@components/icons/swift';

const Home: NextPage = () => {
  return (
    <div className="bg-yellow-50">
      <Head>
        <title>Betty Jiménez</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="w-full px-16 mb-10 bg-yellow-50">
          <div className="block w-full h-auto px-10 mb-40 lg:justify-center lg:flex">
            <div className="flex items-center justify-center w-1/6 -m-20 ">
              <div className="z-10 p-4 font-bold text-center bg-yellow-500 rounded-lg shadow font-roboto mt-18 ">
                <p className="text-xl text-orange-500 opacity-100 ">Betty Jiménez Frontend Engineer 👩🏻‍💻</p>
              </div>
            </div>
            <div className="">
              <Doll />
              <div className="flex items-center justify-center gap-5 p-2 bg-yellow-100 rounded-lg shadow-lg opacity-75 ">
                <ReactIcon />
                <JSIcon />
                <SwiftIcon />
                <CSSIcon />
              </div>
            </div>
          </div>
        </div>
        {/* <Cards /> */}

        <div className="z-50 flex items-center justify-end w-full ">
          <SocialMedia />
        </div>
      </Layout>
    </div>
  );
};

export default Home;
