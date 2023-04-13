import React, { useEffect, useState } from 'react';
import github from '../assets/images/github-icon.svg';
import {
  APP_DESCRIPTION,
  APP_NAME,
  APP_SHORT_DESCRIPTION,
} from '@/utils/getEnv';
import { Code, Translate } from '.';

const Hero = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [languageIndex, setLanguageIndex] = useState(0);
  const [languages, setLanguages] = useState([
    '',
    'Python',
    'Go',
    'Java',
    'Kotlin',
    'PHP',
    'C#',
    'Swift',
    'R',
    'Ruby',
    'C++',
    'C',
    'Rust',
  ]);
  const [code, setCode] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCode(output.slice(0, code.length + 1));
    }, 100);
    return () => clearTimeout(timeout);
  }, [output]);

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
      <div className="mx-auto mb-4 flex flex-row items-start justify-center md:max-w-screen-lg">
        <Translate
          languageIndex={languageIndex}
          languages={languages}
          setLanguageIndex={setLanguageIndex}
          setLanguages={setLanguages}
          input={input}
          setInput={setInput}
          setOutput={setOutput}
        />
        <Code code={code} language={languages[languageIndex]} />
      </div>
    </section>
  );
};

export default Hero;
