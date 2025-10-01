
import React, { useState } from 'react';

const initialBoard = ['O', 'X', null, null, 'O', 'X', 'X', null, null];
const correctMoveIndex = 7;

const TicTacToe: React.FC = () => {
  const [board, setBoard] = useState(initialBoard);
  const [feedback, setFeedback] = useState('');

  const handleClick = (index: number) => {
    if (board[index] !== null) return;
    
    if (index === correctMoveIndex) {
        setFeedback('Точно! Этот ход создает две победные угрозы сразу. У "O" нет шансов!');
        const newBoard = [...board];
        newBoard[index] = 'X';
        setBoard(newBoard);
    } else {
        setFeedback('Неплохой ход, но есть вариант получше, который гарантирует победу!');
    }
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="grid grid-cols-3 gap-2 bg-cyan-700 p-2 rounded-lg">
        {board.map((cell, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className="w-24 h-24 bg-gray-900 rounded-md flex items-center justify-center text-6xl font-bold cursor-pointer hover:bg-gray-800"
          >
            {cell === 'X' && <span className="text-red-500">X</span>}
            {cell === 'O' && <span className="text-blue-400">O</span>}
          </div>
        ))}
      </div>
      {feedback && (
        <p className={`mt-4 text-xl font-bold text-center max-w-md ${feedback.startsWith('Точно') ? 'text-green-400' : 'text-yellow-400'}`}>
          {feedback}
        </p>
      )}
    </div>
  );
};

export default TicTacToe;
