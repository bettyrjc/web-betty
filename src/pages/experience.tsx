/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import SeeChallenges from 'src/modules/experience/SeeChallenges';

import IconPack from '@components/commons/IconPack';
import { JOBS_ASSISTENSI, JOBS_MERU, JOBS_MICA } from '@components/constanst/positions';
import Doll from '@components/icons/doll';
import Layout from '@components/Layout';

const Experience = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center w-full gap-4 px-4 mt-10 mb-10 lg:items-start lg:justify-start lg:px-4 lg:flex-row">
        <div className="flex flex-col items-center w-2/3">
          <div className="w-[450px]">
            <Doll />
          </div>

          <IconPack />
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-10 pb-4 border-b-2 lg:justify-start lg:items-start">
          {JOBS_MICA.map((job) => {
            return (
              <div
                className="w-full px-10 py-4 text-gray-900 transition-all duration-300 ease-in-out transform bg-yellow-100 rounded-lg md:w-3/4 lg:ml-0 lg:w-full"
                key={job.id}
              >
                <h1 className="text-xl font-bold text-orange-800">{job?.name}</h1>
                <p className="mt-2 text-gray-600 text-md">{job?.stack}</p>
                <h4 className="mt-4 text-lg font-medium text-gray-900 ">{job?.description}</h4>
                <SeeChallenges job={job} />
              </div>
            );
          })}

          {JOBS_MERU.map((job) => {
            return (
              <div
                className="w-full px-10 py-4 text-gray-900 transition-all duration-300 ease-in-out transform bg-yellow-100 rounded-lg md:w-3/4 lg:ml-0 lg:w-full"
                key={job.id}
              >
                <h1 className="text-xl font-bold text-orange-800">{job?.name}</h1>
                <p className="mt-2 text-gray-600 text-md">{job?.stack}</p>
                <h4 className="mt-4 text-lg font-medium text-gray-900 ">{job?.description}</h4>
                <SeeChallenges job={job} />
              </div>
            );
          })}
          {JOBS_ASSISTENSI.map((job) => {
            return (
              <div
                className="w-full px-10 py-4 text-gray-900 transition-all duration-300 ease-in-out transform bg-yellow-100 rounded-lg md:w-3/4 lg:ml-0 lg:w-full"
                key={job.id}
              >
                <h1 className="text-xl font-bold text-orange-800">{job?.name}</h1>
                <p className="mt-2 text-gray-600 text-md">{job?.stack}</p>
                <h4 className="mt-4 text-lg font-medium text-gray-900 ">{job?.description}</h4>
                <SeeChallenges job={job} />
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Experience;
