import React from 'react';

function Button({ heading, color, clickHandler }) {
  return (
    <button
      onClick={clickHandler}
      className={`text-white py-2 px-4 rounded-md ${color} font-bold text-md sm:text-base md:text-xl w-2/4 sm:max-w-xs my-2 sm:my-0`}
    >
      {heading}
    </button>
  );
}

export default Button;
