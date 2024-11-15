/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';
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

      <div className="w-full h-screen mb-10 bg-yellow-50">
        <div className="flex flex-col-reverse items-center w-full h-auto px-3 mb-5 lg:px-10 lg:justify-center lg:flex-row">
          <div className="absolute flex items-center justify-center w-full md:relative lg:mt-24 lg:w-1/2">
            <div className="z-10 flex flex-col items-center w-full px-3 py-3 font-bold bg-yellow-100 rounded-lg shadow-md md:p-6 md:px-10 font-roboto md:mt-18 md:mr-18">
              <p className="text-xs font-normal text-center text-orange-500 opacity-100 lg:text-base ">
                Senior Software Engineer specializing in JavaScript, TypeScript, React.js, and React Native. Expertise
                includes crafting intuitive user interfaces and optimized user experiences for web and mobile
                applications.
              </p>
              <div className="px-2 mt-2 text-xs text-center transition-all border rounded-full xl:text-lg md:px-3 md:py-2 md:mt-4 w-28 xl:w-40 border-teal text-teal hover:bg-teal hover:text-white">
                <Link href="/projects">Go to projects</Link>
              </div>
            </div>
          </div>
          <div className="relative flex items-center justify-between">
            <img src="/images/doll.png" alt="Picture of the author" className="w-[500px] h-[500px] object-contain" />
          </div>
        </div>
        <div className="flex items-center justify-center w-full drop-shadow-2xl">
          <IconPack />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
