import { useEffect, useState } from "react"

export const useThemeMode = () => {
  useEffect(() => {
    if (!localStorage.getItem("theme-mode")) {
      localStorage.setItem("theme-mode", "light")
      document
        .getElementsByTagName("html")[0]
        .setAttribute("data-theme", localStorage.getItem("theme-mode"))
    }
  }, [])

  const currentThemeMode =
    typeof window !== "undefined" ? localStorage.getItem("theme-mode") : "light"

  const [isDark, setIsDark] = useState(currentThemeMode === "dark")

  const toggleMode = () => {
    //get reversed theme mode
    const themeMode = isDark ? "light" : "dark"

    localStorage.setItem("theme-mode", themeMode)
    document
      .getElementsByTagName("html")[0]
      .setAttribute("data-theme", themeMode)
    setIsDark(!isDark)
  }

  return [isDark, toggleMode]
}
