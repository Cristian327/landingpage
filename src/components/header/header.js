import React from "react";

const header = () => {
  return (
    <header>
      <div className=" bg-white">
        <div className="container mx-auto">
          <div className="justify-center px-6 my-12">
            <div className="w-full xl:w-4/4 lg:w-11/12">
              <div className="px-14 mb-4 text-center text-7xl text-midnight pt-12 font-bold">
                <h5 className="px-10 mt-8 inline-flex	pb-1	">
                  Bring <br />
                  <figure className="w-20 h-20 rounded-full bg-bubble-gum content-center ">
                    <img
                      src="assets/icons/Arrow 1.png"
                      className="mt-5 ml-4"
                      alt=""
                    />
                  </figure>
                  <div className=" h-20 rounded-full shadow-lg z-0  bg-gradient-to-r from-midnight to-lineargradient xl:w-1/3 lg:w-3/12  ">
                    <div className=" w-3/5 h-20 rounded-full shadow-lg  bg-gradient-to-r from-midnight to-lineargradient z-50 ">
                      <img
                        src="assets/icons/heart.png"
                        alt=""
                        className="ml-36"
                      />
                    </div>
                  </div>
                </h5>
                <h5 className="px-1 mt-8  pb-1">
                  <img
                    src="assets/icons/Ellipse 7.png"
                    alt=""
                    className="-mb-16	ml-36 "
                  />
                  <img
                    src="assets/icons/Vector 8.png"
                    alt=""
                    className="-mb-32 pl-44 mt-5"
                  />
                  Your Remote <br />
                  <div className="float-right">
                    <div className="w-52 h-20 -my-16 rounded-full shadow-lg bg-gradient-to-r from-midnight to-lineargradient pb-1	">
                      <div className=" w-3/5 h-20 rounded-full shadow-lg bg-gradient-to-r from-midnight to-lineargradient z-50 ">
                        <img
                          src="assets/icons/emoji.png"
                          alt=""
                          className="-my-2 ml-20 pt-2"
                        />
                      </div>
                    </div>
                  </div>
                </h5>
                <h5 className="mt-8 pl-40">
                  <img
                    src="assets/icons/Ellipse 10.png"
                    alt=""
                    className="-mb-16	ml-36 after:content-['.']"
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
              <div className="px-8 mb-4 text-center">
                <span className="pt-4 mb-2 text-2xl">
                  <div className=" px-8 mb-4 text-center ">
                    <input
                      className=" px-7 py-2 text-sm leading-tight text-midnight border  rounded-lg shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      placeholder="Your mail address"
                    />
                    <span className="bg-bermuda px-7 py-2 text-sm  border text-white ml-10 rounded-lg">
                      Get early access
                    </span>
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
