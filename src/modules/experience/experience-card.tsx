import React from 'react';

import ChallengesDescription from './ChallengeDescription';

type ExperienceDescription = {
  job: {
    activities_name: string;
    activities: any[];
    id: number;
    name: string;
    stack: string;
    description: string;
  };
};
const ExperienceCard = ({ job }: ExperienceDescription) => {
  return (
    <div
      className="w-full px-10 py-4 text-gray-900 transition-all duration-300 ease-in-out transform bg-yellow-100 rounded-lg md:w-3/4 lg:ml-0 lg:w-full"
      key={job.id}
    >
      <h1 className="text-xl font-bold text-orange-800">{job?.name}</h1>
      <p className="mt-2 text-gray-600 text-md">{job?.stack}</p>
      <h4 className="mt-4 font-medium text-gray-900 text-md ">{job?.description}</h4>
      <ChallengesDescription activities_name={job?.activities_name} activities={job?.activities} />
    </div>
  );
};

export default ExperienceCard;
