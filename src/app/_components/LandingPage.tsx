"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
    <div className="relative h-screen overflow-hidden text-[#6B7280]">
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
              className="mb-4 text-6xl font-extrabold tracking-tight text-[#00B8D9] transition-transform duration-500 ease-in-out hover:translate-x-2 sm:text-7xl md:text-8xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <span>
                <img
                  src="./paladin75.PNG"
                  alt=""
                  className="inline-block w-16"
                />
              </span>{" "}
              Sim Your Holy Paladin
            </motion.h1>
            <motion.p
              className="mb-8 text-2xl transition-transform duration-300 ease-in-out hover:translate-x-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              "Channel the Light. Test your strength."
            </motion.p>
            <motion.button
              className="btn btn-wide mb-4 rounded-lg bg-[#00B8D9] px-6 py-2 text-lg font-semibold text-white shadow-lg transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-[#00A5C4]"
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 20px rgba(0, 184, 217, 0.8)",
              }}
              transition={{ duration: 0.3 }}
            >
              <a href="#Stats" className="text-white no-underline">
                Sim my Char! ⚡
              </a>
            </motion.button>
            <motion.p
              className="text-sm transition-transform duration-300 ease-in-out hover:translate-x-1"
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
          <div className="w-full max-w-xs rounded-lg border-4 border-[#00B8D9] p-6 shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl md:w-auto">
            <div className="mt-8 text-center">
              <motion.h2
                className="text-4xl font-bold text-[#00B8D9] transition-transform duration-300 ease-in-out hover:translate-y-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
              >
                Current DPS:
              </motion.h2>
              <motion.p
                className="mt-4 text-5xl font-extrabold text-[#00B8D9] transition-transform duration-300 ease-in-out hover:translate-y-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: -20 }}
                transition={{ delay: 0.7, duration: 1 }}
              >
                {damage.toLocaleString()}{" "}
                <a href="">
                  <img
                    src="./spell_holy_holybolt35.PNG"
                    alt=""
                    className="inline-block w-16"
                  />
                </a>
              </motion.p>
              <motion.div
                className="mt-6 flex items-center justify-center space-x-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 1 }}
              >
                <img
                  src="https://www.wowhead.com/images/wow/icons/large/inv_sword_48.jpg"
                  alt="Sword"
                  className="h-12 w-12 transition-transform duration-300 ease-in-out hover:scale-110"
                />
                <img
                  src="https://www.wowhead.com/images/wow/icons/large/inv_shield_06.jpg"
                  alt="Shield"
                  className="h-12 w-12 transition-transform duration-300 ease-in-out hover:scale-110"
                />
                <img
                  src="https://www.wowhead.com/images/wow/icons/large/spell_holy_lightsgrace.jpg"
                  alt="Light's Grace"
                  className="h-12 w-12 transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Starry Background Animation */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full overflow-hidden">
        <motion.div
          className="starry-bg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        />
      </div>
    </div>
  );
}

export default LandingPage;
