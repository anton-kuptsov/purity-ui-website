import React from "react"
import { FiMoon, FiSun } from "react-icons/fi"
import { useThemeMode } from "../hook"
import {
  text,
  container,
  icons
} from "../assets/scss/themeSwitcher.module.scss"

export const ThemeSwitcher = () => {
  const [isDark, toggleMode] = useThemeMode()

  return (
    <div className={container}>
      <button onClick={toggleMode}>
        <div className={icons}>
          <div>{isDark ? <FiSun /> : <FiMoon />}</div>
          <div className={text}>{!isDark ? "Dark" : "Light"}</div>
        </div>
      </button>
    </div>
  )
}
