
import React, { useState } from 'react';

const options = [
  { id: 'wilted', emoji: '🥀', text: 'Цветок завянет', isCorrect: false },
  { id: 'bloomed', emoji: '🌷', text: 'Цветок расцветет', isCorrect: true },
  { id: 'frozen', emoji: '🧊', text: 'Цветок замерзнет', isCorrect: false },
];

const IfThenTask: React.FC = () => {
  const [selected, setSelected] = useState<string | null>(null);

  const handleClick = (id: string) => {
    setSelected(id);
  };
  
  const getBorderColor = (item: typeof options[0]) => {
    if (selected === null) return 'border-gray-600 hover:border-cyan-400';
    if (selected === item.id) {
      return item.isCorrect ? 'border-green-500 ring-4 ring-green-500/50' : 'border-red-500 ring-4 ring-red-500/50';
    }
    return 'border-gray-600';
  };

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex items-center justify-center gap-4 text-2xl">
        <div className="p-6 bg-gray-800 rounded-lg flex flex-col items-center">
          <span className="text-6xl mb-2">👦💧</span>
          <span>Мальчик поливает цветок</span>
        </div>
        <div className="text-4xl text-cyan-400">➔</div>
        <div className="p-6 bg-gray-800 rounded-lg text-gray-500">
          <span className="text-6xl">?</span>
        </div>
      </div>
      <div className="flex justify-center gap-4 md:gap-8">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => handleClick(option.id)}
            className={`p-4 bg-gray-700 rounded-2xl border-4 transition-all duration-300 text-center ${getBorderColor(option)}`}
          >
            <span className="text-6xl">{option.emoji}</span>
            <p className="mt-2 text-lg font-semibold">{option.text}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default IfThenTask;
