import { useCallback, useEffect, useState } from "react";

const useLan = () => {
  const localSettingLan = localStorage.getItem("lan");
  let initLan = "en";

  if (localSettingLan) {
    initLan = localSettingLan;
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
