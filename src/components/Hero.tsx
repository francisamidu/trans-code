import React from 'react';
import { GithubIcon as Github } from 'lucide-react';
import { APP_NAME } from '@/utils/getEnv';

const Hero = () => {
  return (
    <section className="h-full w-full flex-1">
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
    </section>
  );
};

export default Hero;
