import { useCallback, useEffect, useState } from "react";

const isBrowser = typeof window !== "undefined";

const useLan = () => {
  let initLan = "en";
  if (isBrowser) {
    const localSettingLan = window.localStorage.getItem("lan");

    if (localSettingLan) {
      initLan = localSettingLan;
    }
  }

  const [lan, setLan] = useState(initLan);

  const setLanguage = (lan: string) => {
    window.localStorage.setItem("lan", lan);
    setLan(lan);
  };

  const toggleLanguage = () => {
    setLanguage(lan == "en" ? "jp" : "en");
  };

  return [toggleLanguage as () => void, lan as string];
};

export default useLan;
