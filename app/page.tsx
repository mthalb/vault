'use client'

import { Heading, Text, Stack, Label } from '@primer/react'
import { UnmuteIcon, VideoIcon, SparkleFillIcon } from '@primer/octicons-react'
import { DashboardThemeProvider } from '@/components/dashboard-theme-provider'
import { FloatingThemeSwitcher } from '@/components/floating-theme-switcher'
import { BigActionButton } from '@/components/big-action-button'
import { ContactSection } from '@/components/contact-section'
import { MUSIC_URL, VIDEO_URL } from '@/lib/site-links'

export default function Page() {
  return (
    <DashboardThemeProvider>
      <main
        style={{
          maxWidth: 960,
          margin: '0 auto',
          padding: '56px 24px 120px',
        }}
      >
        <Stack direction="vertical" gap="spacious">
          <Stack direction="vertical" gap="condensed">
            <Stack direction="horizontal" gap="condensed" align="center">
              <SparkleFillIcon size={24} />
              <Label variant="accent">HELIX VAULT</Label>
            </Stack>
            <Heading as="h1" variant="large">
              VAULT BY TANVIR
            </Heading>
            <Text
              size="large"
              style={{ color: 'var(--fgColor-muted)', maxWidth: 560 }}
            >
              Two sections, Jump into music or video,
              and contact me below if you need.
            </Text>
          </Stack>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 24,
            }}
          >
            <BigActionButton
              href={MUSIC_URL}
              label="HELIX MUSIC"
              description="Open to get access of music"
              icon={UnmuteIcon}
            />
            <BigActionButton
              href={VIDEO_URL}
              label="HELIX VIDEO"
              description="Open to see videos"
              icon={VideoIcon}
            />
          </div>

          <ContactSection />
        </Stack>
      </main>

      <FloatingThemeSwitcher />
    </DashboardThemeProvider>
  )
}
