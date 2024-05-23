import React from 'react';

function ReactIcon({ largeSize = false, className }) {
  const iconSize = largeSize ? { width: '300', height: '300' } : { width: '84', height: '70' };
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={iconSize.width}
      height={iconSize.height}
      fill="none"
      viewBox="0 0 84 70"
    >
      <path
        fill="#51B4A4"
        d="M49.13 34.647c0 .453-.044.906-.138 1.349a6.633 6.633 0 01-1.11 2.484c-.266.38-.576.729-.92 1.046-.344.323-.716.61-1.12.86-.406.25-.833.463-1.282.635-.45.177-.916.307-1.393.396-.477.088-.96.13-1.442.13a7.92 7.92 0 01-1.448-.13 7.542 7.542 0 01-1.392-.396 7.612 7.612 0 01-1.282-.635 7.017 7.017 0 01-1.12-.86 6.809 6.809 0 01-.921-1.046c-.272-.375-.5-.771-.688-1.193a7.08 7.08 0 01-.422-1.291 6.477 6.477 0 01-.139-1.35c0-.452.045-.9.14-1.343.099-.442.238-.875.42-1.296a7.02 7.02 0 01.689-1.193c.272-.375.577-.724.92-1.041.345-.323.716-.61 1.121-.86s.832-.463 1.282-.635c.449-.177.915-.307 1.392-.396a7.92 7.92 0 011.448-.13c.483 0 .965.042 1.442.13a7.56 7.56 0 011.393.396c.449.172.876.385 1.281.635.405.25.777.537 1.12.86.345.317.655.666.922 1.041.271.38.499.776.688 1.193a6.428 6.428 0 01.56 2.64z"
      ></path>
      <path
        stroke="#51B4A4"
        strokeWidth="3.315"
        d="M41.725 20.622c9.947 0 19.19 1.328 26.162 3.562 8.394 2.693 13.558 6.77 13.558 10.462 0 3.854-5.47 8.187-14.49 10.967-6.817 2.1-15.788 3.198-25.23 3.198-9.686 0-18.855-1.031-25.75-3.224C7.252 42.812 2 38.422 2 34.647c0-3.662 4.932-7.708 13.209-10.395 6.995-2.27 16.464-3.63 26.51-3.63h.006z"
      ></path>
      <path
        stroke="#51B4A4"
        strokeWidth="3.315"
        d="M28.605 27.673c4.97-8.02 10.829-14.81 16.387-19.315 6.696-5.426 13.07-7.55 16.51-5.707 3.583 1.922 4.881 8.499 2.962 17.159-1.448 6.551-4.91 14.331-9.625 21.95-4.837 7.806-10.38 14.685-15.86 19.148-6.94 5.65-13.652 7.692-17.164 5.807-3.412-1.828-4.715-7.827-3.079-15.847 1.382-6.775 4.849-15.092 9.87-23.19v-.005z"
      ></path>
      <path
        stroke="#51B4A4"
        strokeWidth="3.315"
        d="M28.616 41.78c-4.981-8.014-8.376-16.127-9.79-22.86-1.71-8.114-.5-14.316 2.934-16.17 3.578-1.927 10.346.307 17.446 6.181 5.376 4.437 10.89 11.113 15.622 18.722 4.849 7.806 8.488 15.706 9.902 22.356 1.787 8.42.339 14.852-3.173 16.742-3.406 1.838-9.636-.11-16.282-5.431-5.614-4.5-11.621-11.447-16.659-19.544v.005z"
      ></path>
    </svg>
  );
}

export default ReactIcon;
