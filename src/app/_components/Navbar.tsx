"use client";
import React from "react";

type Props = {};

const Navbar: React.FC<Props> = () => {
  return (
    <div className="navbar max-w-7xl bg-transparent text-[#00B8D9] shadow-lg">
      <div className="flex-1">
        <a className="text-3xl font-extrabold transition-transform duration-300 ease-in-out hover:translate-x-2">
          PaladinSim
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal space-x-4 px-1">
          <li className="transition-transform duration-300 ease-in-out hover:scale-110">
            <a href="#home">Home</a>
          </li>
          <li className="transition-transform duration-300 ease-in-out hover:scale-110">
            <a href="#about">About</a>
          </li>
          <li className="transition-transform duration-300 ease-in-out hover:scale-110">
            <a href="#simulator">Simulator</a>
          </li>
          <li className="transition-transform duration-300 ease-in-out hover:scale-110">
            <details>
              <summary>More</summary>
              <ul className="bg-transparent p-2 text-[#6B7280]">
                <li className="transition-transform duration-300 ease-in-out hover:translate-x-2">
                  <a href="#faq">FAQ</a>
                </li>
                <li className="transition-transform duration-300 ease-in-out hover:translate-x-2">
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
