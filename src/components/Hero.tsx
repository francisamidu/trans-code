import React from 'react';
import { Github } from 'lucide-react';
import { APP_NAME } from '@/utils/getEnv';

const Hero = () => {
  return (
    <main className="flex flex-1 flex-col items-center justify-center p-5 text-center">
      <nav className="flex flex-row items-center justify-around md:mx-auto md:max-w-screen-lg">
        <a href="/" className="self-center whitespace-nowrap text-xl font-bold">
          {APP_NAME}
        </a>
        <a
          href="https://www.github.com/francisamidu/avatar-gen"
          target="_blank"
          className="inline-flex items-center rounded-xl border-none bg-white px-6 py-2.5 text-center text-sm font-medium text-inherit shadow-md outline-none"
        >
          <Github color="#fff" size={20} />
          <span className="ml-2 text-white">Star on Github</span>
        </a>
      </nav>
    </main>
  );
};

export default Hero;
