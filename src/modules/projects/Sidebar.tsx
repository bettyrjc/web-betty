import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

const SideCard = ({ title, id, onClick, tab }) => {
  return (
    <button
      onClick={() => onClick(id)}
      className={`
         ${tab === id ? 'border-b-2 border-b-orange-800' : 'text-teal hover:bg-yellow-50 hover:shadow-md'}
      flex items-center mx-2 lg:my-2 justify-between w-full px-2 py-2 text-orange-800 text-center cursor-pointer lg:py-3    bg-opaciy-90`}
    >
      <p className="text-lg font-medium ">{title}</p>
      {tab === id && <FiChevronRight className="hidden text-xl lg:block" />}
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
