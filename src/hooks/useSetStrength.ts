import { useCallback, useEffect, useRef, useState } from "react";

const useSetStrength = (name: string, setTest: (value: string) => void) => {
  //   const [strength, setStrength] = useState("");
  const dom = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(
    ([entry]: any) => {
      const { current } = dom;
      if (entry.isIntersecting && current) {
        setTest(name);
        // current.scrollIntoView({ behavior: "smooth", block: "center" });
        // if (name == "" || name == null) {
        //   current.style.opacity = "0";
        // } else {
        //   current.style.transitionProperty = "opacity transform";
        //   current.style.transitionDuration = `${2}s`;
        //   current.style.transitionTimingFunction = "cubic-bezier(0, 0, 0.2, 1)";
        //   // current.style.transitionTimingFunction = "ease-in-out";
        //   current.style.transitionDelay = `${0.3}s`;
        //   current.style.opacity = "1";
        //   current.style.transform = "translate3d(0, 0, 0)";
        // }
        // setStrength(name);
      }
    },
    [name]
  );

  useEffect(() => {
    let observer: IntersectionObserver;
    const { current } = dom;
    if (current) {
      observer = new IntersectionObserver(handleScroll, { threshold: 0.7 });
      observer.observe(current);

      return () => observer && observer.disconnect();
    }
  }, [name]);

  return {
    ref: dom,
    // state: strength,
    // style: {
    //   opacity: 0,
    // },
  };
};

export default useSetStrength;
