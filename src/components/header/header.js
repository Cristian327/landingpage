import React from "react";

const header = () => {
  return (
    <header>
      <div className=" bg-white">
        <div className="container mx-auto">
          <div className="justify-center px-6 my-12">
            <div className="w-full xl:w-4/4 lg:w-11/12">
              <div className="px-14 mb-4 text-center text-midnight pt-12 font-bold">
                <h5 className="text-4xl md:text-7xl mt-8 inline-flex pb-10	">
                  Bring <br />
                  <figure className="w-10 md:ml-14 h-10 md:w-20 md:h-20 rounded-full bg-bubble-gum content-center ">
                    <img
                      src="assets/icons/Arrow 1.png"
                      className="mt-1  md:mt-5 md:ml-4"
                      alt=""
                    />
                  </figure>
                  <div className="h-10 lg:w-96 xl:w-48 md:h-20 rounded-full shadow-lg bg-gradient-to-r from-midnight to-lineargradient">
                    <div className="h-10 lg:w-44 md:h-20 xl:w-3/5 w-3/5  rounded-full shadow-lg  bg-gradient-to-r from-midnight to-lineargradient">
                      <img
                        src="assets/icons/heart.png"
                        alt=""
                        className="ml-20 md:ml-28 h-10 md:h-20"
                      />
                    </div>
                  </div>
                </h5>
                <h5 className="md:mt-10 pb-1 text-4xl md:text-7xl ">
                  <img
                    src="assets/icons/Ellipse 7.png"
                    alt=""
                    className="-mb-16	ml-36 hidden md:block"
                  />
                  <img
                    src="assets/icons/Vector 8.png"
                    alt=""
                    className="-mb-32 hidden md:block pl-44 mt-5 "
                  />
                  <img
                    src="assets/icons/VectorMobile.png"
                    alt=""
                    className="-mb-16 md:hidden mt-5 "
                  />
                  Your Remote <br />
                </h5>
                <div className="float-right hidden md:block  ">
                  <div className="w-52 h-20 -my-16 rounded-full md:shadow-lg bg-gradient-to-r from-midnight to-lineargradient pb-1	">
                    <div className="w-3/5 h-20 rounded-full md:shadow-lg bg-gradient-to-r from-midnight to-lineargradient z-50 ">
                      <img
                        src="assets/icons/emoji.png"
                        alt=""
                        className="-my-2 ml-20 pt-2 hidden md:block"
                      />
                    </div>
                  </div>
                </div>
                <h5 className="mt-8 md:pl-40 text-4xl md:text-7xl">
                  <img
                    src="assets/icons/Ellipse 10.png"
                    alt=""
                    className="-mb-16	ml-36 hidden md:block"
                  />
                  Team Togheter
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col mt-20 text-midnight">
        <div class="container max-w-full px-4">
          <div class="flex flex-wrap justify-center text-center mb-24">
            <div class="w-full lg:w-2/4 px-4">
              <p class="text-gray-700 text-lg font-light">
                <strong>Weware means:</strong> Easy to find knowledge, content
                and proceses. Announcements, team engagement, recognition and
                profiles. 🙌
              </p>
            </div>
          </div>
        </div>
      </div>
      <form className="-mt-14 w-full h-full bg-white rounded flex ">
        <div className="container mx-auto">
          <div className="flex justify-center px-6 my-12">
            <div className="w-full xl:w-3/4 lg:w-11/12">
              <div className="px-8 mb-10 text-center">
                <span className="pt-4 mb-2 text-2xl">
                  <div className=" px-8 mb-4 text-center ">
                    <input
                      className=" px-7 py-2 text-sm leading-tight text-midnight border  rounded-lg shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      placeholder="Your mail address"
                    />
                    <div className="mt-5 md:mt-10">
                      <span className="bg-bermuda md:px-7 px-4 py-2 text-sm  border text-white ml-10 rounded-lg">
                        Get early access
                      </span>
                    </div>
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
