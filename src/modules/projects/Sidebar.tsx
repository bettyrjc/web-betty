import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

const SideCard = ({ title, id, onClick }) => {
  return (
    <button
      onClick={() => onClick(id)}
      className="flex items-center justify-between w-full px-2 py-2 text-orange-500 rounded-md cursor-pointer lg:py-5 border-b-1 border-b-orange-500 hover:bg-yellow-50 hover:shadow-md bg-opaciy-90"
    >
      <p className="text-lg font-medium text-teal">{title}</p>
      <FiChevronRight className="hidden text-xl text-teal lg:block" />
    </button>
  );
};

const Sidebar = ({ setTab }) => {
  const handleTab = (id: string) => {
    setTab(id);
  };

  return (
    <div className="flex mb-4 lg:mb-0 w-full lg:block lg:w-[250px] lg:min-h-[700px] h-full px-2 ">
      <SideCard title="Frontend" id="frontend" onClick={handleTab} />
      <SideCard title="Backend" id="backend" onClick={handleTab} />
      <SideCard title="FullStack" id="fullstack" onClick={handleTab} />
    </div>
  );
};

export default Sidebar;
