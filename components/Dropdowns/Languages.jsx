import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Languages = () => {
  const [languagesClicked, setLanguagesClicked] = useState(false);
  const router = useRouter();

  return (
    <li>
      <button
        onClick={() => setLanguagesClicked(!languagesClicked)}
        id='mega-menu-icons-dropdown-button'
        data-dropdown-toggle='mega-menu-icons-dropdown'
        className='flex justify-between items-center py-2 m-0 w-full font-medium font-unica text-white border-b border-gray-100  hover:bg-gray-50 md:hover:bg-transparent md:border-0  dark:text-gray-400 dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700'
      >
        ENG
        <svg
          aria-hidden='true'
          className='ml-1 w-5 h-5 md:w-4 md:h-4'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fill-rule='evenodd'
            d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
            clip-rule='evenodd'
          ></path>
        </svg>
      </button>
      <div
        id='mega-menu-icons-dropdown'
        className='dropdown-menu  grid absolute z-10 grid-cols-2 w-auto text-sm bg-white rounded-lg border border-gray-100 shadow-md dark:border-gray-700 md:grid-cols-3 dark:bg-gray-700'
      >
        <style jsx>{`
          .dropdown-menu {
            display: ${languagesClicked ? 'flex' : 'none'};
          }
        `}</style>
        <div className='p-4 pb-0 text-gray-900 md:pb-4 dark:text-white'>
          <ul
            className='space-y-4'
            aria-labelledby='mega-menu-icons-dropdown-button'
          >
            {router.locales?.map((locale) => {
              return (
                <>
                  <li onClick={() => setLanguagesClicked(!languagesClicked)}>
                    <Link
                      href={router.asPath}
                      locale={locale}
                      className='flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group'
                    >
                      {locale}
                      <span className='sr-only'>{locale}</span>
                      <svg
                        className='mr-2 w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500'
                        aria-hidden='true'
                        focusable='false'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fill-rule='evenodd'
                          d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
                          clip-rule='evenodd'
                        ></path>
                      </svg>
                      {locale}
                    </Link>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </li>
  );
};

export default Languages;
