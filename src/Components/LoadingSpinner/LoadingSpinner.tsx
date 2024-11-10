// LoadingSpinner.tsx
import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative flex items-center justify-center w-12 h-12">
        <div className="absolute w-3 h-3 bg-yellow-500 rounded-full animate-spin1"></div>
        <div className="absolute w-3 h-3 bg-blue-500 rounded-full animate-spin2"></div>
        <div className="absolute w-3 h-3 bg-green-500 rounded-full animate-spin3"></div>
        <div className="absolute w-3 h-3 bg-red-500 rounded-full animate-spin4"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
