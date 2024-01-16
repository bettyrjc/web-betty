import React from 'react';

function CSSIcon({ largeSize = false }) {
  const iconSize = largeSize ? { width: '300', height: '300' } : { width: '84', height: '70' };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={iconSize.width}
      height={iconSize.height}
      fill="none"
      viewBox="0 0 77 86"
    >
      <path fill="#51B4A4" d="M76.833 0H0l6.781 76.797 31.636 9.036 31.64-9.036L76.833 0z"></path>
      <path fill="#51B4A4" d="M38.416 6.776V78.83l25.313-7.224 5.65-64.829H38.417z"></path>
      <path
        fill="#fff"
        d="M58.984 18.067H38.416v9.037h11.073l-.677 9.036H38.416v9.032h9.943l-.677 10.166-9.266 3.162v9.49l17.854-5.876 1.583-25.974 1.13-18.073z"
      ></path>
      <path
        fill="#EEE"
        d="M38.416 18.067v9.037H18.307l-.677-9.037h20.786zM28.021 36.14l.453 9.032h9.942V36.14H28.021zm.906 13.552H19.89l.677 12.422 17.85 5.875V58.5l-9.266-3.16-.224-5.647z"
      ></path>
    </svg>
  );
}

export default CSSIcon;
