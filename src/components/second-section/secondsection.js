import React from "react";

const secondsection = () => {
  return (
    <section>
      {/* Aside right text and left image */}
      <div className="items-center flex flex-wrap align-middle ">
        <figure className="flex">
          <div className=" w-48 h-16 ">
            <img src="assets/img/chat.png" className="ml-40 z-10 " />
          </div>
          <div className="w-full md:w-11/12/ ml-auto mr-auto px-4">
            <img
              alt="..."
              className="max-w-7xl -z-0 "
              src="assets/img/Announcements.png"
            />
          </div>
        </figure>

        <div className="w-full md:w-4/12 ml-auto mr-auto px-4 items-center mb-40">
          <div className="md:pr-12">
            <div className=" inline-flex items-center justify-center w-16 h-16 mb-6 mt-8 ">
              <img src="assets/icons/star-green.png" alt="" className="mr-48" />
            </div>
            <h3 className="text-3xl font-semibold  text-midnight">
              Announcements{" "}
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-midnight">
              Announcements Your entire team in one place, with Engage your team
              with company wide announcements that entice engagement. The team
              homepage reveals everything going on with your team.
            </p>
          </div>
        </div>
      </div>

      {/* Aside left text and right image */}

      <div className="items-center flex flex-wrap align-middle ">
        <div className="w-full md:w-3/12  mr-auto px-4 items-center ml-40 mb-20">
          <div className="md:pr-1">
            <h3 className="text-3xl font-semibold  text-midnight">
              Announcements{" "}
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-midnight">
              Announcements Your entire team in one place, with Engage your team
              with company wide announcements that entice engagement. The team
              homepage reveals everything going on with your team.
            </p>
          </div>
        </div>

        <figure className="flex">
          <div className="w-full md:w-4/5  ml-auto mr-auto px-4">
            <img
              alt="..."
              className="md:max-w-xl -z-0 "
              src="assets/img/Announcements.png"
            />
          </div>
          <div className=" inline-flex items-center justify-center w-16 h-16 mb-6 mt-8 ">
            <img src="assets/icons/star-green.png" alt="" className="mr-48" />
          </div>
          <div className="grid justify-items w-16 h-16 mb-6 mt-40">
            <img
              src="assets/icons/Ellipseorange.png"
              alt=""
              className="-ml-40"
            />
          </div>
        </figure>
      </div>

      {/* Aside right text and left image */}

      <div className="items-center flex flex-wrap align-middle ">
        <figure className="flex">
          <div className=" w-48 h-16 ">
            <img src="assets/img/chat.png" className="ml-40 z-10 " />
          </div>
          <div className="w-full md:w-11/12/ ml-auto mr-auto px-4">
            <img
              alt="..."
              className="max-w-7xl -z-0 "
              src="assets/img/Announcements.png"
            />
          </div>
        </figure>

        <div className="w-full md:w-4/12 ml-auto mr-auto px-4 items-center mb-40">
          <div className="md:pr-12">
            <div className=" inline-flex items-center justify-center w-16 h-16 mb-6 mt-8 ">
              <img src="assets/icons/star-green.png" alt="" className="mr-48" />
            </div>
            <h3 className="text-3xl font-semibold  text-midnight">
              Announcements{" "}
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-midnight">
              Announcements Your entire team in one place, with Engage your team
              with company wide announcements that entice engagement. The team
              homepage reveals everything going on with your team.
            </p>
          </div>
        </div>
      </div>
      {/* Aside left text and right image */}

      <div className="items-center flex flex-wrap align-middle ">
        <div className="w-full md:w-3/12  mr-auto px-4 items-center ml-40 mb-20">
          <div className="md:pr-1">
            <h3 className="text-3xl font-semibold  text-midnight">
              Announcements{" "}
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-midnight">
              Announcements Your entire team in one place, with Engage your team
              with company wide announcements that entice engagement. The team
              homepage reveals everything going on with your team.
            </p>
          </div>
        </div>

        <figure className="flex">
          <div className="w-full md:w-4/5  ml-auto mr-auto px-4">
            <img
              alt="..."
              className="md:max-w-xl -z-0 "
              src="assets/img/Announcements.png"
            />
          </div>
          <div className=" inline-flex items-center justify-center w-16 h-16 mb-6 mt-8 ">
            <img src="assets/icons/star-green.png" alt="" className="mr-48" />
          </div>
          <div className="grid justify-items w-16 h-16 mb-6 mt-40">
            <img
              src="assets/icons/Ellipseorange.png"
              alt=""
              className="-ml-40"
            />
          </div>
        </figure>
      </div>

      <div className="flex flex-col mt-20 text-midnight">
        <div className="container max-w-full px-8">
          <div className="flex flex-wrap justify-center text-center mb-24">
            <div className="w-full lg:w-1/3 px-6">
              <p className="text-lg font-light">
                “We've had less confusion with task responsibilities and
                deadlines, which has increased productivity and efficiency.”
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Item person */}
      <div className="flex flex-col bg-white shadow-lg rounded lg:w-1/5  md:w-3/5 w-full p-5 mx-auto ">
        <div class="flex gap-3 items-center font-semibold  p-3 hover:bg-gray-100 rounded-md hover:cursor-pointer">
          <img
            class="w-10 h-10 rounded-full"
            src="https://randomuser.me/api/portraits/women/24.jpg"
            alt="Rebecca Burke"
          />
          <div class="flex flex-col">
            <div>Rebecca Burke</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default secondsection;
