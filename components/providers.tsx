'use client'

import { ThemeProvider, BaseStyles } from '@primer/react'
import { StyledComponentsRegistry } from './styled-components-registry'

/**
 * App-wide Primer providers. The theme attributes that the @primer/primitives
 * theme CSS keys off of (data-color-mode / data-light-theme / data-dark-theme)
 * are set on <html> in app/layout.tsx so the document background resolves too.
 * Here we mirror that mode on ThemeProvider so styled-components reads matching
 * theme values. BaseStyles applies Primer's base typography + color.
 *
 * colorMode="auto" is intentional here: this dashboard is asked to follow the
 * visitor's OS light/dark preference, so both this prop and <html
 * data-color-mode="auto"> in app/layout.tsx are set to "auto" together.
 */
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider
        colorMode="auto"
        dayScheme="light"
        nightScheme="dark"
        preventSSRMismatch
      >
        <BaseStyles>{children}</BaseStyles>
      </ThemeProvider>
    </StyledComponentsRegistry>
  )
}
