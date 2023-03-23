import React, { useState } from 'react';
import { GithubIcon as Github } from 'lucide-react';
import {
  APP_LONG_DESCRIPTION,
  APP_NAME,
  APP_SHORT_DESCRIPTION,
} from '@/utils/getEnv';

const Hero = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  return (
    <section className="h-full w-full flex-1 bg-blue-50">
      <nav className="flex flex-row items-center justify-between py-4 md:mx-auto md:max-w-screen-lg">
        <a href="/" className="text-xl font-bold text-eerie">
          {APP_NAME}
        </a>
        <a
          href="https://www.github.com/francisamidu/language-x"
          target="_blank"
          rel="noreferrer"
        >
          <Github color="#111" size={25} />
        </a>
      </nav>
      <div className="my-4 mx-auto flex flex-col items-center text-center md:w-7/12">
        <h1 className="px-4 text-2xl font-bold capitalize md:px-0 md:text-6xl md:leading-[4rem]">
          {APP_SHORT_DESCRIPTION}
        </h1>
        <p className="mx-auto my-8 w-4/5 text-gray-500">
          {APP_LONG_DESCRIPTION}
        </p>
      </div>
      <form className="flex flex-row">
        <div className="flex flex-col bg-white">
          <label
            htmlFor="input"
            className="w-full py-2 text-sm font-bold text-eerie"
          >
            Code
          </label>
          <textarea
            aria-label="input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows={4}
            className="relative rounded-md p-2 shadow-sm outline-none md:w-1/2"
            placeholder={
              'Write or paste the code you want to translate/convert here'
            }
          />
        </div>
      </form>
    </section>
  );
};

export default Hero;
