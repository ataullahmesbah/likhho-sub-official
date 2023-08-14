import React from 'react';

const RoundedLetter = () => {
  return (
    <div className="flex items-center">
      {['L', 'i', 'k', 'h', 'o'].map((letter, index) => (
        <span
          key={index}
          className={`${
            letter === 'L' ? 'rounded-green' : ''
          } inline-block p-2 text-white`}
        >
          {letter}
        </span>
      ))}
    </div>
  );
};

export default RoundedLetter;