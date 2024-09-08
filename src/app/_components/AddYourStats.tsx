"use client";
import React, { useState } from "react";
import ShowCode from "./ShowCode";
import { set } from "zod";
import SpotlightEffect from "./SpotlightEffect";

type Props = {};

function AddYourStats({}: Props) {
  const [intellect, setIntellect] = useState<number>(0);
  const [crit, setCrit] = useState<number>(0);
  const [vers, setVers] = useState<number>(0);
  const [HeroTalent, setHeroTalent] = useState<string>("Herald of the Sun");
  const [showCode, setShowCode] = useState<boolean>(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setShowCode(true);
  };

  return (
    <div className="mx-auto max-w-md rounded-lg border-4 border-[#FF69B4] bg-black p-6 text-white shadow-lg">
      <SpotlightEffect />
      <h1 className="mb-8 text-center text-4xl font-bold text-[#FF69B4]">
        Add Your Stats Here! ✨
      </h1>
      <div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="intellect"
              className="block text-lg font-semibold text-[#FF69B4]"
            >
              Intellect: 📚
            </label>
            <input
              type="number"
              id="intellect"
              name="intellect"
              value={intellect}
              onChange={(e) => setIntellect(Number(e.target.value))}
              className="w-full rounded-lg border border-[#FF69B4] bg-gray-800 p-2 text-white focus:outline-none focus:ring-2 focus:ring-[#FF69B4]"
            />
          </div>
          <div>
            <label
              htmlFor="crit"
              className="block text-lg font-semibold text-[#FF69B4]"
            >
              Crit: 🎯
            </label>
            <input
              type="number"
              id="crit"
              name="crit"
              value={crit}
              onChange={(e) => setCrit(Number(e.target.value))}
              className="w-full rounded-lg border border-[#FF69B4] bg-gray-800 p-2 text-white focus:outline-none focus:ring-2 focus:ring-[#FF69B4]"
            />
          </div>
          <div>
            <label
              htmlFor="vers"
              className="block text-lg font-semibold text-[#FF69B4]"
            >
              Versatility: 🔄
            </label>
            <input
              type="number"
              id="vers"
              name="vers"
              value={vers}
              onChange={(e) => setVers(Number(e.target.value))}
              className="w-full rounded-lg border border-[#FF69B4] bg-gray-800 p-2 text-white focus:outline-none focus:ring-2 focus:ring-[#FF69B4]"
            />
          </div>
          <div>
            <label
              htmlFor="heroTalent"
              className="block text-lg font-semibold text-[#FF69B4]"
            >
              Hero Talent: 🌟
            </label>
            <select
              id="heroTalent"
              name="heroTalent"
              onChange={(e) => setHeroTalent(e.target.value)}
              className="w-full rounded-lg border border-[#FF69B4] bg-gray-800 p-2 text-white focus:outline-none focus:ring-2 focus:ring-[#FF69B4]"
            >
              <option value="Herald of the Sun">Herald of the Sun</option>
              <option value="Lightsmith">Lightsmith</option>
            </select>
          </div>
          <input
            type="submit"
            value="Submit 🚀"
            className="w-full cursor-pointer rounded-lg bg-gradient-to-r from-[#FF69B4] to-[#FF1493] py-2 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:from-[#FF1493] hover:to-[#FF69B4]"
          />
        </form>
      </div>
      <div className="m-3 mt-8">
        <h2 className="mb-4 text-center text-3xl font-extrabold text-[#FF69B4]">
          Your Stats 📊
        </h2>
        <p className="text-xl font-semibold text-[#FF69B4]">
          Intellect: <span className="text-white">{intellect}</span>
        </p>
        <p className="text-xl font-semibold text-[#FF69B4]">
          Crit: <span className="text-white">{crit}</span>
        </p>
        <p className="text-xl font-semibold text-[#FF69B4]">
          Versatility: <span className="text-white">{vers}</span>
        </p>
        <p className="text-xl font-semibold text-[#FF69B4]">
          Talent: <span className="text-white">{HeroTalent}</span>
        </p>
      </div>
      <div className="m-3">
        {/* ShowCode Component */}
        {showCode && <ShowCode />}
      </div>
    </div>
  );
}

export default AddYourStats;
