import React, { useState } from 'react';
import chevDown from '../assets/images/chevron-down.svg';

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="my-4 flex w-[82px] flex-col">
      <button
        id="states-button"
        data-dropdown-toggle="dropdown-states"
        className="z-10 inline-flex flex-shrink-0 items-center rounded-lg border border-gray-300 bg-gray-100 pl-4 text-center text-sm font-medium text-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-700"
        type="button"
        onClick={handleDropdownToggle}
      >
        USA
        <img alt="Chevron down" height="35" src={chevDown} width="35" />
      </button>
      <div
        id="dropdown-states"
        className={`z-10 ${
          isOpen ? '' : 'hidden'
        } w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700`}
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="states-button"
        >
          <li>
            <button
              type="button"
              className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <div className="inline-flex items-center">United States</div>
            </button>
          </li>
          <li>
            <button
              type="button"
              className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <div className="inline-flex items-center">Germany</div>
            </button>
          </li>
          <li>
            <button
              type="button"
              className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <div className="inline-flex items-center">Italy</div>
            </button>
          </li>
          <li>
            <button
              type="button"
              className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <div className="inline-flex items-center">China</div>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Dropdown;
