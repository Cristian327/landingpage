import React from "react";

const header = () => {
  return (
    <header>
      <div className=" bg-white">
        <div className="container mx-auto">
          <div className="flex justify-center px-6 my-12">
            <div className="w-full xl:w-3/4 lg:w-11/12">
              <div className="px-8 mb-4 text-center text-7xl text-midnight pt-12  font-bold">
                <h5 className="pr-96 mt-8 flex">
                  Bring <br />
                  <figure className="w-20 h-20 rounded-full bg-bubble-gum content-center ">
                    <svg
                      className="mt-5 ml-4"
                      width="44"
                      height="33"
                      viewBox="0 0 44 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.29053 14.0806C1.08797 14.0806 0.113108 15.0555 0.113108 16.2581C0.113108 17.4606 1.08797 18.4355 2.29053 18.4355V14.0806ZM43.0237 17.7977C43.8741 16.9474 43.8741 15.5687 43.0237 14.7184L29.1667 0.861376C28.3164 0.0110416 26.9377 0.0110416 26.0874 0.861376C25.2371 1.71171 25.2371 3.09038 26.0874 3.94071L38.4047 16.2581L26.0874 28.5754C25.2371 29.4257 25.2371 30.8044 26.0874 31.6547C26.9377 32.5051 28.3164 32.5051 29.1667 31.6547L43.0237 17.7977ZM2.29053 18.4355H41.4841V14.0806H2.29053V18.4355Z"
                        fill="#00004F"
                      />
                    </svg>
                  </figure>
                  <div className="w-20 h-20 rounded-full bg-bubble-gum content-center flex-1"></div>
                </h5>
                <h5 className="mt-8">
                  Your Remote <br />
                </h5>
                <h5 className="mt-8 pl-40"> Team Togheter</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <form className="py-6 w-full h-full bg-white rounded flex ">
        <div className="container mx-auto">
          <div className="flex justify-center px-6 my-12">
            <div className="w-full xl:w-3/4 lg:w-11/12">
              <div className="px-8 mb-4 text-center">
                <span className="pt-4 mb-2 text-2xl">
                  <div className=" px-8 mb-4 text-center ">
                    <input
                      className=" px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      placeholder="Enter Email Address..."
                    />
                    Reset Password
                  </div>
                  <div className="px-8 mb-4 text-center ">
                    <button
                      className="w-full px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-700 focus:outline-none focus:shadow-outline"
                      type="button"
                    >
                      Reset Password
                    </button>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </form>
    </header>
  );
};

export default header;
