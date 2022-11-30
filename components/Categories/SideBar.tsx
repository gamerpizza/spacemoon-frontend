import Link from "next/link";

const SideBar = () => {
  return (
    <>
      <div className="w-80" aria-label="Sidebar">
        <div className="overflow-y-auto py-4 px-3">
          <ul className="space-y-2">
            <li className="flex items-center border-b-2 border-black pb-3">
              <Link href="/" className="font-comfortaa">
                Home
              </Link>
              &nbsp;
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="11"
                shapeRendering="geometricPrecision"
                textRendering="geometricPrecision"
                imageRendering="optimizeQuality"
                fillRule="evenodd"
                clipRule="evenodd"
                viewBox="0 0 298 511.93"
              >
                <path
                  fillRule="nonzero"
                  d="M70.77 499.85c-16.24 16.17-42.53 16.09-58.69-.15-16.17-16.25-16.09-42.54.15-58.7l185.5-185.03L12.23 70.93c-16.24-16.16-16.32-42.45-.15-58.7 16.16-16.24 42.45-16.32 58.69-.15l215.15 214.61c16.17 16.25 16.09 42.54-.15 58.7l-215 214.46z"
                />
              </svg>
              &nbsp;
              <Link href="/" className="font-comfortaa">
                Spacemoon
              </Link>
            </li>
            <li className="font-unica text-2xl pt-2">CATEGORIES</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideBar;
