import { useState } from "react";
import { TbSunHigh } from "react-icons/tb";
import { HiOutlineMoon } from "react-icons/hi2";

const ThemeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const swapTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      style={{
        backgroundColor: isDarkMode ? "#f8f8f8" : "#030712",
      }}
      className="p-[2px] hover:p-2 aspect-square  hover:scale-105 duration-300 active:scale-95 theme-switcher rounded-full"
      onClick={swapTheme}
    >
      <div className="invisible duration-300">
        {isDarkMode ? (
          <TbSunHigh className="text-xl text-white dark:text-black" />
        ) : (
          <HiOutlineMoon className="text-xl text-white dark:text-black" />
        )}
      </div>
    </button>
  );
};

export default ThemeSwitcher;
