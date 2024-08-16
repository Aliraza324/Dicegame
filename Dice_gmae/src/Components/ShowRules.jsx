import React from "react";

const ShowRules = () => {
  return (
    <div className="max-w-[800px] border bg-pink-100 rounded-md shadow-md p-3">
      <h1 className="text-2xl font-medium">How to play Dice game</h1>
      <p>Select any number</p>
      <p>Click on dice image</p>
      <p>after click on dice if selected number is equal to dice number you will get same point as dice {" "}</p>
      <p>if you get wrong guess then same  point will be dedcuted on dice</p>
    </div>
  );
};

export default ShowRules;
