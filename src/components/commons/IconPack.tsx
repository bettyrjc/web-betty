import React from 'react';

import CSSIcon from '@components/icons/css';
import JSIcon from '@components/icons/js';
import NodeIcon from '@components/icons/node';
import ReactIcon from '@components/icons/react';
import SwiftIcon from '@components/icons/swift';
import TyIcon from '@components/icons/TyIcon';

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
