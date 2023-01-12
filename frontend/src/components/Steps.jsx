import React from "react";

const Steps = () => {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-10 mt-10 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
              DEVFOLIO
            </h2>
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              4 simple steps to Follow
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            We have designed this process to be simple and easy to follow, so you can quickly get your portfolio site.
            </p>
          </div>
          <div class="flex flex-wrap">
            <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60 grid justify-between">
              <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                1.Select a Template
              </h2>
              <p class="leading-relaxed text-base mb-4">
                You can Preview and Choose Templates from section below
              </p>
              <a class="text-indigo-500 inline-flex items-center">
                next
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60 grid justify-between">
              <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                2.Fill all your details
              </h2>
              <p class="leading-relaxed text-base mb-4">
                All these details that you provide us will be reflected in your
                portfolio, we also offer to customize your details even after
                your purchase
              </p>
              <a class="text-indigo-500 inline-flex items-center">
                next
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60 grid justify-between">
              <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                3.Payment
              </h2>
              <p class="leading-relaxed text-base mb-4">
                please write back to us if you have any difficulty in payment
                process
              </p>
              <a class="text-indigo-500 inline-flex items-center">
                next
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60 grid justify-between">
              <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                4.Get Your Portfolio
              </h2>
              <p class="leading-relaxed text-base mb-4">
                We generate a portfolio with your selected template and details,
                you will be provided with a sharable link to your own portfolio
                via your mail in 1-3 working days.
              </p>
              <a class="text-indigo-500 inline-flex items-center">Finish</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Steps;
