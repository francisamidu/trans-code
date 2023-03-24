import React, { Dispatch, SetStateAction, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';

import Button from './Button';
import Dropdown from './Dropdown';
import { API_URL } from '../utils/getEnv';

type TranslateProps = {
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
  setOutput: Dispatch<SetStateAction<string>>;
};
const Translate = ({ input, setInput, setOutput }: TranslateProps) => {
  const [languageIndex, setLanguageIndex] = useState(0);

  const [languages, setLanguages] = useState([
    '',
    'Python',
    'Javascript',
    'C#',
    'Java',
    'C++',
    'PHP',
    'Rust',
    'C',
    'Kotlin',
  ]);
  const translate = async () => {
    if (!input) {
      return;
    }
    try {
      const prompt = `Convert the following code from JavaScript to ${languages[languageIndex]}: console.log("Hi")`;
      console.log(prompt);
      // const req = await axios.post(API_URL, {
      //   headers: {
      //     Accept: 'application/json',
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     prompt: input,
      //   }),
      // });
      // setOutput(req.data);
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
