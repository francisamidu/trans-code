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
      <form>
        <textarea
          aria-label="input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows={4}
          className="relative mt-3 w-full rounded-md border-2 border-slate-200 p-2 shadow-sm focus:border-slate-500 focus:ring-slate-500"
          placeholder={
            'Write or paste the code you want to translate/convert here'
          }
        />
      </form>
    </section>
  );
};

export default Hero;
