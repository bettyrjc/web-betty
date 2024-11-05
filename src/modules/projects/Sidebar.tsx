import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

const SideCard = ({ title, id, onClick, tab }) => {
  return (
    <button
      onClick={() => onClick(id)}
      className={`
         ${tab === id ? 'bg-teal text-white shadow-md hover:bg-teal' : 'text-teal hover:bg-yellow-50 hover:shadow-md'}
      flex items-center mx-2 lg:my-2 justify-between w-full px-2 py-2 text-orange-500 rounded-md cursor-pointer lg:py-5 border-b-1 border-b-orange-500  bg-opaciy-90`}
    >
      <p className="text-lg font-medium ">{title}</p>
      <FiChevronRight className="hidden text-xl lg:block" />
    </button>
  );
};

const Sidebar = ({ setTab, tab }) => {
  const handleTab = (id: string) => {
    setTab(id);
  };

  return (
    <div className={`flex mb-4 lg:mb-0 w-full lg:block lg:w-[250px] lg:min-h-[700px] h-full px-2`}>
      <SideCard title="Frontend" id="frontend" onClick={handleTab} tab={tab} />
      <SideCard title="Backend" id="backend" onClick={handleTab} tab={tab} />
      <SideCard title="FullStack" id="fullstack" onClick={handleTab} tab={tab} />
    </div>
  );
};

export default Sidebar;
