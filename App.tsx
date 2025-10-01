
import React, { useState, useCallback, useEffect } from 'react';
import { SLIDES } from './constants';
import type { SlideContent } from './types';
import ProgressBar from './components/ProgressBar';
import Slide from './components/Slide';
import Navigation from './components/Navigation';

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev < SLIDES.length - 1 ? prev + 1 : prev));
  }, []);

  const goToPrevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        goToNextSlide();
      } else if (event.key === 'ArrowLeft') {
        goToPrevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [goToNextSlide, goToPrevSlide]);

  return (
    <div className="relative flex flex-col items-center justify-center w-screen h-screen p-4 sm:p-8 md:p-12 bg-gray-900 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto flex flex-col h-full">
        <header className="w-full pb-4">
          <ProgressBar current={currentSlide + 1} total={SLIDES.length} />
          <h1 className="text-2xl md:text-3xl font-bold text-cyan-400 mt-2 text-center">
            Урок логики для 1 класса
          </h1>
        </header>

        <main className="relative flex-1 w-full overflow-hidden">
          {SLIDES.map((slide: SlideContent, index: number) => (
            <Slide key={index} slide={slide} isActive={index === currentSlide} />
          ))}
        </main>

        <footer className="w-full pt-4">
          <Navigation
            onPrev={goToPrevSlide}
            onNext={goToNextSlide}
            isFirst={currentSlide === 0}
            isLast={currentSlide === SLIDES.length - 1}
            currentSlide={currentSlide + 1}
            totalSlides={SLIDES.length}
          />
        </footer>
      </div>
    </div>
  );
};

export default App;
