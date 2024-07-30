"use client";
import React, { useState } from "react";

type Props = {};

function AddYourStats({}: Props) {
  const [intellect, setIntellect] = useState<number>(0);
  const [crit, setCrit] = useState<number>(0);
  const [vers, setVers] = useState<number>(0);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <div>
      <h1>Add Your Stats Here!</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="intellect">Intellect:</label>
          <input
            type="number"
            id="intellect"
            name="intellect"
            value={intellect}
            onChange={(e) => setIntellect(Number(e.target.value))}
          />
          <label htmlFor="crit">Crit:</label>
          <input
            type="number"
            id="crit"
            name="crit"
            value={crit}
            onChange={(e) => setCrit(Number(e.target.value))}
          />
          <label htmlFor="vers">Vers:</label>
          <input
            type="number"
            id="vers"
            name="vers"
            value={vers}
            onChange={(e) => setVers(Number(e.target.value))}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
      <div>
        <h2>Your Stats</h2>
        <p>Intellect: {intellect}</p>
        <p>Crit: {crit}</p>
        <p>Vers: {vers}</p>
      </div>
    </div>
  );
}

export default AddYourStats;
