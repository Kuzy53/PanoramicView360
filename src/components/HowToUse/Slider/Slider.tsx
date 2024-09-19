import React, { useState, useEffect } from 'react';

import { SlideButtons } from './SlideButtons';
import { ProgressSlider } from './ProgressSlider';
import { SliderImages } from './SliderImages';

export const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [progress, setProgress] = useState(0);
  const [isActive, setIsActive] = useState(false);

  // Функция для изменения слайда
  const changeSlide = (slideNumber: number) => {
    setCurrentSlide(slideNumber);
    // Обнуляем прогресс
    setProgress(0);
  };

  useEffect(() => {
    // Функция для обновления прогресса
    const updateProgress = () => {
      if (progress < 100) {
        setProgress((prevProgress) => prevProgress + 1);
      } else {
        // Смена слайда после достижения 100% прогресса
        const nextSlide = currentSlide === 3 ? 1 : currentSlide + 1;
        setCurrentSlide(nextSlide);
        setProgress(0);
      }
    };

    const progressInterval = setInterval(updateProgress, 60); // Обновляем прогресс каждые 60 миллисекунд

    return () => clearInterval(progressInterval); // Очищаем интервал при размонтировании компонента
  }, [currentSlide, progress]);

  useEffect(() => {
    const animationImage = setTimeout(() => { setIsActive(!isActive); }, 50);

    return () => clearTimeout(animationImage);
  }, [currentSlide]);

  return (
    <>
      <SliderImages currentSlide={currentSlide} isActive={isActive} />
      <ProgressSlider currentSlide={currentSlide} progress={progress} />
      <SlideButtons changeSlide={changeSlide} currentSlide={currentSlide} />
    </>
  );
};
