import React, { Dispatch, SetStateAction } from 'react';
import { toast } from 'react-hot-toast';

import Button from './Button';
import Dropdown from './Dropdown';
import { API_URL } from '../utils/getEnv';

type TranslateProps = {
  input: string;
  languageIndex: number;
  languages: string[];
  setLanguageIndex: Dispatch<SetStateAction<number>>;
  setLanguages: Dispatch<SetStateAction<string[]>>;
  setInput: Dispatch<SetStateAction<string>>;
  setOutput: Dispatch<SetStateAction<string>>;
};
const Translate = ({
  input,
  languageIndex,
  languages,
  setInput,
  setLanguageIndex,
  setLanguages,
  setOutput,
}: TranslateProps) => {
  const translate = async () => {
    if (!input) {
      return;
    }
    try {
      const prompt = `Convert the following code from JavaScript to ${languages[languageIndex]}: ${input}`;
      fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          const text = res.result.replaceAll('\n', '');
          console.log(text);
          setOutput(text);
        })
        .catch((err) => {
          throw err;
        });
    } catch (error) {
      const err = error instanceof Error ? error.message : 'Unknown Error';
      toast.error(err);
    }
  };
  return (
    <form className="mr-0.5 h-[390px] w-1/2">
      <div className="flex w-full flex-col rounded-t-md bg-white">
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
        <Dropdown
          languageIndex={languageIndex}
          languages={languages}
          setLanguageIndex={setLanguageIndex}
          setLanguages={setLanguages}
        />
        <Button handler={translate} />
      </div>
    </form>
  );
};

export default Translate;
