import React, { useState } from 'react';

const boxes = [
    {id: 'red', color: 'bg-red-600', hover: 'hover:bg-red-500', isCorrect: false, emoji: '🎁'},
    {id: 'blue', color: 'bg-blue-600', hover: 'hover:bg-blue-500', isCorrect: false, emoji: '🎁'},
    {id: 'green', color: 'bg-green-600', hover: 'hover:bg-green-500', isCorrect: true, emoji: '🎁'},
];

const clues = [
    "1. Котенок НЕ в красной коробке.",
    "2. Котенок НЕ в синей коробке."
];

const DeductionTask: React.FC = () => {
    const [selected, setSelected] = useState<string | null>(null);
    const [feedback, setFeedback] = useState('');

    const handleClick = (box: typeof boxes[0]) => {
        setSelected(box.id);
        if (box.isCorrect) {
            setFeedback('Правильно! Ты использовал метод исключения, как настоящий детектив!');
        } else {
            setFeedback('Подумай еще раз. Прочитай подсказки внимательно.');
        }
    };

    const getBoxStyle = (box: typeof boxes[0]) => {
        let style = `${box.color} ${box.hover}`;
        if (selected === box.id) {
            style += box.isCorrect ? ' ring-4 ring-offset-4 ring-offset-gray-900 ring-green-400' : ' ring-4 ring-offset-4 ring-offset-gray-900 ring-red-500';
        }
        return style;
    };

    return (
        <div className="flex flex-col items-center gap-8">
            <div className="p-4 bg-gray-800 rounded-lg text-left text-xl space-y-2">
                <h3 className="text-2xl font-bold text-cyan-300 mb-2">Подсказки:</h3>
                {clues.map(clue => <p key={clue}>{clue}</p>)}
            </div>
            <div className="flex justify-center gap-8 md:gap-16">
                {boxes.map(box => (
                    <button
                        key={box.id}
                        onClick={() => handleClick(box)}
                        className={`w-32 h-32 md:w-40 md:h-40 rounded-2xl flex items-center justify-center text-6xl transition-all duration-300 transform hover:scale-105 ${getBoxStyle(box)}`}
                    >
                         {selected === box.id && box.isCorrect ? '🐱' : box.emoji}
                    </button>
                ))}
            </div>
             {feedback && (
                <p className={`mt-2 text-2xl font-bold ${feedback.startsWith('Правильно') ? 'text-green-400' : 'text-yellow-400'}`}>
                    {feedback}
                </p>
            )}
        </div>
    );
};

export default DeductionTask;
