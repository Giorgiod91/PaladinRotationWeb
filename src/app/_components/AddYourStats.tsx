"use client";
import React, { useState } from "react";
import ShowCode from "./ShowCode";
import SpotlightEffect from "./SpotlightEffect";

type Props = {};

//::TODO:: showcase the user usage with the counter number from the backend !
function AddYourStats({}: Props) {
  const [intellect, setIntellect] = useState<number>(0);
  const [crit, setCrit] = useState<number>(0);
  const [vers, setVers] = useState<number>(0);
  const [HeroTalent, setHeroTalent] = useState<string>("Herald of the Sun");
  const [showCode, setShowCode] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      // Send mainStat in the request body
      await fetch("http://localhost:8080/paladin/setMainStat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mainStat: intellect }),
      });

      // Send crit in the request body
      await fetch("http://localhost:8080/paladin/setCrit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ crit: crit }),
      });

      // Send versatility in the request body
      await fetch("http://localhost:8080/paladin/setVersatility", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ versatility: vers }),
      });

      await fetch("http://localhost:8080/paladin/setCounter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      });

      console.log("Stats updated successfully!");
      setShowCode(true);
    } catch (error) {
      console.error("Error updating stats:", error);
    }
  };

  return (
    <div className="mx-auto max-w-md rounded-lg border-4 border-teal-400 p-6 text-white shadow-lg">
      <SpotlightEffect />
      <h1 className="mb-8 text-center text-4xl font-bold text-teal-400">
        Add Your Stats Here! ✨
      </h1>
      <div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="intellect"
              className="block text-lg font-semibold text-teal-400"
            >
              Intellect: 📚
            </label>
            <input
              type="number"
              id="intellect"
              name="intellect"
              value={intellect}
              onChange={(e) => setIntellect(Number(e.target.value))}
              className="w-full rounded-lg border border-teal-400 bg-gray-800 p-2 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>
          <div>
            <label
              htmlFor="crit"
              className="block text-lg font-semibold text-teal-400"
            >
              Crit: 🎯
            </label>
            <input
              type="number"
              id="crit"
              name="crit"
              value={crit}
              onChange={(e) => setCrit(Number(e.target.value))}
              className="w-full rounded-lg border border-teal-400 bg-gray-800 p-2 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>
          <div>
            <label
              htmlFor="vers"
              className="block text-lg font-semibold text-teal-400"
            >
              Versatility: 🔄
            </label>
            <input
              type="number"
              id="vers"
              name="vers"
              value={vers}
              onChange={(e) => setVers(Number(e.target.value))}
              className="w-full rounded-lg border border-teal-400 bg-gray-800 p-2 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>
          <div>
            <label
              htmlFor="heroTalent"
              className="block text-lg font-semibold text-teal-400"
            >
              Hero Talent: 🌟
            </label>
            <select
              id="heroTalent"
              name="heroTalent"
              onChange={(e) => setHeroTalent(e.target.value)}
              className="w-full rounded-lg border border-teal-400 bg-gray-800 p-2 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
            >
              <option value="Herald of the Sun">Herald of the Sun</option>
              <option value="Lightsmith">Lightsmith</option>
            </select>
          </div>
          <input
            type="submit"
            value="Submit 🚀"
            className="w-full cursor-pointer rounded-lg bg-gradient-to-r from-teal-400 to-teal-300 py-2 text-lg font-semibold text-gray-800 shadow-lg transition-all duration-300 hover:from-teal-300 hover:to-teal-400"
          />
        </form>
      </div>
      <div className="m-3 mt-8">
        <h2 className="mb-4 text-center text-3xl font-extrabold text-teal-400">
          Your Stats 📊
        </h2>
        <p className="text-xl font-semibold text-teal-400">
          Intellect: <span className="text-white">{intellect}</span>
        </p>
        <p className="text-xl font-semibold text-teal-400">
          Crit: <span className="text-white">{crit}</span>
        </p>
        <p className="text-xl font-semibold text-teal-400">
          Versatility: <span className="text-white">{vers}</span>
        </p>
        <p className="text-xl font-semibold text-teal-400">
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
