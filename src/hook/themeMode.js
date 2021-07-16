import { useEffect, useState } from "react"

export const useThemeMode = () => {
  useEffect(() => {
    if (!localStorage.getItem("theme-mode")) {
      localStorage.setItem("theme-mode", "light")
      document
        .getElementsByTagName("body")[0]
        .setAttribute("data-theme", localStorage.getItem("theme"))
    }
  }, [])
  const currentThemeMode = localStorage.getItem("theme-mode")

  const [isDark, setIsDark] = useState(currentThemeMode === "dark")

  const toggleMode = () => {
    console.log("localStorage", localStorage)
    const htmlAttr = document.getElementsByTagName("body")[0]
    if (isDark === false) {
      localStorage.setItem("theme-mode", "dark")
      htmlAttr.setAttribute("data-theme", "dark")
      setIsDark(true)
    } else {
      localStorage.setItem("theme-mode", "light")
      htmlAttr.setAttribute("data-theme", "light")
      setIsDark(false)
    }
  }

  // useEffect(() => {

  //   isDark
  //     ? localStorage.setItem("theme-mode", "dark")
  //     : localStorage.setItem("theme-mode", "light")
  // }, [isDark])

  return [isDark, toggleMode]
}
