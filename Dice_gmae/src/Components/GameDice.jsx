import React from "react";
import { NavLink } from "react-router-dom";

const GameDice = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center flex-col gap-8 p-4">
      <div className="w-full max-w-xs flex justify-center mb-8">
        <img
          src="dices 1.png"
          alt="Dice"
          className="object-contain w-full h-auto max-w-[300px] sm:max-w-[200px]"
        />
      </div>
      <div className="text-center">
        <h1 className="text-[40px] sm:text-[32px] font-bold mb-4">Dice Game</h1>
        <NavLink to="/game-page">
          <button className="py-2 px-4 bg-black text-white rounded-md shadow-md hover:bg-zinc-700 transition">
            Play Now
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default GameDice;
