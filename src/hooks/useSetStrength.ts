import { useCallback, useEffect, useRef, useState } from "react";

const useSetStrength = (name: string, setTest: (value: string) => void) => {
  const [strength, setStrength] = useState("");
  const dom = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(
    ([entry]: any) => {
      const { current } = dom;
      if (entry.isIntersecting && current) {
        setTest(name);
        setStrength(name);
        console.log(strength, "!!!");
      }
    },
    [name]
  );

  useEffect(() => {
    let observer: IntersectionObserver;
    const { current } = dom;
    if (current) {
      observer = new IntersectionObserver(handleScroll, { threshold: 0.5 });
      observer.observe(current);

      return () => observer && observer.disconnect();
    }
  }, [name]);

  return {
    ref: dom,
    state: strength,
  };
};

export default useSetStrength;
