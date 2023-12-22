'use client';

import { useState } from 'react';

const Navigation = () => {
  const [showNavigation, setShowNavigation] = useState<boolean>(false);
  const toggle = () => {
    setShowNavigation(!showNavigation);
  }
  const mark = showNavigation ? '-' : '+';

  return (
    <>
      <div className='absolute top-0 right-4'>
        <button className='font-mono text-2xl px-2 my-1 bg-blue-400 rounded-lg text-white' onClick={toggle}>
          {mark}
        </button>
      </div>
      { showNavigation
      ?
        <div className='text-2xl px-2 py-1 bg-yellow-400'>
          <p>
            Navigation
          </p>
        </div>
      :
        <div>
        </div>
      }
    </>
  );
};

export default Navigation;
