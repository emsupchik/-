import React, { useState } from 'react';

const premises = [
  "Правило 1: Все коты любят молоко.",
  "Правило 2: Мурка - это кот."
];
const question = "Что любит Мурка?";
const options = [
  { id: 'water', text: 'Воду', isCorrect: false },
  { id: 'milk', text: 'Молоко', isCorrect: true },
  { id: 'juice', text: 'Сок', isCorrect: false },
];

const SyllogismTask: React.FC = () => {
    const [selected, setSelected] = useState<string | null>(null);
    const [feedback, setFeedback] = useState('');

    const handleClick = (option: typeof options[0]) => {
        setSelected(option.id);
        if (option.isCorrect) {
            setFeedback('Совершенно верно! Мы сделали логический вывод на основе правил.');
        } else {
            setFeedback('Подумай еще. Ответ спрятан в правилах!');
        }
    };
    
    const getButtonClass = (option: typeof options[0]) => {
        const base = "px-8 py-4 rounded-lg text-2xl font-bold transition-all duration-300";
        if (selected === null) return `${base} bg-gray-700 hover:bg-cyan-700`;
        if (selected === option.id) {
            return option.isCorrect ? `${base} bg-green-600` : `${base} bg-red-600`;
        }
        return `${base} bg-gray-700`;
    };

    return (
        <div className="flex flex-col items-center gap-6 w-full max-w-3xl mx-auto">
            <div className="w-full p-6 bg-gray-800/70 rounded-lg text-left text-xl space-y-3">
                {premises.map((premise, index) => <p key={index}>{premise}</p>)}
            </div>
            <h3 className="text-3xl font-bold text-cyan-300 mt-4">{question}</h3>
            <div className="flex justify-center gap-6">
                {options.map(option => (
                    <button
                        key={option.id}
                        onClick={() => handleClick(option)}
                        className={getButtonClass(option)}
                    >
                        {option.text}
                    </button>
                ))}
            </div>
            {feedback && (
                <p className={`mt-4 text-2xl font-bold ${feedback.startsWith('Совершенно') ? 'text-green-400' : 'text-yellow-400'}`}>
                    {feedback}
                </p>
            )}
        </div>
    );
};

export default SyllogismTask;