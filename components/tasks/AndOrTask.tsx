
import React, { useState } from 'react';

const items = [
  { id: 'red-ball', emoji: '🔴', isCorrect: true, props: ['red', 'round'] },
  { id: 'blue-square', emoji: '🟦', isCorrect: false, props: ['blue', 'square'] },
  { id: 'red-apple', emoji: '🍎', isCorrect: true, props: ['red', 'round'] },
  { id: 'yellow-star', emoji: '⭐', isCorrect: false, props: ['yellow', 'star'] },
  { id: 'green-ball', emoji: '🟢', isCorrect: false, props: ['green', 'round'] },
];

const AndOrTask: React.FC = () => {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [message, setMessage] = useState('');

  const handleClick = (id: string) => {
    const newSelected = new Set(selected);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelected(newSelected);
    checkCompletion(newSelected);
  };
  
  const checkCompletion = (currentSelection: Set<string>) => {
    const correctItems = items.filter(item => item.isCorrect).map(item => item.id);
    const correctSelected = correctItems.filter(id => currentSelection.has(id));
    
    if (correctSelected.length === correctItems.length && currentSelection.size === correctItems.length) {
      setMessage('Отлично, все правильно!');
    } else {
      setMessage('');
    }
  }

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center gap-4 md:gap-8 flex-wrap">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => handleClick(item.id)}
            className={`p-4 md:p-8 bg-gray-800 rounded-2xl border-4 transition-all duration-300 ${selected.has(item.id) ? 'border-cyan-400 ring-4 ring-cyan-400/50' : 'border-gray-600 hover:border-cyan-400'}`}
          >
            <span className="text-6xl md:text-8xl">{item.emoji}</span>
          </button>
        ))}
      </div>
       {message && (
        <p className="mt-6 text-2xl font-bold text-green-400 animate-pulse">
          {message}
        </p>
      )}
    </div>
  );
};

export default AndOrTask;
