import React from "react";
import { useCallback, useEffect, useRef } from "react";

const useScrollStrength = (
  className: string,
  delay: number,
  setValue: string
) => {
  const dom = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(([entry]: any) => {
    const { current } = dom;
    if (entry.isIntersecting && current) {
      current.classList.add(className);
      //   current.style.transitionProperty = "opacity transform";
      //   current.style.transitionDuration = `${duration}s`;
      current.style.transitionTimingFunction = "cubic-bezier(0, 0, 0.2, 1)";
      current.style.transitionDelay = `${delay}s`;
      //   current.style.opacity = "1";
      //   current.style.transform = "translate3d(0, 0, 0)";
    }
  }, []);

  useEffect(() => {
    let observer: IntersectionObserver;
    const { current } = dom;
    if (current) {
      observer = new IntersectionObserver(handleScroll, { threshold: 0.7 });
      observer.observe(current);

      return () => observer && observer.disconnect();
    }
  }, [className]);

  return {
    ref: dom,
    // style: {
    //   opacity: 0,
    //   transform: handleDirection(direction),
    // },
  };
};

export default useScrollStrength;
