
import React, { useState } from 'react';

const choices = ['ОРЕЛ', 'РЕШКА'];
const emojis = { 'ОРЕЛ': '🪙', 'РЕШКА': '💰' };

const TwoCoinsGame: React.FC = () => {
  const [playerChoice, setPlayerChoice] = useState<string | null>(null);
  const [computerChoice, setComputerChoice] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [scores, setScores] = useState({ player: 0, computer: 0 });

  const playGame = (choice: string) => {
    const compChoice = choices[Math.floor(Math.random() * choices.length)];
    setPlayerChoice(choice);
    setComputerChoice(compChoice);

    if (choice === compChoice) {
      setResult('Вы угадали! +1 очко вам.');
      setScores(s => ({ ...s, player: s.player + 1 }));
    } else {
      setResult('Компьютер выбрал другое. +1 очко ему.');
      setScores(s => ({ ...s, computer: s.computer + 1 }));
    }
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <p className="text-xl">Вы и компьютер одновременно выбираете сторону монетки. Если ваши выборы совпали - вы победили. Если нет - победил компьютер.</p>
      <div className="text-2xl font-bold">Счет: Игрок {scores.player} - {scores.computer} Компьютер</div>
      <div className="flex gap-8">
        {choices.map(choice => (
          <button
            key={choice}
            onClick={() => playGame(choice)}
            className="px-8 py-4 bg-cyan-700 hover:bg-cyan-600 rounded-lg text-2xl font-bold transition-transform transform hover:scale-105"
          >
            {emojis[choice as keyof typeof emojis]} {choice}
          </button>
        ))}
      </div>
      {playerChoice && computerChoice && (
        <div className="mt-4 text-center text-xl p-4 bg-gray-800/50 rounded-lg">
          <p>Вы выбрали: <span className="font-bold text-yellow-300">{playerChoice}</span></p>
          <p>Компьютер выбрал: <span className="font-bold text-purple-300">{computerChoice}</span></p>
          <p className="mt-2 text-2xl font-bold text-white">{result}</p>
        </div>
      )}
    </div>
  );
};

export default TwoCoinsGame;
