import { FC, useEffect, useState } from 'react';

interface AnimatedTextProps {
  text: string;
}

export const AnimatedText: FC<AnimatedTextProps> = ({ text }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationCompleted, setAnimationCompleted] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex === text.length) {
        setAnimationCompleted(true);
      } else {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    }, 50);

    if (animationCompleted) {
      clearInterval(interval);
      setTimeout(() => {
        setCurrentText('');
        setCurrentIndex(0);
        setAnimationCompleted(false);
      }, 2000);
    }

    return () => clearInterval(interval);
  }, [currentIndex, text, animationCompleted]);

  return <div className="word">{currentText}</div>;
};
