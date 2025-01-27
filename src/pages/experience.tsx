/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import { JOBS_ASSISTENSI, JOBS_MERU, JOBS_MICA } from 'src/assets/constanst/positions';
import Doll from 'src/assets/icons/doll';
import ExperienceCard from 'src/modules/experience/experience-card';
import Layout from 'src/modules/layout/Layout';

const Experience = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center w-full flex-1 mt-10 mb-10 lg:items-start lg:justify-start lg:flex-row lg:h-screen">
        <div className="flex items-center justify-center">
          <div className="w-[320px] lg:w-[450px]">
            <Doll />
          </div>
        </div>
        <div className="flex flex-col items-center w-full gap-10 lg:justify-start lg:items-start">
          {JOBS_MICA.map((job) => {
            return <ExperienceCard key={job.id} job={job} />;
          })}

          {JOBS_MERU.map((job) => {
            return <ExperienceCard key={job.id} job={job} />;
          })}
          {JOBS_ASSISTENSI.map((job) => {
            return <ExperienceCard key={job.id} job={job} />;
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Experience;
