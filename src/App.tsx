import React from 'react';
import { ToastContainer } from 'react-toastify';
import Hero from './components/Hero';
const App = () => {
  return (
    <main className="min-h-[96vh] overflow-x-hidden bg-[#02000e]">
      <ToastContainer />
      <Hero />
    </main>
  );
};

export default App;
