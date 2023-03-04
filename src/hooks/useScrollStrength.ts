import React from "react";
import { useCallback, useEffect, useRef } from "react";

const useScrollStrength = (className: string, delay: number) => {
  const dom = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(
    ([entry]: any) => {
      const { current } = dom;
      if (entry.isIntersecting && current) {
        if (className !== "") {
          current.classList.remove("small");
          current.classList.add("left");
        } else {
          if (current.classList.contains("left")) {
            current.classList.remove("left");
          }
          current.classList.remove("small");
        }
        current.style.transitionTimingFunction = "cubic-bezier(0, 0, 0.2, 1)";
        current.style.transitionDelay = `${delay}s`;
      }
    },
    [className]
  );

  useEffect(() => {
    let observer: IntersectionObserver;
    const { current } = dom;
    if (current) {
      observer = new IntersectionObserver(handleScroll, { threshold: 0.5 });
      observer.observe(current);

      return () => observer && observer.disconnect();
    }
  }, [className]);

  return {
    ref: dom,
  };
};

export default useScrollStrength;
