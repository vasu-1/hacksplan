export default function CommunityCard(props) {
  var obj = props.obj;
  console.log(props, obj)

    return (
      <div class="m-4 mt-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
          {obj.name}
        </h5>
        <p class="mb-5 text-sm text-gray-500 sm:text-lg dark:text-gray-500">
          {obj.description}
        </p>
        <div class="items-center justify-center space-y-1 sm:flex sm:space-y-0 sm:space-x-2">
          <a
            href={obj.website}
            class="w-full sm:w-auto border hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:text-white rounded-lg inline-flex items-center justify-center px-4 py-2 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="40"
              height="30"
              viewBox="0 0 48 48"
            >
              <linearGradient
                id="UoM~0_1BpfEneny~ePS0ba_57GgOxl1VjRW_gr1"
                x1="8.469"
                x2="42.33"
                y1="8.469"
                y2="42.33"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#2aa4f4"></stop>
                <stop offset="1" stop-color="#007ad9"></stop>
              </linearGradient>
              <path
                fill="url(#UoM~0_1BpfEneny~ePS0ba_57GgOxl1VjRW_gr1)"
                d="M39,41H9c-1.1,0-2-0.9-2-2V9c0-1.1,0.9-2,2-2h30c1.1,0,2,0.9,2,2v30C41,40.1,40.1,41,39,41z"
              ></path>
              <path
                d="M41,7h-5.528L20.695,21.777c-0.746,0.746-0.746,1.954,0,2.7l2.828,2.828 c0.746,0.746,1.954,0.746,2.7,0L41,12.528V7z"
                opacity=".018"
              ></path>
              <path
                d="M41,7h-5.4L20.759,21.841c-0.71,0.71-0.71,1.861,0,2.571l2.828,2.828 c0.71,0.71,1.861,0.71,2.571,0L41,12.4V7z"
                opacity=".036"
              ></path>
              <path
                d="M41,7h-5.271L20.823,21.906c-0.675,0.675-0.675,1.768,0,2.443l2.828,2.828 c0.675,0.675,1.768,0.675,2.443,0L41,12.271V7z"
                opacity=".054"
              ></path>
              <path
                d="M41,7h-5.143l-14.97,14.97c-0.639,0.639-0.639,1.675,0,2.314l2.828,2.828 c0.639,0.639,1.675,0.639,2.314,0L41,12.143V7z"
                opacity=".073"
              ></path>
              <path
                d="M41,7h-5.014L20.952,22.034c-0.604,0.604-0.604,1.582,0,2.186l2.828,2.828 c0.604,0.604,1.582,0.604,2.186,0L41,12.014V7z"
                opacity=".091"
              ></path>
              <path
                d="M41,7h-4.885L21.016,22.098c-0.568,0.568-0.568,1.489,0,2.057l2.828,2.828 c0.568,0.568,1.489,0.568,2.057,0L41,11.885V7z"
                opacity=".109"
              ></path>
              <path
                d="M41,7h-4.757L21.081,22.163c-0.533,0.533-0.533,1.396,0,1.928l2.828,2.828 c0.533,0.533,1.396,0.533,1.928,0L41,11.757V7z"
                opacity=".127"
              ></path>
              <path
                d="M41,7h-4.628L21.145,22.227c-0.497,0.497-0.497,1.303,0,1.8l2.828,2.828 c0.497,0.497,1.303,0.497,1.8,0L41,11.628V7z"
                opacity=".145"
              ></path>
              <path
                d="M41,7h-4.5L21.209,22.291c-0.462,0.462-0.462,1.21,0,1.671l2.828,2.828 c0.462,0.462,1.21,0.462,1.671,0L41,11.5V7z"
                opacity=".164"
              ></path>
              <path
                d="M41,7h-4.371L21.273,22.355c-0.426,0.426-0.426,1.117,0,1.543l2.828,2.828 c0.426,0.426,1.117,0.426,1.543,0L41,11.371V7z"
                opacity=".182"
              ></path>
              <path
                d="M41,7h-4.243l-15.42,15.42c-0.391,0.391-0.391,1.024,0,1.414l2.828,2.828 c0.391,0.391,1.024,0.391,1.414,0L41,11.243V7z"
                opacity=".2"
              ></path>
              <path
                fill="#50e6ff"
                d="M36.452,1.379l2.963,2.963L21.338,22.42c-0.391,0.391-0.391,1.024,0,1.414l2.828,2.828	c0.391,0.391,1.024,0.391,1.414,0L43.658,8.585l2.963,2.963C47.13,12.057,48,11.697,48,10.977l0-9.361C48,0.723,47.277,0,46.384,0	l-9.361,0C36.303,0,35.943,0.87,36.452,1.379z"
              ></path>
            </svg>
            {"  "}
            <a class="text-left">
              <div class="-mt-1 font-sans text-sm font-semibold">
               connect with us
              </div>
            </a>
          </a>
        </div>
      </div>
    );
  }
  