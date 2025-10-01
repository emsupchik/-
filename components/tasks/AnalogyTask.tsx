import React, { useState } from 'react';

const analogy = {
  pair1: { a: '🍎', b: '🌳' },
  pair2: { a: '🥚' },
  options: [
    { id: 'chicken', emoji: '🐔', isCorrect: true },
    { id: 'house', emoji: '🏠', isCorrect: false },
    { id: 'car', emoji: '🚗', isCorrect: false },
  ],
  explanation: 'Верно! Яблоко растет на дереве, а цыпленок вылупляется из яйца.'
};

const AnalogyTask: React.FC = () => {
  const [selected, setSelected] = useState<string | null>(null);

  const handleClick = (id: string) => {
    setSelected(id);
  };
  
  const getBorderColor = (item: typeof analogy.options[0]) => {
    if (selected === null) return 'border-gray-600 hover:border-cyan-400';
    if (selected === item.id) {
      return item.isCorrect ? 'border-green-500 ring-4 ring-green-500/50' : 'border-red-500 ring-4 ring-red-500/50';
    }
    return 'border-gray-600';
  };

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex items-center justify-center flex-wrap gap-4 md:gap-8 text-3xl md:text-4xl p-6 bg-gray-800 rounded-lg">
        <span className="text-6xl md:text-8xl">{analogy.pair1.a}</span>
        <span className="text-cyan-400">относится к</span>
        <span className="text-6xl md:text-8xl">{analogy.pair1.b}</span>
        <span className="font-bold text-white mx-4">ТАК ЖЕ КАК</span>
        <span className="text-6xl md:text-8xl">{analogy.pair2.a}</span>
        <span className="text-cyan-400">относится к</span>
        <span className="text-6xl md:text-8xl text-gray-500">?</span>
      </div>
      <div className="flex justify-center gap-4 md:gap-8">
        {analogy.options.map((option) => (
          <button
            key={option.id}
            onClick={() => handleClick(option.id)}
            className={`p-4 md:p-8 bg-gray-700 rounded-2xl border-4 transition-all duration-300 ${getBorderColor(option)}`}
          >
            <span className="text-5xl md:text-7xl">{option.emoji}</span>
          </button>
        ))}
      </div>
      {selected && analogy.options.find(o => o.id === selected)?.isCorrect && (
        <p className="mt-4 text-2xl font-bold text-green-400">
          {analogy.explanation}
        </p>
      )}
    </div>
  );
};

export default AnalogyTask;