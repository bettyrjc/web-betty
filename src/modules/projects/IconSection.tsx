import React from 'react';

import CSSIcon from 'src/assets/icons/css';
import JSIcon from 'src/assets/icons/js';
import NodeIcon from 'src/assets/icons/node';
import ReactIcon from 'src/assets/icons/react';
import SwiftIcon from 'src/assets/icons/swift';
import TyIcon from 'src/assets/icons/TyIcon';

const IconSection = () => {
  return (
    <div
      className="items-center justify-center w-[200px] 
            lg:fixed lg:right-0 lg:w-auto flex flex lg:gap-8 lg:flex-col lg:ml-8 lg:h-[400px]"
    >
      <ReactIcon className="animate-icon-up" />
      <TyIcon />
      <JSIcon className="animate-icon-up" />
      <NodeIcon />
      <SwiftIcon className="animate-icon-up" />
      <CSSIcon />
    </div>
  );
};

export default IconSection;
