/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react';

import { JOBS_ASSISTENSI, JOBS_MERU, JOBS_MICA } from '@components/constanst/positions';
import CSSIcon from '@components/icons/css';
import JSIcon from '@components/icons/js';
import ReactIcon from '@components/icons/react';
import SwiftIcon from '@components/icons/swift';
import Layout from '@components/Layout';

const Icons = ({ currentIcon }) => {
  return (
    <>
      {currentIcon === 1 && <ReactIcon largeSize={true} />}
      {currentIcon === 2 && <JSIcon largeSize />}
      {currentIcon === 3 && <SwiftIcon largeSize={true} />}
      {currentIcon === 4 && <CSSIcon largeSize />}
    </>
  );
};
const Experience = () => {
  const [currentIcon, setCurrentIcon] = React.useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIcon((prevIcon) => (prevIcon < 4 ? prevIcon + 1 : 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      <div className="relative w-full px-4 mt-10 mb-10 transition-all duration-500 lg:px-4">
        <div className="flex items-center justify-around gap-10 pb-4 border-b-2 border-b-yellow-500">
          {JOBS_MICA.map((job) => {
            return (
              <div
                className="w-full text-gray-900 transition-all duration-300 ease-in-out transform md:w-3/4 lg:ml-0 lg:w-1/2"
                key={job.id}
              >
                <h1 className="text-xl font-bold text-orange-800">{job?.name}</h1>
                <p className="mt-2 text-gray-600 text-md">{job?.stack}</p>
                <h4 className="mt-4 text-lg font-medium text-gray-900 ">{job?.description}</h4>
                <h5 className="my-2 text-lg font-bold">{job?.activities_name}</h5>
                {job.activities.map((activity) => (
                  <div key={activity.id} className="my-1">
                    <h6 className="mb-1 font-semibold">{activity?.name}</h6>
                    <p className="mb-2 ml-4">{activity?.description}</p>
                  </div>
                ))}
              </div>
            );
          })}
          <div className="hidden lg:flex">
            <Icons currentIcon={currentIcon} />
          </div>
        </div>
        <div className="flex items-center justify-around pt-4 pb-4 border-b-2 border-b-yellow-500">
          <div className="hidden lg:flex">
            <Icons currentIcon={currentIcon} />
          </div>

          {JOBS_MERU.map((job) => {
            return (
              <div
                className="w-full text-gray-900 transition-all duration-300 ease-in-out transform md:w-3/4 lg:ml-0 lg:w-1/2 "
                key={job.id}
              >
                <h1 className="text-xl font-bold text-orange-800">{job?.name}</h1>
                <p className="mt-2 text-gray-600 text-md">{job?.stack}</p>
                <h4 className="mt-4 text-lg font-medium text-gray-900 ">{job?.description}</h4>
                <h5 className="my-2 text-lg font-bold">{job?.activities_name}</h5>
                {job.activities.map((activity) => (
                  <div key={activity.id} className="my-1">
                    <h6 className="mb-1 font-semibold">{activity?.name}</h6>
                    <p className="mb-2 ml-4">{activity?.description}</p>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-around pt-4">
          {JOBS_ASSISTENSI.map((job) => {
            return (
              <div
                className="w-full text-gray-900 transition-all duration-300 ease-in-out transform md:w-3/4 lg:ml-0 lg:w-1/2"
                key={job.id}
              >
                <h1 className="text-xl font-bold text-orange-800">{job?.name}</h1>
                <p className="mt-2 text-gray-600 text-md">{job?.stack}</p>
                <h4 className="mt-4 text-lg font-medium text-gray-900 ">{job?.description}</h4>
                <h5 className="my-2 text-lg font-bold">{job?.activities_name}</h5>
                {job.activities.map((activity) => (
                  <div key={activity.id} className="my-1">
                    <h6 className="mb-1 font-semibold">{activity?.name}</h6>
                    <p className="mb-2 ml-4">{activity?.description}</p>
                  </div>
                ))}
              </div>
            );
          })}
          <div className="hidden lg:flex">
            <Icons currentIcon={currentIcon} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Experience;
