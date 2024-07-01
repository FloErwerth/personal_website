import { useCallback, useEffect, useState } from "react";
import Moon from "../icons/moon.svg";
import Sun from "../icons/sun.svg";

let themeParent: HTMLElement | null = null;

const setDarkModeOnParent = () => {
  if (themeParent === null) {
    return false;
  }
  const dark = themeParent.classList.contains("dark") ?? false;
  if (dark) {
    themeParent.classList.remove("dark");
    return false;
  }
  themeParent.classList.add("dark");
  return true;
};

export default function ThemeSwitch() {
  const [toggled, setToggled] = useState(false);

  useEffect(() => {
    const possibleThemeParent = document.getElementById("themeParent");
    if (possibleThemeParent) {
      const dark = possibleThemeParent.classList.contains("dark") ?? false;
      themeParent = possibleThemeParent;
      setToggled(dark);
    }
  }, []);

  const toggleTheme = useCallback(() => {
    if (themeParent) {
      setToggled(setDarkModeOnParent());
    }
  }, []);

  return (
    <label className="relative inline-flex cursor-pointer items-center">
      <input
        type="checkbox"
        onChange={toggleTheme}
        checked={toggled}
        value=""
        className="peer sr-only"
      />
      <div className="peer rounded-base h-8 w-[70px] border-2 border-border dark:border-darkBorder bg-white dark:bg-darkBg peer-checked:bg-main peer-focus:outline-none" />
      <img
        src={Moon.src}
        alt="Theme toggle"
        className="peer transition-all absolute opacity-0 translate-x-1"
      />
      <img
        src={toggled ? Moon.src : Sun.src}
        alt="Theme toggle"
        className="peer absolute start-[8px] top-[6px] h-5 w-5 rounded-full bg-white transition-all peer-checked:bg-main peer-checked:translate-x-[34px] rtl:peer-checked:-translate-x-[37px]"
      />
    </label>
  );
}
