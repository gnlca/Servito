import { useEffect, useRef } from 'react';

export const useTimeout = (callback: VoidFunction, delay: number, ok = true) => {
  const savedCallback = useRef<VoidFunction>(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (ok) {
      const timeout = setTimeout(savedCallback.current, delay);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [delay, ok]);
};
