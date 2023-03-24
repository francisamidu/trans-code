import React from 'react';
import { Toaster } from 'react-hot-toast';
import Hero from './components/Hero';
const App = () => {
  return (
    <>
      <Toaster />
      <main className="min-h-[100vh] overflow-x-hidden bg-[#f1f5f9]">
        <Hero />
      </main>
    </>
  );
};

export default App;
