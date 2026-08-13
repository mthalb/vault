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
              <Label variant="accent">Dashboard</Label>
            </Stack>
            <Heading as="h1" variant="large">
              Pick your vibe
            </Heading>
            <Text
              size="large"
              style={{ color: 'var(--fgColor-muted)', maxWidth: 560 }}
            >
              Two shortcuts, one dashboard. Jump into music or video, switch
              the color theme with the floating button, and say hello down
              below.
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
              label="Music"
              description="Open your music destination"
              icon={UnmuteIcon}
            />
            <BigActionButton
              href={VIDEO_URL}
              label="Video"
              description="Open your video destination"
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
