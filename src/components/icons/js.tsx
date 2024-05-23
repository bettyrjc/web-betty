import React from 'react';

function JSIcon({ largeSize = false, className }) {
  const iconSize = largeSize ? { width: '300', height: '300' } : { width: '84', height: '70' };

  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={iconSize.width}
      height={iconSize.height}
      fill="none"
      viewBox="0 0 83 83"
    >
      <path
        fill="#F3CC83"
        d="M2.89 0A2.896 2.896 0 00.02 3.25l7.71 61.646c.119.963.708 1.797 1.572 2.229l30.823 15.412a2.902 2.902 0 002.589 0l30.823-15.412a2.884 2.884 0 001.572-2.23L82.819 3.25a2.871 2.871 0 00-.703-2.27A2.888 2.888 0 0079.948 0H2.891z"
      ></path>
      <path
        fill="#F3CC83"
        fillRule="evenodd"
        d="M41.422 0v82.844c-.443 0-.886-.104-1.297-.307L9.302 67.124a2.884 2.884 0 01-1.573-2.23L.021 3.25A2.896 2.896 0 012.89 0h38.531z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M35.641 11.563a2.89 2.89 0 012.89 2.885v50.094c0 1.026-.546 1.979-1.442 2.495-.89.52-1.99.52-2.88.01l-13.485-7.703a2.891 2.891 0 012.865-5.02l9.161 5.233v-45.11a2.89 2.89 0 012.891-2.884zM44.313 14.448a2.885 2.885 0 012.886-2.886h19.265a2.887 2.887 0 110 5.776H50.09v18.553l13.823-3.068a2.883 2.883 0 012.537.651c.692.61 1.052 1.51.968 2.427L65.49 57.094a2.877 2.877 0 01-1.583 2.323l-15.411 7.708a2.892 2.892 0 01-2.59-5.172l13.975-6.984 1.422-15.646-13.474 2.995a2.905 2.905 0 01-2.438-.568 2.893 2.893 0 01-1.078-2.255V14.448z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default JSIcon;
