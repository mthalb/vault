'use client'

import { useState } from 'react'
import {
  Heading,
  Text,
  Stack,
  FormControl,
  TextInput,
  Textarea,
  Button,
  Flash,
} from '@primer/react'
import {
  MailIcon,
  PersonIcon,
  PaperAirplaneIcon,
  CommentDiscussionIcon,
  ClockIcon,
} from '@primer/octicons-react'
import { CONTACT_EMAIL } from '@/lib/site-links'

export function ContactSection() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const subject = encodeURIComponent(
      `New message from ${name || 'a visitor'}`,
    )
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`)
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section className="contact-card">
      {/* Colorful, animated identity panel */}
      <div className="contact-card__info">
        <Stack direction="vertical" gap="normal">
          <span className="contact-card__eyebrow">
            <CommentDiscussionIcon size={14} />
            Let&apos;s talk
          </span>
          <Heading
            as="h2"
            variant="medium"
            style={{ color: '#fff' }}
          >
            Get in touch
          </Heading>
          <Text style={{ color: 'rgba(255,255,255,0.9)', maxWidth: 320 }}>
            Questions, feedback, or a link to swap in? Drop a message and
            it&apos;ll land straight in my inbox.
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

          <span className="availability-pill">
            <span className="availability-dot" aria-hidden="true" />
            Usually replies within a day
          </span>
        </Stack>
      </div>

      {/* Neutral Primer surface holding the form */}
      <div className="contact-card__form">
        <Stack direction="vertical" gap="condensed">
          <Text
            as="span"
            size="small"
            weight="semibold"
            style={{
              color: 'var(--fgColor-accent)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
            }}
          >
            <ClockIcon size={14} />
            Send a message
          </Text>
          <Text style={{ color: 'var(--fgColor-muted)' }}>
            Fill in the form below — it opens your email client with
            everything pre-filled.
          </Text>
        </Stack>

        {sent && (
          <Flash variant="success">
            Your email client should have opened with your message ready to
            send.
          </Flash>
        )}

        <form
          onSubmit={handleSubmit}
          style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
        >
          <Stack
            direction={{ narrow: 'vertical', regular: 'horizontal' }}
            gap="normal"
          >
            <FormControl required>
              <FormControl.Label>Name</FormControl.Label>
              <TextInput
                leadingVisual={PersonIcon}
                placeholder="Ada Lovelace"
                block
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>
            <FormControl required>
              <FormControl.Label>Email</FormControl.Label>
              <TextInput
                type="email"
                leadingVisual={MailIcon}
                placeholder="ada@example.com"
                block
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
          </Stack>

          <FormControl required>
            <FormControl.Label>Message</FormControl.Label>
            <Textarea
              placeholder="Tell me what's on your mind…"
              rows={5}
              block
              resize="vertical"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </FormControl>

          <div style={{ alignSelf: 'flex-start' }}>
            <Button
              type="submit"
              variant="primary"
              className="contact-submit-button"
              trailingVisual={PaperAirplaneIcon}
            >
              Send message
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}
