import React from "react";

const form = () => {
  return (
    <div>
      <div className="py-6 mb-10">
        <div className="block md:flex bg-gradient-to-r from-gradientbanner to-gradientbannerfinal rounded-lg shadow-lg overflow-hidden h-80 mx-auto max-w-sm lg:max-w-6xl">
          <img
            className="h-36 md:h-full lg:block lg:w-1/2 bg-cover"
            src="assets/img/img-banner-form.png"
          />
          <div className="flex flex-col w-full md:pt-28 items-center justify-center h-44">
            <form className="rounded-md md:py-10 px-12 ">
              <p className="text-xl mt-2 text-center font-semibold ">
                Interested in early access? Join the waitlist
              </p>
              <h1 className="text-xl mt-2 text-center font-semibold ">
                (releasing Q1 2022){" "}
              </h1>
              <div className="mt-6 flex space-x-4 m-10 justify-center">
                <input
                  placeholder="write her..."
                  className=" rounded-md py-2 px-4 border-2 outline-none"
                />
                <button className="bg-yellow-400 px-4 rounded-md font-semibold">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default form;
