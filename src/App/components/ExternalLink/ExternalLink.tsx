import React from 'react'

type Props = {
  href: string
  children: React.ReactNode
  className?: string
  onClick?: () => void
  target?: string
  disabled?: boolean
}

export default function ExternalLink({ href, children, className, onClick }: Props) {
  return (
    <a href={href} onClick={onClick} className={className} target='_blank' rel='noopener noreferrer'>
      {children}
    </a>
  )
}

export function ExternalBoxLink({ href, children, className, onClick }: Props) {
  return (
    <a
      href={href}
      style={{ textDecoration: 'none' }}
      onClick={onClick}
      className={className}
      target='_blank'
      rel='noopener noreferrer'
    >
      {children}
    </a>
  )
}

export function ButtonLink({ href, target, children, className, onClick, disabled }: Props) {
  const handleClick = () => {
    if (disabled) {
      return
    }

    if (onClick) {
      onClick()
      window.open(href, target)
    }
  }

  return (
    <button
      style={{
        border: disabled ? '0.5px solid #999999' : '0.5px solid #1e1e1e',
        backgroundColor: disabled ? '#cccccc' : '#fff',
        color: disabled ? '#666666' : '#1e1e1e',
        fontSize: '16px',
        textAlign: 'left',
      }}
      onClick={handleClick}
      className={className}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
