import Link from 'next/link';
import { useState } from 'react';

const Category = (props:any) => {
  const [clicked, setClicked] = useState(false);
  console.log("cater  ",props)
  return (
    <li>
      <button
        onClick={() => setClicked(!clicked)}
        id='mega-menu-icons-dropdown-button'
        data-dropdown-toggle='mega-menu-icons-dropdown'
        className='flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium font-comfortaa_regular text-white border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0  md:pl-8 dark:text-gray-400 dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700'
      >
        CATEGORIES
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
            display: ${clicked ? 'flex' : 'none'};
          }
        `}</style>

        <div className='p-4 pb-0 text-gray-900 md:pb-4 dark:text-white'>
          <ul className='space-y-4'>
            {props.categories.categories && props.categories.categories.map((category:any) => {
              return(
                <li>
              <Link
                href={`/category/${category.categoryId}`}
                className='flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group'
              >
                <span className='sr-only'>Blog</span>
                <svg
                  className='mr-2 w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500'
                  aria-hidden='true'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    d='M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z'
                    clip-rule='evenodd'
                  ></path>
                  <path d='M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z'></path>
                </svg>
                {category.name}
              </Link>
            </li>
              )
            })}


          </ul>
        </div>
      </div>
    </li>
  );
};

export default Category;
