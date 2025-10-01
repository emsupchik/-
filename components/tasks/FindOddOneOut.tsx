
import React, { useState } from 'react';

const items = [
  { id: 'apple', emoji: '🍎', isCorrect: false, reason: 'Это фрукт' },
  { id: 'banana', emoji: '🍌', isCorrect: false, reason: 'Это фрукт' },
  { id: 'car', emoji: '🚗', isCorrect: true, reason: 'Это транспорт, а остальное - фрукты!' },
  { id: 'orange', emoji: '🍊', isCorrect: false, reason: 'Это фрукт' },
];

const FindOddOneOut: React.FC = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [feedback, setFeedback] = useState('');

  const handleClick = (item: typeof items[0]) => {
    setSelected(item.id);
    if (item.isCorrect) {
      setFeedback(`Правильно! ${item.reason}`);
    } else {
      setFeedback(`Попробуй еще раз. ${item.reason}.`);
    }
  };

  const getBorderColor = (item: typeof items[0]) => {
    if (selected === null) return 'border-gray-600 hover:border-cyan-400';
    if (selected === item.id) {
      return item.isCorrect ? 'border-green-500 ring-4 ring-green-500/50' : 'border-red-500 ring-4 ring-red-500/50';
    }
    return 'border-gray-600';
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center gap-4 md:gap-8">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => handleClick(item)}
            className={`p-4 md:p-8 bg-gray-800 rounded-2xl border-4 transition-all duration-300 ${getBorderColor(item)}`}
          >
            <span className="text-6xl md:text-8xl">{item.emoji}</span>
          </button>
        ))}
      </div>
      {feedback && (
        <p className={`mt-6 text-2xl font-bold ${selected && items.find(i => i.id === selected)?.isCorrect ? 'text-green-400' : 'text-red-400'}`}>
          {feedback}
        </p>
      )}
    </div>
  );
};

export default FindOddOneOut;
