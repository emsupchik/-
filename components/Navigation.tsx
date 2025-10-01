
import React from 'react';

interface NavigationProps {
  onPrev: () => void;
  onNext: () => void;
  isFirst: boolean;
  isLast: boolean;
  currentSlide: number;
  totalSlides: number;
}

const Navigation: React.FC<NavigationProps> = ({ onPrev, onNext, isFirst, isLast, currentSlide, totalSlides }) => {
  const buttonBaseClasses = "px-6 py-3 text-lg font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-opacity-50 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed";
  const prevButtonClasses = "bg-gray-700 hover:bg-gray-600 text-white focus:ring-gray-500";
  const nextButtonClasses = "bg-cyan-600 hover:bg-cyan-500 text-white focus:ring-cyan-400";
  
  return (
    <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
      <button onClick={onPrev} disabled={isFirst} className={`${buttonBaseClasses} ${prevButtonClasses}`}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Назад
      </button>
      <div className="text-xl font-mono text-gray-400">
        {currentSlide} / {totalSlides}
      </div>
      <button onClick={onNext} disabled={isLast} className={`${buttonBaseClasses} ${nextButtonClasses}`}>
        Далее
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </button>
    </div>
  );
};

export default Navigation;
