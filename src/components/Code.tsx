import React from 'react';

type CodeProps = {
  code: string;
};
const Code = ({ code }: CodeProps) => {
  return (
    <div className="ml-0.5 flex h-[390px] w-1/2 flex-col rounded-t-md bg-white md:w-7/12">
      <label
        htmlFor="input"
        className="w-full border-b-[1px] border-b-gray-100 p-2 text-sm font-bold text-gray-300"
      >
        Result
      </label>
      <div className="flex flex-row items-center">
        <div className="relative rounded-b-md pl-2 shadow-sm outline-none ">
          {code}
        </div>
        <div className="blinking-cursor text-xl text-gray-400"></div>
      </div>
    </div>
  );
};

export default Code;
