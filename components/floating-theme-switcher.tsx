'use client'

import { useId, useState } from 'react'
import { AnchoredOverlay, ActionList, Text, ToggleSwitch } from '@primer/react'
import { PaintbrushIcon, CheckIcon, DeviceDesktopIcon } from '@primer/octicons-react'
import { THEMES } from '@/lib/themes'
import { useDashboardTheme } from '@/components/dashboard-theme-provider'

export function FloatingThemeSwitcher() {
  const [open, setOpen] = useState(false)
  const { theme, setTheme, autoFollowDevice, setAutoFollowDevice } =
    useDashboardTheme()
  const autoLabelId = useId()

  return (
    <AnchoredOverlay
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      align="end"
      side="outside-top"
      width="medium"
      renderAnchor={(anchorProps) => (
        <button
          {...anchorProps}
          type="button"
          className="floating-theme-button"
          aria-label="Choose a color theme"
        >
          <PaintbrushIcon size={22} />
        </button>
      )}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 12,
          padding: '12px 12px 4px',
        }}
      >
        <Text
          as="span"
          id={autoLabelId}
          style={{ display: 'flex', alignItems: 'center', gap: 6 }}
        >
          <DeviceDesktopIcon size={14} />
          <Text as="span" weight="semibold" size="small">
            Match device theme
          </Text>
        </Text>
        <ToggleSwitch
          aria-labelledby={autoLabelId}
          checked={autoFollowDevice}
          onClick={() => setAutoFollowDevice(!autoFollowDevice)}
          size="small"
        />
      </div>

      <ActionList selectionVariant="single" aria-label="Color themes">
        {THEMES.map((t) => (
          <ActionList.Item
            key={t.id}
            selected={!autoFollowDevice && t.id === theme}
            onSelect={() => {
              setTheme(t.id)
              setOpen(false)
            }}
          >
            <ActionList.LeadingVisual>
              <span
                className="theme-swatch"
                style={{ background: t.swatch }}
              />
            </ActionList.LeadingVisual>
            <Text
              as="span"
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              <Text as="span" weight="semibold">
                {t.name}
              </Text>
              <Text
                as="span"
                size="small"
                style={{ color: 'var(--fgColor-muted)' }}
              >
                {t.description}
              </Text>
            </Text>
            {!autoFollowDevice && t.id === theme && (
              <ActionList.TrailingVisual>
                <CheckIcon />
              </ActionList.TrailingVisual>
            )}
          </ActionList.Item>
        ))}
      </ActionList>
    </AnchoredOverlay>
  )
}
