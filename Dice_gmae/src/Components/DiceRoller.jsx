import React, { useState } from "react";
import ShowRules from "./ShowRules";

const DiceRoller = ({ updateScore, resetScore }) => {
  const [currentDice, setCurrentDice] = useState(1);
  const [showRule, setShowRule] = useState(false);

  const numberGenerater = (min, max) => {
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    setCurrentDice(randomNum);
    updateScore(randomNum);
  };

  return (
    <div className="flex items-center justify-center py-4 flex-col gap-3">
      <div
        className="cursor-pointer"
        onClick={() => numberGenerater(1, 6)}
      >
        <img
          src={`dice_${currentDice}.png`}
          alt={`Dice showing ${currentDice}`}
          className="h-40 w-40"
        />
      </div>
      <p className="font-medium">Click on Dice to roll</p>
      <button
        className="px-7 py-2 border rounded-md shadow-md"
        onClick={resetScore}
      >
        Reset Score
      </button>
      <button
        className="px-7 py-2 border bg-black text-white rounded-md shadow-md"
        onClick={() => setShowRule(!showRule)} 
      >
        {showRule ? 'Hide Rules' : 'Show Rules'}
      </button>
      {showRule && <ShowRules />}
    </div>
  );
};

export default DiceRoller;
