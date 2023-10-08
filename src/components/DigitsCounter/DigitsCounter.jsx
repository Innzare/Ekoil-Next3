'use client';

import React, { useEffect, useState, useRef } from 'react';

export default function DigitsCounter({ val, time }) {
  const [currVal, setCurrVal] = useState(0);
  const [hasRun, setHasRun] = useState(false);
  const counterRef = useRef(null);

  // Функция, которая будет вызываться при видимости компонента
  const handleIntersection = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting && !hasRun) {
      // Запустить бегущую цифру только если не запущено ранее
      setCurrVal(0); // Сбросить текущее значение до 0
      setHasRun(true); // Установить флаг, что компонент уже запущен
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection);
    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    // Запустить бегущую цифру, когда currVal меньше val
    if (currVal < val) {
      const timer = setTimeout(() => {
        setCurrVal(currVal + 1);
      }, time);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [currVal, val, time]);

  return (
    <span className="counter" ref={counterRef}>
      {currVal}
    </span>
  );
}
