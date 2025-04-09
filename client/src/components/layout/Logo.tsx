import React from 'react';

const Logo: React.FC = () => {
  return (
    <svg 
      width="40" 
      height="40" 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="mr-2"
    >
      {/* Base Circle */}
      <circle cx="50" cy="50" r="48" fill="currentColor" />
      
      {/* Footprint Symbol */}
      <path 
        d="M34 40C29 40 25 43 25 48C25 52 28 55 32 55C27 55 23 58 22 64C24 63 26 62.5 29 62.5C36 62.5 41 59 41 54C41 47 36 40 34 40Z" 
        fill="white" 
      />
      
      {/* Heart Symbol */}
      <path 
        d="M66 32C61 32 58 35 55 40C52 35 49 32 44 32C39 32 34 37 34 44C34 58 55 72 55 72C55 72 76 58 76 44C76 37 71 32 66 32Z" 
        fill="white" 
      />
      
      {/* Circular Border */}
      <circle cx="50" cy="50" r="48" stroke="white" strokeWidth="4" fill="none" />
    </svg>
  );
};

export default Logo;