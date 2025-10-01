import React, { useState } from 'react';

const puzzle = {
    statement: "Красный монстр говорит: 'Конфета в моей коробке'.",
    question: "Если мы знаем, что Красный монстр ВСЕГДА ЛЖЕТ, то где на самом деле конфета?",
    options: [
        { id: 'red', emoji: '🟥', text: "В красной коробке", isCorrect: false },
        { id: 'blue', emoji: '🟦', text: "В синей коробке", isCorrect: true },
    ]
};

const TruthLiarTask: React.FC = () => {
    const [selected, setSelected] = useState<string | null>(null);

    const handleClick = (id: string) => {
        setSelected(id);
    };

    const getBorderColor = (option: typeof puzzle.options[0]) => {
        if (selected === null) return 'border-gray-600 hover:border-cyan-400';
        if (selected === option.id) {
            return option.isCorrect ? 'border-green-500 ring-4 ring-green-500/50' : 'border-red-500 ring-4 ring-red-500/50';
        }
        return 'border-gray-600';
    };

    return (
        <div className="flex flex-col items-center gap-6">
            <div className="grid grid-cols-2 gap-8 text-center">
                <div>
                    <div className="text-8xl">👹</div>
                    <p className="text-xl font-bold">Красный монстр</p>
                </div>
                 <div>
                    <div className="text-8xl">👾</div>
                    <p className="text-xl font-bold">Синий монстр</p>
                </div>
            </div>
            <p className="p-4 bg-gray-800 rounded-lg text-xl text-yellow-300">{puzzle.statement}</p>
            <p className="text-2xl text-center max-w-2xl">{puzzle.question}</p>
            <div className="flex justify-center gap-8">
                {puzzle.options.map(option => (
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
            {selected && puzzle.options.find(o => o.id === selected)?.isCorrect && (
                <p className="mt-4 text-2xl font-bold text-green-400">
                    Именно! Если он лжет, что конфета у него, значит она у другого!
                </p>
            )}
        </div>
    );
};

export default TruthLiarTask;