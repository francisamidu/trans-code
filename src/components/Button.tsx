import React from 'react';

type ButtonProps = {
  handler: () => Promise<void>;
};
const Button = ({ handler }: ButtonProps) => {
  return (
    <button
      className="m-4 rounded bg-flame px-5 py-2.5 text-center text-sm font-medium text-white outline-none transition-colors duration-200 hover:bg-orange-500"
      onClick={handler}
    >
      Translate
    </button>
  );
};

export default Button;
