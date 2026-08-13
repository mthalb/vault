'use client'

import type { OcticonProps } from '@primer/octicons-react'
import { ArrowRightIcon } from '@primer/octicons-react'

interface BigActionButtonProps {
  href: string
  label: string
  description: string
  icon: React.ComponentType<OcticonProps>
}

export function BigActionButton({
  href,
  label,
  description,
  icon: IconComponent,
}: BigActionButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="big-action-button"
      aria-label={`${label} — opens in a new tab`}
      style={{ color: '#fff', textDecoration: 'none' }}
    >
      <span
        className="big-action-button__icon"
        aria-hidden="true"
        style={{ color: '#fff' }}
      >
        <IconComponent size={28} />
      </span>
      <span className="big-action-button__meta">
        <span
          style={{
            fontSize: 24,
            fontWeight: 700,
            lineHeight: 1.2,
            color: '#fff',
          }}
        >
          {label}
        </span>
        <span style={{ fontSize: 14, opacity: 0.85, color: '#fff' }}>
          {description}
        </span>
      </span>
      <span className="big-action-button__arrow" style={{ color: '#fff' }}>
        Open
        <ArrowRightIcon size={14} />
      </span>
    </a>
  )
}
