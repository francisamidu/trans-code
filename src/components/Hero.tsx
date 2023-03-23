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
          href="https://www.github.com/francisamidu/language-x"
          target="_blank"
        >
          <Github color="#111" size={20} />
        </a>
      </nav>
    </main>
  );
};

export default Hero;
