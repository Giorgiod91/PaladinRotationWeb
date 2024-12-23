"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SpotlightEffect from "./SpotlightEffect";

type Props = {};

function LandingPage({}: Props) {
  const [damage, setDamage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDamage(
        (prevDamage) => prevDamage + Math.floor(Math.random() * 1000) + 500,
      );
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mx-auto flex max-w-7xl overflow-hidden text-gray-300 accent-teal-400 selection:bg-teal-400/50">
      <SpotlightEffect />
      <div className="container mx-auto flex h-screen flex-col space-x-5 p-5 lg:flex-row">
        {/* Left Section */}
        <motion.div
          className="flex w-full flex-col items-center justify-center md:w-1/2"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="mb-10 flex w-full flex-col items-center px-4 text-center lg:mb-0 lg:w-full lg:items-start lg:text-left">
            <motion.h1
              className="mb-4 text-6xl font-extrabold tracking-tight text-gray-300 transition-transform duration-500 ease-in-out hover:translate-x-2 sm:text-7xl md:text-8xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <span>
                <img
                  src="./wowpaladin.PNG"
                  alt="Holy Paladin"
                  className="m-2 inline-block h-20 w-20 object-contain pb-2 pr-2"
                />
              </span>{" "}
              Sim Your Holy Paladin
            </motion.h1>
            <motion.p
              className="mb-8 text-2xl text-teal-400 transition-transform duration-300 ease-in-out hover:translate-x-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              "Channel the Light. Test your strength."
            </motion.p>
            <motion.button
              className="btn btn-wide mb-4 rounded-lg bg-teal-400 px-6 py-2 text-lg font-semibold text-gray-800 shadow-lg transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-teal-300"
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 20px rgba(45, 212, 191, 0.8)",
              }}
              transition={{ duration: 0.3 }}
            >
              <a href="#Stats" className="text-gray-800 no-underline">
                Sim my Char! ⚡
              </a>
            </motion.button>
            <motion.p
              className="text-sm text-teal-400 transition-transform duration-300 ease-in-out hover:translate-x-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              Sim and Improve! 🚀
            </motion.p>
          </div>
        </motion.div>

        {/* Right Section with DPS Simulator */}

        <motion.div
          className="relative flex w-full items-center justify-center md:w-1/2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="w-full max-w-xs rounded-lg border-4 border-gray-300 p-6 shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl md:w-auto">
            <div className="mt-8 text-center">
              <motion.h2
                className="text-4xl font-bold text-gray-300 transition-transform duration-300 ease-in-out hover:translate-y-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
              >
                Current DPS:
              </motion.h2>
              <motion.p
                className="mt-4 text-5xl font-extrabold text-teal-400 transition-transform duration-300 ease-in-out hover:translate-y-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: -20 }}
                transition={{ delay: 0.7, duration: 1 }}
              >
                <span className="tabular-nums">{damage.toLocaleString()}</span>
              </motion.p>
              <a href="">
                <img
                  src="./spell_holy_holybolt35.PNG"
                  alt="Holy Bolt"
                  className="inline-block h-14 w-10 object-contain"
                />
              </a>
              <motion.div
                className="mt-6 flex items-center justify-center space-x-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 1 }}
              >
                <a href="https://emoji.gg/emoji/9612-rolehealer">
                  <img
                    src="https://cdn3.emoji.gg/emojis/9612-rolehealer.png"
                    width="64px"
                    height="64px"
                    alt="RoleHealer"
                    className="transition-transform duration-300 ease-in-out hover:scale-110"
                  />
                </a>
                <img
                  src="/hpal.png"
                  alt="char"
                  className="h-12 w-12 transition-transform duration-300 ease-in-out hover:scale-110"
                />
                <img
                  src="/hammer.png"
                  alt="Light's Grace"
                  className="h-12 w-12 transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default LandingPage;
