import React, { useState } from 'react';
import github from '../assets/images/github-icon.svg';
import {
  APP_DESCRIPTION,
  APP_NAME,
  APP_SHORT_DESCRIPTION,
} from '@/utils/getEnv';
import Translate from './Translate';

const Hero = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  return (
    <section className="h-full w-full flex-1 ">
      <nav className="flex flex-row items-center justify-between py-4 md:mx-auto md:max-w-screen-lg">
        <a href="/" className="text-xl font-bold text-eerie">
          {APP_NAME}
        </a>
        <a
          href="https://www.github.com/francisamidu/language-x"
          target="_blank"
          rel="noreferrer"
        >
          <img src={github} alt="Github logo" width="35" height="35" />
        </a>
      </nav>
      <div className="my-4 mx-auto flex flex-col items-center text-center md:w-1/2">
        <h1 className="px-4 text-2xl font-bold capitalize md:px-0 md:text-6xl md:leading-[4rem]">
          {APP_SHORT_DESCRIPTION}
        </h1>
        <p className="mx-auto my-8 w-4/5 text-gray-500">{APP_DESCRIPTION}</p>
      </div>
      <Translate input={input} setInput={setInput} setOutput={setOutput} />
    </section>
  );
};

export default Hero;
