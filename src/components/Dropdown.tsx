import useClickOutside from '@/hooks/useClickOutside';
import React, { useRef, useState } from 'react';
import chevDown from '../assets/images/chevron-down.svg';

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [languageIndex, setLanguageIndex] = useState(0);

  const [languages, setLanguages] = useState([
    '',
    'Python',
    'Javascript',
    'C#',
    'Java',
    'C++',
    'PHP',
    'Rust',
    'C',
    'Kotlin',
  ]);
  const setLanguage = (language: string) => {
    const languageIndex = languages.findIndex((l) => l == language);
    setLanguageIndex(languageIndex);
  };

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  const dropdownRef = useRef(null);

  useClickOutside(dropdownRef, () => {
    setIsOpen(false);
  });

  return (
    <div className="my-4 flex w-[175px] flex-col" ref={dropdownRef}>
      <button
        id="states-button"
        data-dropdown-toggle="dropdown-states"
        className="z-10 inline-flex flex-shrink-0 flex-row items-center justify-between rounded-lg border border-gray-300 bg-gray-100 pl-4 text-center text-sm font-medium text-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-700"
        type="button"
        onClick={handleDropdownToggle}
      >
        {languageIndex === 0 ? 'Select language' : languages[languageIndex]}
        <img alt="Chevron down" height="35" src={chevDown} width="35" />
      </button>
      <div
        id="dropdown-states"
        className={`z-10 ${
          isOpen ? '' : 'hidden'
        } w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700`}
      >
        <ul
          className="absolute bg-white py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="states-button"
        >
          {languages.filter(Boolean).map((language) => (
            <li key={language}>
              <button
                type="button"
                className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                onClickCapture={handleDropdownToggle}
                onClick={() => setLanguage(language)}
              >
                <div className="inline-flex items-center">{language}</div>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Dropdown;
