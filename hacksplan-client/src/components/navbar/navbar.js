function NavBar() {
  return (
    <>
      <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
          <a href="/" class="flex items-center">
            <img src="/logo-only-clean.png" class="h-6 mr-3 sm:h-9" alt="HacksPlan Logo" />
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              HacksPlan
            </span>
          </a>
          <div class="flex md:order-2">
            {/* <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
            >
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span class="sr-only">Search</span>
            </button>
            <div class="relative hidden md:block">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  class="w-5 h-5 text-gray-500"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span class="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
              />
            </div> */}
            <a
              href="/auth/login"
              class="flex border text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0 0 48 48"
              >
                <radialGradient
                  id="A7gfmRnQJ4TuM2hgrd0Tra"
                  cx="11.177"
                  cy="8.393"
                  r="40.312"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#0370c8"></stop>
                  <stop offset=".484" stopColor="#036fc5"></stop>
                  <stop offset=".775" stopColor="#036abd"></stop>
                  <stop offset="1" stopColor="#0362b0"></stop>
                </radialGradient>
                <path
                  fill="url(#undefined)"
                  d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"
                ></path>
                <radialGradient
                  id="A7gfmRnQJ4TuM2hgrd0Trb"
                  cx="24"
                  cy="44.108"
                  r="16.14"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0"></stop>
                  <stop offset="1" stopOpacity="0"></stop>
                </radialGradient>
                <path
                  fill="url(#undefined)"
                  d="M24,44c5.795,0,10.998-2.48,14.651-6.418C36.177,31.943,30.552,28,24,28	s-12.177,3.943-14.651,9.582C13.002,41.52,18.205,44,24,44z"
                ></path>
                <radialGradient
                  id="A7gfmRnQJ4TuM2hgrd0Trc"
                  cx="24"
                  cy="20"
                  r="9.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0"></stop>
                  <stop offset="1" stopOpacity="0"></stop>
                </radialGradient>
                <circle cx="24" cy="20" r="9.5" fill="url(#undefined)"></circle>
                <linearGradient
                  id="A7gfmRnQJ4TuM2hgrd0Trd_kDoeg22e5jUY_gr1"
                  x1="18.573"
                  x2="29.735"
                  y1="13.573"
                  y2="24.735"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#75daff"></stop>
                  <stop offset="1" stopColor="#1ea2e4"></stop>
                </linearGradient>
                <circle
                  cx="24"
                  cy="19"
                  r="8"
                  fill="url(#A7gfmRnQJ4TuM2hgrd0Trd_kDoeg22e5jUY_gr1)"
                ></circle>
                <linearGradient
                  id="A7gfmRnQJ4TuM2hgrd0Tre_kDoeg22e5jUY_gr2"
                  x1="17.007"
                  x2="30.888"
                  y1="31.21"
                  y2="45.091"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#75daff"></stop>
                  <stop offset="1" stopColor="#1ea2e4"></stop>
                </linearGradient>
                <path
                  fill="url(#A7gfmRnQJ4TuM2hgrd0Tre_kDoeg22e5jUY_gr2)"
                  d="M24,44c5.015,0,9.587-1.859,13.098-4.909C35.107,33.784,30.002,30,24,30	s-11.107,3.784-13.098,9.091C14.413,42.141,18.985,44,24,44z"
                ></path>
              </svg>
              &nbsp; Login
            </a>
          </div>
          <div class="flex items-center md:order-2">
            
            <button
              type="button"
              class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-15 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
            >
              <span class="sr-only">Open user menu</span>
              <img class="w-8 h-8 rounded-full" src="/logo-only-clean.png" alt="user" />
            </button>
            <div
              class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
              id="user-dropdown"
            >
              <div class="px-4 py-3">
                <span class="block text-sm text-gray-900 dark:text-white">
                  Vashishth Patel
                </span>
                <span class="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
                  vashishthpatel@gmail.com
                </span>
              </div>
              <ul class="py-2" aria-labelledby="user-menu-button">
                <li>
                  <a
                    href="#link"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#link"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#link"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Earnings
                  </a>
                </li>
                <li>
                  <a
                    href="#link"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>

            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="mobile-menu-2"
          >
            <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-800 dark:border-gray-700">
              <li>
                <a
                  href="/"
                  class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                >
                  Get Started
                </a>
              </li>
              <li>
                <a
                  href="/sponsorships"
                  class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Sponsorships
                </a>
              </li>
              <li>
                <a
                  href="/communities"
                  class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Communities
                </a>
              </li>
              <li>
                <a
                  href="/experiences"
                  class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Experiences
                </a>
              </li>
              <li>
                <a
                  href="/hackathons"
                  class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Hackathons
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
