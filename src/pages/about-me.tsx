import Image from 'next/image';
import React from 'react';
import Layout from '@components/Layout';
import me from '../../public/images/betty.jpg';
import WavePhot from '@components/icons/wave-three';
const AboutMe = () => {
  const styles = {
    borderRadius: '1000px',
  };
  return (
    <Layout>
      <div className="flex justify-center w-full p-16">
        <div className="flex items-center justify-center">
          <div className="relative mr-40 rounded">
            <div className="relative z-10 rounded-full">
              <Image
                src={me}
                alt="Picture of the author"
                width={300}
                height={400}
                object-fit="contain"
                style={styles}
              />
            </div>
            <div className="absolute -top-20 -left-20">
              <WavePhot />
            </div>
          </div>
          <div className="text-teal">
            <h1 className="mb-4 text-4xl font-bold">Betty Jiménez</h1>
            <p className="text-lg w-96">
              Hola, soy Betty Jiménez <span className="font-bold">Frontend Engineer</span>, una persona llena de pasión
              tanto en la tecnología y de no parar de aprender. Siempre que está a mi disposición, me gusta ayudar a las
              personas y ver cómo un pequeño empujón era el impulso que necesitaban para lograrlo.
            </p>
            <p className="mt-2 text-lg w-96">
              Como Frontend developer, manejo tecnologías como: React, Redux, React query, React hooks, Tailwind, CSS3,
              Styles Components, test end to end y algo de Vue…
            </p>
            <p className="mt-2 text-lg w-96">
              También se mobile en React native y un poco de flutter y actualmente estoy aprendiendo swift.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutMe;
