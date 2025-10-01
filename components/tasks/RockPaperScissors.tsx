import React, { useState, useEffect } from 'react';

const choices = ['Камень', 'Ножницы', 'Бумага'];
const emojis = { 'Камень': '✊', 'Ножницы': '✌️', 'Бумага': '✋' };
const rules = {
  'Камень': 'Ножницы',
  'Ножницы': 'Бумага',
  'Бумага': 'Камень',
};
const MAX_ROUNDS = 5;

const RockPaperScissors: React.FC = () => {
  const [playerChoice, setPlayerChoice] = useState<string | null>(null);
  const [computerChoice, setComputerChoice] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [scores, setScores] = useState({ player: 0, computer: 0 });
  const [round, setRound] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [lastComputerWinMove, setLastComputerWinMove] = useState<string | null>(null);

  const getComputerChoice = () => {
    // Simple strategy: if computer won, it's more likely to repeat the move.
    if (lastComputerWinMove && Math.random() < 0.5) {
      return lastComputerWinMove;
    }
    return choices[Math.floor(Math.random() * choices.length)];
  };

  const playGame = (choice: string) => {
    if (gameOver) return;

    const compChoice = getComputerChoice();
    setPlayerChoice(choice);
    setComputerChoice(compChoice);
    setRound(r => r + 1);

    if (rules[choice as keyof typeof rules] === compChoice) {
      setResult('Вы победили в этом раунде!');
      setScores(s => ({ ...s, player: s.player + 1 }));
      setLastComputerWinMove(null);
    } else if (rules[compChoice as keyof typeof rules] === choice) {
      setResult('Компьютер победил в этом раунде.');
      setScores(s => ({ ...s, computer: s.computer + 1 }));
      setLastComputerWinMove(compChoice);
    } else {
      setResult('Ничья!');
      setLastComputerWinMove(null);
    }
  };

  useEffect(() => {
    if (round >= MAX_ROUNDS) {
      setGameOver(true);
      if (scores.player > scores.computer) {
        setResult(`Игра окончена! Вы победили со счетом ${scores.player}:${scores.computer}!`);
      } else if (scores.computer > scores.player) {
        setResult(`Игра окончена! Компьютер победил со счетом ${scores.computer}:${scores.player}.`);
      } else {
        setResult(`Игра окончена! Ничья ${scores.player}:${scores.computer}.`);
      }
    }
  }, [round, scores]);
  
  const resetGame = () => {
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult(null);
    setScores({ player: 0, computer: 0 });
    setRound(0);
    setGameOver(false);
    setLastComputerWinMove(null);
  };


  return (
    <div className="flex flex-col items-center gap-4">
       <p className="text-xl">Компьютер не всегда выбирает случайно. Попробуй заметить его стратегию!</p>
      <div className="text-2xl font-bold">Раунд: {Math.min(round + 1, MAX_ROUNDS)} / {MAX_ROUNDS} | Счет: Игрок {scores.player} - {scores.computer} Компьютер</div>
      <div className="flex gap-4 md:gap-8 my-4">
        {choices.map(choice => (
          <button
            key={choice}
            disabled={gameOver}
            onClick={() => playGame(choice)}
            className="p-4 md:p-6 bg-gray-700 hover:bg-cyan-700 rounded-full text-5xl md:text-6xl transition-transform transform hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {emojis[choice as keyof typeof emojis]}
          </button>
        ))}
      </div>
      {gameOver ? (
         <div className="text-center">
            <p className="text-2xl font-bold text-yellow-300">{result}</p>
            <button onClick={resetGame} className="mt-4 px-6 py-3 bg-green-600 hover:bg-green-500 rounded-lg text-lg font-semibold">
                Играть снова
            </button>
        </div>
      ) : playerChoice && computerChoice && (
        <div className="text-center text-xl p-4 bg-gray-800/50 rounded-lg min-h-[120px]">
          <p>Вы: <span className="font-bold text-yellow-300">{playerChoice}</span> | Компьютер: <span className="font-bold text-purple-300">{computerChoice}</span></p>
          <p className="mt-2 text-2xl font-bold text-white">{result}</p>
        </div>
      )}
    </div>
  );
};

export default RockPaperScissors;
