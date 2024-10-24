import React from 'react';

import CSSIcon from 'src/assets/icons/css';
import JSIcon from 'src/assets/icons/js';
import NodeIcon from 'src/assets/icons/node';
import ReactIcon from 'src/assets/icons/react';
import SwiftIcon from 'src/assets/icons/swift';
import TyIcon from 'src/assets/icons/TyIcon';

const IconPack = () => {
  return (
    <div className="flex items-center justify-center w-1/3 lg:p-2 lg:gap-5 ">
      <ReactIcon className="animate-icon-up" />
      <TyIcon className="animate-icon-down" />
      <JSIcon className="animate-icon-up" />
      <NodeIcon className="animate-icon-down" />
      <SwiftIcon className="animate-icon-up" />
      <CSSIcon className="animate-icon-down" />
    </div>
  );
};

export default IconPack;
