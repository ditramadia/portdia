import React from "react";

const GlowingCircleIcon = (props: any) => {
  return (
    <svg {...props} viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_399_81)">
        <circle cx="41" cy="41" r="14" fill="#F6F6F9"/>
      </g>
      <defs>
        <filter id="filter0_d_399_81" x="0.700001" y="0.700001" width="80.6" height="80.6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feMorphology radius="6" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_399_81"/>
          <feOffset/>
          <feGaussianBlur stdDeviation="10.15"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_399_81"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_399_81" result="shape"/>
        </filter>
      </defs>
    </svg>
  );
};

export default GlowingCircleIcon;