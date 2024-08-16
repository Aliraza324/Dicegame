import React, { useState } from 'react';
import DiceRoller from './DiceRoller';

const GamePage = () => {
  const arr = [1, 2, 3, 4, 5, 6];
  const [selected, setSelected] = useState();
  const [totalScore, setTotalScore] = useState(0);
  const [error, setError] = useState('');

  const updateScore = (rolledValue) => {
    if (selected === undefined) {
      setError('Please select a number first!');
      return;
    }
    setError('');
    if (rolledValue === selected) {
      setTotalScore((prevScore) => prevScore + rolledValue);
    } else {
      setTotalScore((prevScore) => prevScore - rolledValue);
    }
  };

  const resetScore = () => {
    setTotalScore(0);
    setSelected(undefined); 
  };

  return (
    <div className='w-full h-full flex flex-col items-center p-4'>
      <div className='w-full max-w-4xl flex flex-col md:flex-row items-center justify-around py-4'>
        <div className="flex items-center justify-center flex-col mb-4 md:mb-0">
          <p className="text-4xl md:text-5xl font-medium">{totalScore}</p>
          <p className='text-lg md:text-xl'>Total Score</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 p-4">
          <div className='flex flex-wrap gap-2 justify-center'>
            {arr.map((value, i) => (
              <div
                key={i}
                className={`flex items-center justify-center w-12 h-12 md:w-16 md:h-16 border ${selected === value ? 'bg-black text-white' : 'bg-white'}`}
                onClick={() => setSelected(value)}
              >
                <p className="text-lg md:text-xl">{value}</p>
              </div>
            ))}
          </div>
          <p className='text-xl md:text-2xl font-normal'>Select Number</p>
        </div>
      </div>
      {error && <p className="text-red-500 text-center text-lg mt-4">{error}</p>}
      <DiceRoller updateScore={updateScore} resetScore={resetScore} />
    </div>
  );
};

export default GamePage;
