
import React, { useState } from 'react';

const sequence = ['🟥', '🟩', '🟦', '🟥', '🟩'];
const options = [
  { id: 'red', emoji: '🟥', isCorrect: false },
  { id: 'green', emoji: '🟩', isCorrect: false },
  { id: 'blue', emoji: '🟦', isCorrect: true },
  { id: 'yellow', emoji: '🟨', isCorrect: false },
];

const SequenceTask: React.FC = () => {
  const [feedback, setFeedback] = useState('');

  const handleClick = (isCorrect: boolean) => {
    if (isCorrect) {
      setFeedback('Верно! Последовательность: красный, зеленый, синий.');
    } else {
      setFeedback('Не совсем. Посмотри на порядок цветов еще раз.');
    }
  };

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex items-center justify-center gap-4 p-4 bg-gray-800 rounded-lg">
        {sequence.map((emoji, index) => (
          <span key={index} className="text-6xl md:text-8xl">{emoji}</span>
        ))}
        <span className="text-6xl md:text-8xl text-gray-500">?</span>
      </div>
      <div className="flex justify-center gap-4 md:gap-8">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => handleClick(option.isCorrect)}
            className="p-4 md:p-8 bg-gray-700 rounded-2xl border-4 border-gray-600 hover:border-cyan-400 transition-all duration-300"
          >
            <span className="text-5xl md:text-7xl">{option.emoji}</span>
          </button>
        ))}
      </div>
      {feedback && (
        <p className={`mt-4 text-2xl font-bold ${feedback.startsWith('Верно') ? 'text-green-400' : 'text-red-400'}`}>
          {feedback}
        </p>
      )}
    </div>
  );
};

export default SequenceTask;
