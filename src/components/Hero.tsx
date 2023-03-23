import React from 'react';
import { GithubIcon as Github } from 'lucide-react';
import {
  APP_DESCRIPTION,
  APP_NAME,
  APP_SHORT_DESCRIPTION,
} from '@/utils/getEnv';

const Hero = () => {
  return (
    <section className="h-full w-full flex-1 bg-blue-50">
      <nav className="flex flex-row items-center justify-between py-4 md:mx-auto md:max-w-screen-lg">
        <a href="/" className="text-xl font-bold">
          {APP_NAME}
        </a>
        <a
          href="https://www.github.com/francisamidu/language-x"
          target="_blank"
        >
          <Github color="#111" size={25} />
        </a>
      </nav>
      <h1 className="px-4 text-4xl font-bold capitalize text-white md:px-0 md:text-6xl md:leading-[4rem]">
        {APP_SHORT_DESCRIPTION}
      </h1>
      <p className="mx-auto my-8 w-4/5 text-gray-500">{APP_DESCRIPTION}</p>
    </section>
  );
};

export default Hero;
