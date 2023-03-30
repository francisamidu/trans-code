import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { Prism } from 'react-syntax-highlighter';

type CodeProps = {
  code: string;
  language: string;
};
const Code = ({ code, language }: CodeProps) => {
  return (
    <div className="ml-0.5 flex h-[390px] w-1/2 flex-col rounded-t-md bg-white md:w-7/12">
      <label
        htmlFor="input"
        className="w-full border-b-[1px] border-b-gray-100 p-2 text-sm font-bold text-gray-300"
      >
        Result
      </label>

      <SyntaxHighlighter
        className="blinking-cursor !bg-white !font-fira"
        language={language}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default Code;
