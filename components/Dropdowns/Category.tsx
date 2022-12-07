import Link from "next/link";
import { useState } from "react";

import * as path from "../../constants/paths";

const Category = (props: any) => {
  const [clicked, setClicked] = useState(false);
  return (
    <li>
      <button
        onClick={() => setClicked(!clicked)}
        id="mega-menu-icons-dropdown-button"
        data-dropdown-toggle="mega-menu-icons-dropdown"
        className={`flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium font-unica  border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0  md:pl-8 dark:text-gray-400 dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700 ${
          props.yScroll > 722 || props.path !== "/"
            ? "text-[#1C1F22]"
            : "text-[#F5F8FA]"
        }`}
      >
        CATEGORIES
        <svg
          aria-hidden="true"
          className="ml-1 w-5 h-5 md:w-4 md:h-4"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      <div
        id="mega-menu-icons-dropdown"
        className="dropdown-menu  grid absolute z-10 grid-cols-2 w-auto text-sm bg-white rounded-lg border border-gray-100 shadow-md dark:border-gray-700 md:grid-cols-3 dark:bg-gray-700"
      >
        <style jsx>{`
          .dropdown-menu {
            display: ${clicked ? "flex" : "none"};
          }
        `}</style>

        <div className="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
          <ul className="space-y-4">
            {props?.categories &&
              props?.categories.map((category: any) => {
                return (
                  <li>
                    <Link
                      href={`/${path.CATEGORIES}/${category[Object.keys(category)[0]].name}`}
                      className="flex font-comfortaa text-[12px] text-[#1C1F22] items-center dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group"
                    >
                      {category[Object.keys(category)[0]].name}
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </li>
  );
};

export default Category;
