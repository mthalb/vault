'use client'

import { Heading, Text, Stack } from '@primer/react'
import {
  MailIcon,
  CommentDiscussionIcon,
} from '@primer/octicons-react'
import { CONTACT_EMAIL, INSTAGRAM_URL, FACEBOOK_URL } from '@/lib/site-links'

function InstagramIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="2.5"
        y="2.5"
        width="19"
        height="19"
        rx="5.5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="12" r="4.6" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.4" cy="6.6" r="1.15" fill="currentColor" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M15.5 8.5h2V5.2c-.35-.05-1.54-.15-2.93-.15-2.9 0-4.89 1.77-4.89 5.02v2.6H6.9v3.68h2.78V22h3.7v-6.65h2.67l.42-3.68h-3.09v-2.24c0-1.06.29-1.93 1.12-1.93Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function ContactSection() {
  return (
    <section className="contact-card">
      {/* Colorful, animated identity panel */}
      <div className="contact-card__info">
        <Stack direction="vertical" gap="normal">
          <span className="contact-card__eyebrow">
            <CommentDiscussionIcon size={14} />
            Let&apos;s talk
          </span>
          <Heading as="h2" variant="medium" style={{ color: '#fff' }}>
            Get in touch
          </Heading>
          <Text style={{ color: 'rgba(255,255,255,0.9)', maxWidth: 420 }}>
            Questions, feedback, or a link to swap in? Drop a message and
            it&apos;ll land straight in my inbox, or catch me on social.
          </Text>
        </Stack>

        <Stack direction="vertical" gap="condensed">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="contact-info-row"
            style={{ color: '#fff', textDecoration: 'none' }}
          >
            <span className="contact-info-row__icon" aria-hidden="true">
              <MailIcon size={16} />
            </span>
            <Stack direction="vertical" gap="none">
              <Text as="span" size="small" style={{ opacity: 0.8 }}>
                Email
              </Text>
              <Text as="span" weight="semibold" style={{ color: '#fff' }}>
                {CONTACT_EMAIL}
              </Text>
            </Stack>
          </a>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-info-row"
            style={{ color: '#fff', textDecoration: 'none' }}
          >
            <span className="contact-info-row__icon" aria-hidden="true">
              <InstagramIcon />
            </span>
            <Stack direction="vertical" gap="none">
              <Text as="span" size="small" style={{ opacity: 0.8 }}>
                Instagram
              </Text>
              <Text as="span" weight="semibold" style={{ color: '#fff' }}>
                HELIXE
              </Text>
            </Stack>
          </a>

          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-info-row"
            style={{ color: '#fff', textDecoration: 'none' }}
          >
            <span className="contact-info-row__icon" aria-hidden="true">
              <FacebookIcon />
            </span>
            <Stack direction="vertical" gap="none">
              <Text as="span" size="small" style={{ opacity: 0.8 }}>
                Facebook
              </Text>
              <Text as="span" weight="semibold" style={{ color: '#fff' }}>
                Mohammad Tanvir
              </Text>
            </Stack>
          </a>

          <span className="availability-pill">
            <span className="availability-dot" aria-hidden="true" />
            Usually replies within a day
          </span>
        </Stack>
      </div>
    </section>
  )
}
