export type ThemeId = 'aurora' | 'sunset' | 'ocean' | 'bright'

export interface DashboardTheme {
  id: ThemeId
  name: string
  description: string
  /** Decorative-only swatch colors, matched to the CSS vars in globals.css */
  swatch: string
}

export const THEMES: DashboardTheme[] = [
  {
    id: 'aurora',
    name: 'Aurora',
    description: 'Violet & pink glow',
    swatch: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
  },
  {
    id: 'sunset',
    name: 'Sunset',
    description: 'Amber & crimson blaze',
    swatch: 'linear-gradient(135deg, #f97316, #ef4444)',
  },
  {
    id: 'ocean',
    name: 'Ocean',
    description: 'Cyan & azure tide',
    swatch: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
  },
  {
    id: 'bright',
    name: 'Bright',
    description: 'Crisp white & candy pop',
    swatch: 'linear-gradient(135deg, #3b82f6, #ec4899, #facc15)',
  },
]

export const DEFAULT_THEME: ThemeId = 'aurora'

/**
 * Maps the OS-level light/dark preference to an accent theme when the
 * dashboard is set to auto-follow the device theme.
 */
export function themeForColorScheme(prefersDark: boolean): ThemeId {
  return prefersDark ? 'aurora' : 'bright'
}
