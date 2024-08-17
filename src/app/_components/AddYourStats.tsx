"use client";
import React, { useState } from "react";
import ShowCode from "./ShowCode";
import { set } from "zod";

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
    <div className="mx-auto max-w-md rounded-lg p-6 text-white shadow-lg">
      <h1 className="mb-8 text-center text-4xl font-bold text-[#00B8D9]">
        Add Your Stats Here!
      </h1>
      <div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="intellect"
              className="block text-lg font-semibold text-black"
            >
              Intellect:
            </label>
            <input
              type="number"
              id="intellect"
              name="intellect"
              value={intellect}
              onChange={(e) => setIntellect(Number(e.target.value))}
              className="w-full rounded-lg border border-[#00B8D9] p-2 text-black focus:outline-none focus:ring-2 focus:ring-[#00B8D9]"
            />
          </div>
          <div>
            <label
              htmlFor="crit"
              className="block text-lg font-semibold text-black"
            >
              Crit:
            </label>
            <input
              type="number"
              id="crit"
              name="crit"
              value={crit}
              onChange={(e) => setCrit(Number(e.target.value))}
              className="w-full rounded-lg border border-[#00B8D9] p-2 text-black focus:outline-none focus:ring-2 focus:ring-[#00B8D9]"
            />
          </div>
          <div>
            <label
              htmlFor="vers"
              className="block text-lg font-semibold text-black"
            >
              Vers:
            </label>
            <input
              type="number"
              id="vers"
              name="vers"
              value={vers}
              onChange={(e) => setVers(Number(e.target.value))}
              className="w-full rounded-lg border border-[#00B8D9] p-2 text-black focus:outline-none focus:ring-2 focus:ring-[#00B8D9]"
            />
          </div>
          <select
            onChange={(e) => setHeroTalent(e.target.value)}
            className="w-full rounded-lg border border-[#00B8D9] p-2 text-black focus:outline-none focus:ring-2 focus:ring-[#00B8D9]"
          >
            <option value="Herald of the Sun">Herald of the Sun</option>
            <option value="Lightsmith">Lightsmith</option>
          </select>
          <input
            type="submit"
            value="Submit"
            className="w-full cursor-pointer rounded-lg bg-gradient-to-r from-[#00B8D9] to-[#00A5C4] py-2 text-lg font-semibold shadow-lg transition-all duration-300 hover:from-[#00A5C4] hover:to-[#00B8D9]"
          />
        </form>
      </div>
      <div className="m-3 mt-8">
        <h2 className="mb-4 text-center text-3xl font-extrabold text-[#00B8D9]">
          Your Stats
        </h2>
        <p className="text-xl font-semibold text-black">
          Intellect: <span className="text-black">{intellect}</span>
        </p>
        <p className="text-xl font-semibold text-black">
          Crit: <span className="text-black">{crit}</span>
        </p>
        <p className="text-xl font-semibold text-black">
          Vers: <span className="text-black">{vers}</span>
        </p>
        <p className="text-xl font-semibold text-black">
          Talent: <span className="text-black">{HeroTalent}</span>
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
