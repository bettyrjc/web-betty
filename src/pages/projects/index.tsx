/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import { BACKEND_PROJECTS, FRONTEND_PROJECTS, FULL_STACK_PROJECTS } from 'src/assets/constanst/projects';
import Layout from 'src/modules/layout/Layout';
import IconSection from 'src/modules/projects/IconSection';
import ProjectCard from 'src/modules/projects/ProjectCard';
import Sidebar from 'src/modules/projects/Sidebar';

const Projects = () => {
  const [tab, setTab] = React.useState('frontend');

  return (
    <Layout>
      <div className="block min-h-screen lg:flex">
        <Sidebar setTab={setTab} tab={tab} />
        <div className="flex flex-col-reverse items-center w-full px-2 transition-all duration-500 lg:min-h-screen lg:items-start lg:px-8 lg:flex-row bg-yellow-50 ">
          <div className="w-full">
            {tab === 'fullstack' &&
              FULL_STACK_PROJECTS.map((job, index) => {
                return (
                  <ProjectCard
                    title={job.title}
                    key={index}
                    description={job.description}
                    tecnologies={job.tecnologies}
                    features={job.features}
                    link={job.link}
                    index={index}
                  />
                );
              })}
            {tab === 'backend' &&
              BACKEND_PROJECTS.map((job, index) => {
                return (
                  <ProjectCard
                    key={index}
                    title={job.title}
                    description={job.description}
                    tecnologies={job.tecnologies}
                    features={job.features}
                    link={job.link}
                    index={index}
                  />
                );
              })}
            {tab === 'frontend' &&
              FRONTEND_PROJECTS.map((job, index) => {
                return (
                  <ProjectCard
                    key={index}
                    title={job.title}
                    description={job.description}
                    tecnologies={job.tecnologies}
                    features={job.features}
                    link={job.link}
                    web={job.web}
                    index={index}
                  />
                );
              })}
          </div>
          <IconSection />
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
