'use client'

import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    if (stored === 'dark') {
      enableDark()
      setDarkMode(true)
    }
  }, [])

  const enableDark = () => {
    const root = document.documentElement.style
    root.setProperty('--background', '#0a0a0a')
    root.setProperty('--foreground', '#ededed')
  }

  const enableLight = () => {
    const root = document.documentElement.style
    root.setProperty('--background', '#ffffff')
    root.setProperty('--foreground', '#171717')
  }

  const toggleTheme = () => {
    if (darkMode) {
      enableLight()
      localStorage.setItem('theme', 'light')
    } else {
      enableDark()
      localStorage.setItem('theme', 'dark')
    }
    setDarkMode(!darkMode)
  }

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-5 right-5 z-50 px-4 py-2 rounded-full bg-gray-200 text-gray-900 hover:scale-105 transition"
    >
      {darkMode ? '🌞 Light' : '🌙 Dark'}
    </button>
  )
}
