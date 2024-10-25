import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import Doll from 'src/assets/icons/doll';
import Layout from 'src/modules/layout/Layout';
import IconPack from 'src/modules/shared/icon-pack';

import me from '../../public/images/doll.png';
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
      <Script
        defer
        data-domain="betjimenez.com"
        src="https://plausible.io/js/script.hash.outbound-links.pageview-props.tagged-events.js"
        strategy="afterInteractive"
      />
      <Script
        id="plausible-setup"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
              window.plausible = window.plausible || function() {
                (window.plausible.q = window.plausible.q || []).push(arguments)
              }
            `,
        }}
      />

      <div className="w-full h-screen px-2 mb-10 lg:px-16 bg-yellow-50">
        <div className="flex flex-col-reverse items-center w-full h-auto px-3 mb-5 lg:px-10 lg:justify-center lg:flex-row">
          <div className="flex items-center justify-center w-full lg:mt-24 lg:w-1/2">
            <div className="z-10 w-full p-2 font-bold text-center bg-yellow-100 rounded-lg shadow md:p-6 md:px-10 font-roboto md:mt-18 md:mr-18">
              <p className="text-xs font-normal text-orange-500 opacity-100 lg:text-lg ">
                Senior Software Engineer specializing in JavaScript, TypeScript, React.js, and React Native. Expertise
                includes crafting intuitive user interfaces and optimized user experiences for web and mobile
                applications.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <Image src={me} alt="Picture of the author" width={500} height={500} object-fit="contain" />
          </div>
        </div>
        <div className="flex items-center justify-center w-full">
          <IconPack />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
