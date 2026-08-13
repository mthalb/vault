'use client'

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'
import { DEFAULT_THEME, themeForColorScheme, type ThemeId } from '@/lib/themes'

const THEME_STORAGE_KEY = 'dashboard-color-theme'
const AUTO_STORAGE_KEY = 'dashboard-theme-auto'

interface DashboardThemeContextValue {
  /** The accent theme currently rendered (resolves automatically when auto-follow is on). */
  theme: ThemeId
  /** Manually pick an accent theme. Turns auto-follow off. */
  setTheme: (theme: ThemeId) => void
  /** Whether the accent theme is following the device's light/dark preference. */
  autoFollowDevice: boolean
  /** Toggle auto-follow. When turned on, the theme snaps to match the OS immediately. */
  setAutoFollowDevice: (auto: boolean) => void
}

const DashboardThemeContext = createContext<DashboardThemeContextValue | null>(
  null,
)

export function DashboardThemeProvider({
  children,
}: {
  children: ReactNode
}) {
  const [theme, setThemeState] = useState<ThemeId>(DEFAULT_THEME)
  const [autoFollowDevice, setAutoFollowState] = useState(false)

  // Restore saved preferences on mount.
  useEffect(() => {
    const storedAuto = window.localStorage.getItem(AUTO_STORAGE_KEY)
    const storedTheme = window.localStorage.getItem(
      THEME_STORAGE_KEY,
    ) as ThemeId | null

    if (storedAuto === 'true') {
      setAutoFollowState(true)
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)',
      ).matches
      setThemeState(themeForColorScheme(prefersDark))
    } else if (storedTheme) {
      setThemeState(storedTheme)
    }
  }, [])

  // While auto-follow is on, react live to OS theme changes.
  useEffect(() => {
    if (!autoFollowDevice) return
    const mql = window.matchMedia('(prefers-color-scheme: dark)')
    function handleChange(e: MediaQueryListEvent) {
      setThemeState(themeForColorScheme(e.matches))
    }
    mql.addEventListener('change', handleChange)
    return () => mql.removeEventListener('change', handleChange)
  }, [autoFollowDevice])

  function setTheme(next: ThemeId) {
    setAutoFollowState(false)
    window.localStorage.setItem(AUTO_STORAGE_KEY, 'false')
    setThemeState(next)
    window.localStorage.setItem(THEME_STORAGE_KEY, next)
  }

  function setAutoFollowDevice(auto: boolean) {
    setAutoFollowState(auto)
    window.localStorage.setItem(AUTO_STORAGE_KEY, String(auto))
    if (auto) {
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)',
      ).matches
      setThemeState(themeForColorScheme(prefersDark))
    }
  }

  return (
    <DashboardThemeContext.Provider
      value={{ theme, setTheme, autoFollowDevice, setAutoFollowDevice }}
    >
      <div data-theme={theme} className="dashboard-theme-root">
        <div aria-hidden="true" className="dashboard-glow-field" />
        {children}
      </div>
    </DashboardThemeContext.Provider>
  )
}

export function useDashboardTheme() {
  const ctx = useContext(DashboardThemeContext)
  if (!ctx) {
    throw new Error(
      'useDashboardTheme must be used within a DashboardThemeProvider',
    )
  }
  return ctx
}
