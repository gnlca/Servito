import { useRef, useEffect } from 'react';

export const useInterval = (callback: () => void, delay: number) => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const savedCallback = useRef<() => void>(() => {});

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    const interval = setInterval(tick, delay);
    return () => clearInterval(interval);
  }, [delay]);
};
