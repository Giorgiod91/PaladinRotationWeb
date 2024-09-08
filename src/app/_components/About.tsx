"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <div className="relative bg-black py-20 text-white">
      <div className="container mx-auto px-5 lg:px-20">
        <motion.h2
          className="mb-10 text-center text-5xl font-extrabold text-[#FF69B4]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          About This Project ✨
        </motion.h2>
        <motion.div
          className="space-y-6 text-lg leading-relaxed text-white"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeInOut" }}
        >
          <p>
            This project was created out of a need for a reliable tool to
            simulate Holy Paladin characters in World of Warcraft. While there
            are many tools available for other classes, I found that there was a
            lack of dedicated simulators specifically tailored for Holy
            Paladins.
          </p>
          <p>
            As a passionate player, I wanted to create something that would not
            only help me improve my gameplay but also assist others in the
            community who share the same goals. Using Java, I developed a
            backend engine that accurately models the complex interactions of a
            Holy Paladin's abilities and stats.
          </p>
          <p>
            My aim is to provide a platform that allows players to test and
            optimize their builds, ensuring they can perform at their best in
            raids and dungeons. This project is continuously evolving, and I’m
            excited to keep improving it based on feedback from the community.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
