import { useState } from "react";
import Link from "next/link";

const SearchBar = (props: any) => {
  const [searchItem, setSearchItem] = useState();
  const [selectedCategory, setSelectedCategory] = useState();
  const [categoryId, setCategoryId] = useState();
  const [clicked, setClicked] = useState(false);

  const onSearchHandler = (e: any) => {
    setSearchItem(e.target.value);
  };

  return (
    <>
      <div>
        <div>
          <div className="flex items-center justify-center">
            <div className="flex border-1 bg-[rgba(216,216,216,0.1)]   rounded-full ">
              <button
                id="dropdown-button"
                data-dropdown-toggle="dropdown"
                className={`flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-[12px] font-comfortaa  text-center bg-[rgba(216,216,216,0.1)] border border-[#F5F8FA]  rounded-l-full hover:bg-[rgba(216,216,216,0.14)] focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600 ${
                  props.yScroll > 722 || props.path !== "/"
                    ? "text-black border-[#1C1F22]"
                    : "text-white border-[#F5F8FA]"
                }`}
                onClick={() => setClicked(!clicked)}
              >
                {selectedCategory ? selectedCategory : "All Categories"}
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-1"
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
                id="dropdown"
                className=" categories z-10 bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700"
                data-popper-reference-hidden=""
                data-popper-escaped=""
                data-popper-placement="top"
                style={{
                  position: "absolute",
                  marginTop: "50px",
                }}
              >
                <style jsx>{`
                  .categories {
                    display: ${clicked ? "flex" : "none"};
                  }
                `}</style>

                <ul
                  className=" py-1 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdown-button"
                >
                  {props.categories &&
                    props.categories.map((category: any) => {
                      return (
                        <li>
                          <button
                            onClick={() => {
                              setCategoryId(category.categoryId);
                              setSelectedCategory(category[Object.keys(category)[0]].name);
                              setClicked(!clicked);
                            }}
                            className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            {category[Object.keys(category)[0]].name}
                          </button>
                        </li>
                      );
                    })}
                </ul>
              </div>
              <input
                onChange={(e) => onSearchHandler(e)}
                type="text"
                className={`px-4 py-2 bg-[rgba(216,216,216,0.1)] xl:w-96 md:w-80 sm:w-48  text-white border  border-l-0 border-r-0 outline-none ${
                  props.yScroll > 722 || props.path !== "/"
                    ? "border-[#1C1F22]"
                    : "border-[#F5F8FA]"
                }`}
                placeholder="Search..."
              />
              <Link href="/search">
                <button
                  onClick={(e) => {
                    props.searchHandler(searchItem, categoryId);
                  }}
                  className={`flex  bg-[rgba(216,216,216,0.1)] border border-[#F5F8FA] border-l-0 hover:bg-[rgba(216,216,216,0.14)] items-center justify-center px-4  rounded-full rounded-r-full rounded-l-none ${
                    props.yScroll > 722 || props.path !== "/"
                      ? "border-[#1C1F22]"
                      : "border-[#F5F8FA]"
                  }`}
                >
                  <svg
                    className={`w-6 h-[41px]  ${
                      props.yScroll > 722 || props.path !== "/"
                        ? "text-gray-800"
                        : "text-gray-100"
                    }`}
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
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
