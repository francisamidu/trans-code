import React, { Dispatch, SetStateAction } from 'react';
import Button from './Button';
import Dropdown from './Dropdown';

type TranslateProps = {
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
  setOutput: Dispatch<SetStateAction<string>>;
};
const Translate = ({ input, setInput, setOutput }: TranslateProps) => {
  return (
    <form className="mb-4 flex flex-col items-center justify-center">
      <div className="flex flex-col rounded-t-md bg-white md:w-7/12">
        <label
          htmlFor="input"
          className="w-full border-b-[1px] border-b-gray-100 p-2 text-sm font-bold text-gray-300"
        >
          Code
        </label>
        <textarea
          aria-label="input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows={8}
          className="relative rounded-b-md p-2 shadow-sm outline-none "
          placeholder={
            'Write or paste the code you want to translate/convert here'
          }
        />
        <Dropdown />
        <Button />
      </div>
    </form>
  );
};

export default Translate;
