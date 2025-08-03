import { useState, useEffect, useRef, useCallback } from 'react';

export function useInView({ root = null, rootMargin = '0px', threshold = 0 } = {}) {
  const [inView, setInView] = useState(false);
  const observerRef = useRef(null);
  const elementRef = useRef(null);

  // Коллбэк для установки ref и (пере)инициализации наблюдателя
  const setRef = useCallback(
    (node) => {
      // Очищаем предыдущий наблюдатель
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }

      elementRef.current = node;

      if (node) {
        observerRef.current = new IntersectionObserver(
          ([entry]) => {
            setInView(entry.isIntersecting);
          },
          { root, rootMargin, threshold }
        );
        observerRef.current.observe(node);
      }
    },
    [root, rootMargin, threshold]
  );

  // Очистка при размонтировании
  useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return [setRef, inView];
}
