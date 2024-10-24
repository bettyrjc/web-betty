import React, { useState } from 'react';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';

const SeeChallenges = ({ job }: any) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };
  return (
    <>
      <button
        className={`flex items-center gap-2 px-4 my-3 text-white transition-all duration-700 rounded-md hover:bg-orange-800 ${
          isVisible ? 'bg-orange-800 shadow-xl mb-10' : 'bg-teal'
        }`}
        onClick={handleClick}
      >
        <h5 className="my-2 text-lg font-bold">{job?.activities_name}</h5>
        {isVisible ? <HiChevronUp className="text-lg" /> : <HiChevronDown className="text-lg" />}
      </button>
      <div className={`transition-all duration-500 ${isVisible ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
        {job.activities.map((activity) => (
          <div key={activity.id} className="my-1">
            <h6 className="mb-1 font-semibold">{activity?.name}</h6>
            <p className="mb-2 ml-4">{activity?.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SeeChallenges;
