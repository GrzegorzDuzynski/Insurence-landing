import { debounce } from "lodash";
import { useEffect, useRef, useMemo } from "react";

export default (callback, millis) => {
  const ref = useRef();

  useEffect(() => {
    ref.current = callback;
  }, [callback]);

  const debouncedCallback = useMemo(() => {
    const func = () => {
      ref.current?.();
    };

    return debounce(func, millis);
  }, []);

  return debouncedCallback;
};
