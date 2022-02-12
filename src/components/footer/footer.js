import React from "react";

const footer = () => {
  return (
    <>
      <section className="block text-center md:flex md:text-left mb-10">
        <div className="items-center align-middle ">
          <div className="w-full md:w-10/12  mr-auto px-4 items-center md:ml-40 ">
            <div className="md:pr-1">
              <h3 className="font-semibold text-xl  text-midnight">
                Sign up for product updates:{" "}
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-midnight">
                Ullamcorper orci, eu venenatis ac euismod vel purus tortor
                rhoncus mauri.
              </p>
            </div>
          </div>
        </div>
        <form className="w-full h-3/4 bg-white rounded items-center align-middle md:mt-10">
          <div className="container mx-auto">
            <div className="flex justify-center text-center">
              <div className="w-2/4 md:w-3/4 lg:w-10/12">
                <span className=" mb-2 text-2xl">
                  <input
                    className=" px-7 py-2 text-sm leading-tight text-midnight border  rounded-lg shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Your mail address"
                  />
                  <span className="bg-bermuda px-7 py-2 text-sm  border text-white ml-10 rounded-lg">
                    Get early access
                  </span>
                </span>
              </div>
            </div>
          </div>
        </form>
      </section>
      <footer>
        <div className="bg-gray-100">
          <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-center">
            <div className="p-5 w-48 ">
              <div className="text-xs uppercase text-gray-500 font-medium">
                Home
              </div>
              <a className="my-3 block" href="/#">
                Services <span className="text-teal-600 text-xs p-1"></span>
              </a>
              <a className="my-3 block" href="/#">
                Products <span className="text-teal-600 text-xs p-1"></span>
              </a>
              <a className="my-3 block" href="/#">
                About Us <span className="text-teal-600 text-xs p-1"></span>
              </a>
              <a className="my-3 block" href="/#">
                Pricing <span className="text-teal-600 text-xs p-1"></span>
              </a>
              <a className="my-3 block" href="/#">
                Partners <span className="text-teal-600 text-xs p-1">New</span>
              </a>
            </div>
            <div className="p-5 w-48 ">
              <div className="text-xs uppercase text-gray-500 font-medium">
                User
              </div>
              <a className="my-3 block" href="/#">
                Sign in <span className="text-teal-600 text-xs p-1"></span>
              </a>
              <a className="my-3 block" href="/#">
                New Account <span className="text-teal-600 text-xs p-1"></span>
              </a>
              <a className="my-3 block" href="/#">
                Demo <span className="text-teal-600 text-xs p-1">New</span>
              </a>
              <a className="my-3 block" href="/#">
                Career{" "}
                <span className="text-teal-600 text-xs p-1">We're hiring</span>
              </a>
              <a className="my-3 block" href="/#">
                Surveys <span className="text-teal-600 text-xs p-1">New</span>
              </a>
            </div>

            <div className="p-5 w-48 ">
              <div className="text-xs uppercase text-gray-500 font-medium">
                Support
              </div>
              <a className="my-3 block" href="/#">
                Help Center <span className="text-teal-600 text-xs p-1"></span>
              </a>
              <a className="my-3 block" href="/#">
                Privacy Policy{" "}
                <span className="text-teal-600 text-xs p-1"></span>
              </a>
              <a className="my-3 block" href="/#">
                Conditions <span className="text-teal-600 text-xs p-1"></span>
              </a>
            </div>
            <div className="p-5 w-48 md:ml-64">
              <div className="text-xs uppercase text-gray-500 font-medium">
                Contact us
              </div>
              <a className="my-3 block" href="/#">
                XXX XXXX, Floor 4 San Francisco, CA{" "}
                <span className="text-teal-600 text-xs p-1"></span>
              </a>
              <a className="my-3 block" href="/#">
                contact@company.com{" "}
                <span className="text-teal-600 text-xs p-1"></span>
              </a>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 pt-2 ">
          <div
            className="flex pb-5 px-3 m-auto pt-5 border-t text-gray-800 text-sm flex-col
      md:flex-row max-w-6xl"
          >
            <div className="mt-2">© 2021 Weware Co. Built with 💙 by</div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default footer;
