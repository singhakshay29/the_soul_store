import { useState, useEffect } from "react";

const useWindowSize = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1100);

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth < 1100);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isSmallScreen;
};

export default useWindowSize;
