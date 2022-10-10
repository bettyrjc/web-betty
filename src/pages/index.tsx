import type { NextPage } from 'next';
import Head from 'next/head';
import Doll from '../components/icons/doll';
import { Cards } from '../components/layout/Cards';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';

const Home: NextPage = () => {
  return (
    <div className="bg-yellow-50">
      <Head>
        <title>Betty Jiménez</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="../styles/globalss.css" />
      </Head>
      <div className="w-full h-auto px-16 bg-yellow-50">
        <Header />
        <div className="flex items-center justify-between p-10 h-1/2">
          <div>
            <Doll />
          </div>
          <div className="px-10 ml-10 text-xl text-teal">
            <h1 className="mb-4 text-3xl">Betty Jiménez</h1>
            <p>
              specimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos
              electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las
              hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de
              autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem
              Ipsum;sdjkflkjasdlfksadjkfskdfjsdfsdfsdfsdfsdf
            </p>
          </div>
        </div>
        <Cards />
      </div>
      <Footer />
    </div>
  );
};

export default Home;