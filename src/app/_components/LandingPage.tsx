import React from "react";

type Props = {};

function LandingPage({}: Props) {
  return (
    <div data-theme="" className="h-screen">
      <div className="container mx-auto flex h-screen flex-col space-x-5 p-5 lg:flex-row">
        <div className="flex w-full flex-col items-center justify-center md:w-1/2">
          <div>
            <div className="mb-10 flex w-full flex-col items-center px-4 text-center lg:mb-0 lg:w-full lg:items-start lg:text-left">
              <h1 className="mb-4 bg-clip-text text-5xl font-black tracking-tight text-transparent drop-shadow-xl sm:text-6xl md:text-7xl">
                Sim Your Paladin
              </h1>
              <p className="mb-8 text-xl">
                i made a tool to simulate your dps as a paladin in world of
                warcraft
              </p>
              <button className="btn btn-wide mb-4">
                <a href="#Stats">Sim my Char!</a>
              </button>
              <p className="text-sm">adding more functionality soon...</p>
              <div className="mt-2 flex justify-center"></div>

              <div className="mt-2 flex justify-center"></div>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center justify-center md:w-1/2">
          <div className="border-primary w-full rounded-lg border shadow-xl md:w-auto">
            <img
              src="https://www.wowhead.com/images/wow/icons/large/inv_sword_48.jpg"
              alt="paladin"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
