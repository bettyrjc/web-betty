import React from 'react';

function Doll() {
  return (
    <svg version="1.1" viewBox="0 0 600 650" className="w-full min-h-[320px] max-h-[500px]">
      <path fill="url(#a)" d="M0 0h676v875H0z" />
      <defs>
        <pattern id="a" width="1" height="1" patternContentUnits="objectBoundingBox">
          <use xlinkHref="#b" transform="scale(.0004 .0003)" />
        </pattern>
        <image
          id="b"
          width="1950"
          height="2200"
        />
      </defs>
    </svg>
  );
}

export default Doll;