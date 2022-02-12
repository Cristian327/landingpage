import React from "react";

const main = () => {
  return (
    <main>
      <div className="max-w-2xl mx-auto">
        <div className="p-4 w-full text-center bg-white sm:p-8 ">
          <div className="justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            <img
              src="assets/icons/Add topics.png"
              alt=""
              className="hidden md:block"
            />

            <a
              href="#"
              className="min-w-full sm:w-auto flex bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
            >
              <img src="assets/img/Screenpage.png" alt="" />
            </a>
            <img
              src="assets/icons/Activate .png"
              alt=""
              className="hidden md:block"
            />
            <div className="mobile-items">
              <img
                src="assets/icons/Activate mobile.png"
                alt=""
                className="block md:hidden"
              />
              <svg
                width="27"
                height="3"
                viewBox="0 0 27 3"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="block md:hidden"
              >
                <path
                  d="M25.0882 1.33659C19.4822 1.33659 17.4706 1.33659 12.5294 1.33659C9.96032 1.33659 7.707 1.58831 5.14051 1.58831C3.74948 1.58831 2.38467 1.79419 0.999991 1.79419"
                  stroke="#00004F"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>

              <img
                src="assets/icons/Add topics mobile.png"
                alt=""
                className="block md:hidden"
              />
              <svg
                width="27"
                height="3"
                viewBox="0 0 27 3"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="block md:hidden"
              >
                <path
                  d="M25.0882 1.33659C19.4822 1.33659 17.4706 1.33659 12.5294 1.33659C9.96032 1.33659 7.707 1.58831 5.14051 1.58831C3.74948 1.58831 2.38467 1.79419 0.999991 1.79419"
                  stroke="#00004F"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>

              <img
                src="assets/icons/Add mobile.png"
                alt=""
                className="block md:hidden"
              />
            </div>
          </div>
          <img
            src="assets/icons/Description.png"
            alt=""
            className="hidden md:block"
          />
        </div>
      </div>
      <div className=" mt-20 text-midnight">
        <div className="container max-w-full px-4">
          <h3 className="mb-10 text-2xl font-bold text-center">
            Distributed teams brought together
          </h3>
          <div className="max-w-xl mx-auto flex flex-wrap justify-center  md:grid grid-cols-6 gap-6 mb-10">
            <img
              src="assets/img/betterworks.png"
              alt=""
              className="w-24 h-8 ml-5"
            />
            <img src="assets/img/bucket.png" alt="" className="w-24 h-8 ml-5" />
            <img
              src="assets/img/hyperia.png"
              alt=""
              className="w-24 h-8 ml-5"
            />
            <img
              src="assets/img/leapcure.png"
              alt=""
              className="w-24 h-8 ml-5"
            />
            <img src="assets/img/luna.png" alt="" className="w-24 h-8 ml-5" />
            <img src="assets/img/mesh.png" alt="" className="w-24 h-8 ml-5" />
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-20 text-midnight">
        <div className="container max-w-full px-4">
          <div className="flex flex-wrap justify-center text-center mb-24">
            <div className="w-full lg:w-2/4 px-4">
              <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                Engage your remote team
              </h3>
              <p className="text-gray-700 text-lg font-light">
                Remote work is challenging when knowledge is spread across
                slack, emails, documents and spreadsheets. It is especially
                challenging when trying to find information and engage with your
                remote team.
              </p>
              <br />
              <p className="text-gray-700 text-lg font-light">
                <strong>Weware solves all that.</strong> Create your team
                directory with profiles, share company announcements, create
                knowledge wiki where you share important information and
                processes. Best of all, weware is also a place to engage and
                recognize effort.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default main;
