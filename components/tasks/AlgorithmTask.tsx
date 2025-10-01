
import React, { useState, useEffect } from 'react';

const initialItems = [
  { id: 3, text: 'Налить кипяток в чашку' },
  { id: 1, text: 'Взять чашку и чайный пакетик' },
  { id: 4, text: 'Подождать 3 минуты' },
  { id: 2, text: 'Положить пакетик в чашку' },
];

const correctOrder = [1, 2, 3, 4];

const AlgorithmTask: React.FC = () => {
  const [items, setItems] = useState(() => initialItems.sort(() => Math.random() - 0.5));
  const [isCorrect, setIsCorrect] = useState(false);

  const onDragStart = (e: React.DragEvent<HTMLLIElement>, index: number) => {
    e.dataTransfer.setData("draggedIndex", index.toString());
  };

  const onDrop = (e: React.DragEvent<HTMLLIElement>, dropIndex: number) => {
    const draggedIndex = parseInt(e.dataTransfer.getData("draggedIndex"), 10);
    const newItems = [...items];
    const [draggedItem] = newItems.splice(draggedIndex, 1);
    newItems.splice(dropIndex, 0, draggedItem);
    setItems(newItems);
  };

  useEffect(() => {
    const currentOrder = items.map(item => item.id);
    if (JSON.stringify(currentOrder) === JSON.stringify(correctOrder)) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  }, [items]);

  return (
    <div className="flex flex-col items-center w-full max-w-md mx-auto">
      <ul className="w-full space-y-3">
        {items.map((item, index) => (
          <li
            key={item.id}
            draggable
            onDragStart={(e) => onDragStart(e, index)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => onDrop(e, index)}
            className={`p-4 w-full rounded-lg cursor-grab active:cursor-grabbing flex items-center text-xl font-semibold transition-colors duration-300 ${ isCorrect ? 'bg-green-800/80 text-white' : 'bg-gray-700 text-gray-200'}`}
          >
            <span className={`mr-4 font-bold text-2xl ${isCorrect ? 'text-green-300' : 'text-cyan-400'}`}>{index + 1}.</span>
            {item.text}
          </li>
        ))}
      </ul>
      {isCorrect && (
         <p className="mt-6 text-2xl font-bold text-green-400 animate-pulse">
          Порядок верный! Отличная работа!
        </p>
      )}
    </div>
  );
};

export default AlgorithmTask;
