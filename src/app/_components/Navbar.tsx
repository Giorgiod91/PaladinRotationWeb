"use client";
import React from "react";

type Props = {};

const Navbar: React.FC<Props> = () => {
  return (
    <div className="navbar mx-auto max-w-7xl bg-black shadow-lg">
      <div className="flex-1">
        <a className="text-3xl font-extrabold text-white transition-transform duration-300 ease-in-out hover:translate-x-2">
          Paladin
          <span className="text-[#FF69B4]">Sim</span>
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal space-x-4 px-1">
          <li className="transition-transform duration-300 ease-in-out hover:scale-110">
            <a className="text-white hover:text-[#FF69B4]" href="#home">
              Home
            </a>
          </li>
          <li className="transition-transform duration-300 ease-in-out hover:scale-110">
            <a className="text-white hover:text-[#FF69B4]" href="#about">
              About
            </a>
          </li>
          <li className="transition-transform duration-300 ease-in-out hover:scale-110">
            <a className="text-white hover:text-[#FF69B4]" href="#stats">
              Simulator
            </a>
          </li>
          <li className="transition-transform duration-300 ease-in-out hover:scale-110">
            <details>
              <summary className="text-[#FF69B4]">More</summary>
              <ul className="bg-black p-2 text-[#FF69B4]">
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
