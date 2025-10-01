
import React from 'react';
import type { SlideContent } from '../types';

interface SlideProps {
  slide: SlideContent;
  isActive: boolean;
}

const Slide: React.FC<SlideProps> = ({ slide, isActive }) => {
  const typeStyles = {
    title: 'bg-gradient-to-br from-gray-900 to-blue-900/50',
    theory: 'bg-gradient-to-br from-gray-900 to-purple-900/50',
    task: 'bg-gradient-to-br from-gray-900 to-green-900/50',
    final: 'bg-gradient-to-br from-gray-900 to-yellow-900/50',
  };

  return (
    <div
      className={`absolute inset-0 transition-opacity duration-700 ease-in-out flex flex-col items-center justify-center p-6 md:p-12 rounded-2xl border border-gray-700 ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'} ${typeStyles[slide.type]}`}
    >
      <div className="w-full max-w-5xl text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">{slide.title}</h2>
        {slide.subtitle && (
          <p className="mt-4 text-xl md:text-2xl text-cyan-300">{slide.subtitle}</p>
        )}
        <div className="mt-8 md:mt-12 text-lg md:text-xl text-gray-200">
          {slide.content}
        </div>
      </div>
    </div>
  );
};

export default Slide;
