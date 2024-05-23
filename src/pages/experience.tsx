/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react';

import { JOBS_ASSISTENSI, JOBS_MERU, JOBS_MICA } from '@components/constanst/positions';
import CSSIcon from '@components/icons/css';
import JSIcon from '@components/icons/js';
import ReactIcon from '@components/icons/react';
import SwiftIcon from '@components/icons/swift';
import Layout from '@components/Layout';

const Experience = () => {
  const [showMica, setShowMica] = React.useState(false);
  const [showMeru, setShowMeru] = React.useState(false);
  const [showAssistensi, setAssitensi] = React.useState(false);
  const [currentIcon, setCurrentIcon] = React.useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIcon((prevIcon) => (prevIcon < 4 ? prevIcon + 1 : 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      <div className="relative w-full min-h-screen px-4 mt-10 mb-10 transition-all duration-500 lg:px-16 bg-yellow-50">
        <h1 className="mb-4 text-xl font-bold text-orange-800"> Latest jobs</h1>
        <div className="flex flex-col items-center justify-center lg:flex-row lg:items-start">
          <div className="lg:w-1/2">
            <div className="flex items-center justify-between w-full p-3 duration-500 bg-yellow-100 border border-yellow-500 rounded-md shadow-md md:w-3/4 hover:scale-105 h-14 hover:shadow-xl">
              <h3 className="text-sm font-bold text-orange-500 md:text-md ">
                Frontend Developer | UI/UX Designer - Mica Leasing Company -
              </h3>
              <button
                className="w-24 p-2 ml-2 text-sm rounded-md cursor-pointer text-teal hover:bg-teal hover:text-white hover:opacity-90"
                onClick={() => {
                  setAssitensi(false);
                  setShowMica(!showMica);
                  setShowMeru(false);
                }}
              >
                Ver más
              </button>
            </div>
            <div className="flex items-center justify-between w-full p-3 my-6 text-sm duration-500 bg-yellow-100 border border-yellow-500 rounded-md shadow-md md:w-3/4 hover:scale-105 h-14 hover:shadow-xl">
              <h3 className="font-bold text-orange-500 text-md md:text-md ">
                Frontend Engineer - Meru Auto-Parts E-Commerce
              </h3>
              <button
                className="w-24 p-2 text-sm rounded-md cursor-pointer text-teal hover:bg-teal hover:text-white hover:opacity-90"
                onClick={() => {
                  setAssitensi(false);
                  setShowMica(false);
                  setShowMeru(!showMeru);
                }}
              >
                Ver más
              </button>
            </div>
            <div className="flex items-center justify-between w-full p-3 my-6 text-sm duration-500 bg-yellow-100 border border-yellow-500 rounded-md shadow-md md:w-3/4 hover:scale-105 h-14 hover:shadow-xl">
              <h3 className="font-bold text-orange-500 text-md md:text-md ">
                Front lead at EMS | UX/UI Designer in EMS - Asistensi Insurance Company
              </h3>
              <button
                className="w-24 p-2 text-sm rounded-md cursor-pointer text-teal hover:bg-teal hover:text-white hover:opacity-90"
                onClick={() => {
                  setAssitensi(!showAssistensi);
                  setShowMica(false);
                  setShowMeru(false);
                }}
              >
                Ver más
              </button>
            </div>
          </div>
          {showMica &&
            JOBS_MICA.map((job) => {
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
          {showMeru &&
            JOBS_MERU.map((job) => {
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
          {showAssistensi &&
            JOBS_ASSISTENSI.map((job) => {
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
          {!showMica && !showMeru && !showAssistensi && (
            <div className="flex items-start justify-center w-1/2 icon-container">
              {currentIcon === 1 && <ReactIcon largeSize={true} />}
              {currentIcon === 2 && <JSIcon largeSize />}
              {currentIcon === 3 && <SwiftIcon largeSize={true} />}
              {currentIcon === 4 && <CSSIcon largeSize />}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Experience;
