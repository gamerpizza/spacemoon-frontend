import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Category } from '../../model/category';

const SearchBar = (props: any) => {
  const [searchItem, setSearchItem] = useState();
  const [selectedCategory, setSelectedCategory] = useState();
  const [categoryId, setCategoryId] = useState();
  const [clicked, setClicked] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);

  const onSearchHandler = (e: any) => {
    setSearchItem(e.target.value);
  };


  return (
        <>
     <div>
      <div>
        <div className='flex items-center justify-center '>
          <div className='flex border-1 bg-[rgba(216,216,216,0.1)] border-gray-800  rounded-full '>
            <button
              id='dropdown-button'
              data-dropdown-toggle='dropdown'
              className='  flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-100 bg-[rgba(216,216,216,0.1)] border border-[rgba(216,216,216,0.1)] rounded-l-full hover:bg-[rgba(216,216,216,0.14)] focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600'
              onClick = {() => setClicked(!clicked)}
            >
              {selectedCategory ? selectedCategory : 'All Categories'}
              <svg
                aria-hidden='true'
                className='w-4 h-4 ml-1'
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
              id='dropdown'
              className=' categories z-10 bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700'
              data-popper-reference-hidden=''
              data-popper-escaped=''
              data-popper-placement='top'
              style={{
                position: 'absolute',
                marginTop: '50px',
              }}
            >
              <style jsx>{`
                  .categories {
                    display: ${clicked ? 'flex' : 'none'};
                  }
                `}</style>

              <ul
                className=' py-1 text-sm text-gray-700 dark:text-gray-200'
                aria-labelledby='dropdown-button'
              >

                {props.categories.categories && props.categories.categories.map((category:any) => {
                  return(
                    <li>
                  <button
                  onClick = {() => {
                    setCategoryId(category.categoryId)
                    setSelectedCategory(category.name)
                    setClicked(!clicked)
                  }}
                    className='inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                  >
                    {category.name}
                  </button>
                </li>
                  )
                })}
            </ul>

            </div>
             <input
              onChange={(e) => onSearchHandler(e)}
              type='text'
              className='px-4 py-2 bg-[rgba(216,216,216,0.1)] w-96 text-white border-none outline-none'
              placeholder='Search...'
            />
            <Link href='/search'>
              <button
                onClick={(e) => {
                  props.searchHandler(searchItem, categoryId);

                }}
                className='flex  bg-[rgba(216,216,216,0.1)] border-none   hover:bg-[rgba(216,216,216,0.14)] items-center justify-center px-4 border-l rounded-full rounded-r-full rounded-l-none'
              >
                <svg
                  className='w-6 h-11 text-gray-100'
                  fill='currentColor'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                >
                  <path d='M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z' />
                </svg>
              </button>
            </Link>
                  </div>
        </div>
      </div>
    </div>

            </>
  );
};

export default SearchBar;