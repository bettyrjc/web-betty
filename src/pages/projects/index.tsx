import React from 'react';

import { JOBS } from '@components/constanst/positions';
import Layout from '@components/Layout';

const Projects = () => {
  const [showMica, setShowMica] = React.useState(true);
  return (
    <Layout>
      <div className="w-full min-h-screen mb-10 transition-all duration-500 lg:px-16 bg-yellow-50">
        <h1 className="mb-4 text-4xl font-bold"> Latest jobs</h1>
        {/*group of word  */}
        <div className="flex gap-6">
          <div className="flex items-center justify-between w-1/2 p-5 duration-500 bg-yellow-100 border border-yellow-500 rounded-md shadow-md hover:scale-105 h-14 hover:shadow-xl">
            <h3 className="text-lg font-bold text-orange-500 "> Mica Leasing Company - UI/UX Designer and Developer</h3>
            <button
              className="p-2 text-sm rounded-md cursor-pointer text-teal hover:bg-teal hover:text-white hover:opacity-90"
              onClick={() => setShowMica(!showMica)}
            >
              Ver más
            </button>
          </div>
          {showMica &&
            JOBS.map((job) => {
              return (
                <div className="w-1/2 transition-all duration-300 ease-in-out transform" key={job.id}>
                  <h1>{job?.name}</h1>
                  <p>{job?.stack}</p>
                  <h4 className="mt-4 text-lg font-medium text-orange-500 ">{job?.description}</h4>
                  <h5>{job?.activities_name}</h5>
                  {job.activities.map((activity) => (
                    <div key={activity.id}>
                      <h6>{activity?.name}</h6>
                      <p>{activity?.description}</p>
                    </div>
                  ))}
                </div>
              );
            })}
          {/* <h3> Meru Auto-Parts E-Commerce - Frontend Engineer</h3>
            <h3> Asistensi Insurance Company - Leader Front at EMS | UX/UI Designer</h3> */}
        </div>

        {/* https://bettyrjc.github.io/instagram-copy/ 
        https://bettyrjc.github.io/copia_outlook/
        */}
      </div>
    </Layout>
  );
};

export default Projects;
