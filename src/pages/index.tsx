import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';
import Doll from 'src/assets/icons/doll';
import Layout from 'src/modules/layout/Layout';
import IconPack from 'src/modules/shared/icon-pack';

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

      <div className="w-full h-screen mb-10 lg:px-16 bg-yellow-50">
        <div className="flex flex-col-reverse w-full h-auto px-3 mb-5 lg:px-10 lg:justify-center lg:flex lg:flex-row">
          <div className="flex items-center justify-center w-full lg:w-3/6">
            <div className="z-10 w-full p-6 px-10 font-bold text-center bg-yellow-100 rounded-lg shadow font-roboto mt-18 mr-18">
              <p className="text-xs font-normal text-orange-500 opacity-100 lg:text-xl ">
                Senior Software Engineer specializing in JavaScript, TypeScript, React.js, and React Native. Expertise
                includes crafting intuitive user interfaces and optimized user experiences for web and mobile
                applications. Currently seeking a position as a Software Engineer to leverage my technical skills and
                UX/UI design knowledge to contribute to developing innovative and high-quality products
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
          <IconPack />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
