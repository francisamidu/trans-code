import React, { Dispatch, SetStateAction } from 'react';
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
  const translate = async () => {
    if (!input) {
      return;
    }
    try {
      const req = await axios.post(API_URL, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: input,
        }),
      });
      setOutput(req.data);
    } catch (error) {
      const err = error instanceof Error ? error.message : 'Unknown Error';
      toast.error(err);
    }
  };
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
        <Button handler={translate} />
      </div>
    </form>
  );
};

export default Translate;
