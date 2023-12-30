import React from 'react'

interface IconProps {
  iconColor: string
  width?: string
  height?: string
  onClick?: () => void
}

export const IconInfo: React.FC<IconProps> = ({ iconColor, width, height }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill={iconColor}
    viewBox='0 0 32 32'
    width={width || 14}
    height={height || 14}
  >
    <path d='M 16 3 C 8.832031 3 3 8.832031 3 16 C 3 23.167969 8.832031 29 16 29 C 23.167969 29 29 23.167969 29 16 C 29 8.832031 23.167969 3 16 3 Z M 16 5 C 22.085938 5 27 9.914063 27 16 C 27 22.085938 22.085938 27 16 27 C 9.914063 27 5 22.085938 5 16 C 5 9.914063 9.914063 5 16 5 Z M 15 10 L 15 12 L 17 12 L 17 10 Z M 15 14 L 15 22 L 17 22 L 17 14 Z' />
  </svg>
)
export const IconWarning: React.FC<IconProps> = ({ iconColor, width, height }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={width || 20}
    height={height || 20}
    viewBox='0 0 24 24'
    fill='none'
    stroke={iconColor}
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z'></path>
    <line x1='12' y1='9' x2='12' y2='13'></line>
    <line x1='12' y1='17' x2='12.01' y2='17'></line>
  </svg>
)
export const IconClose: React.FC<IconProps> = ({ iconColor, width, height, onClick }) => {
  return (
    <svg
      style={{ cursor: 'pointer' }}
      onClick={onClick}
      width={width || 16}
      height={height || 16}
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M14.75 1.25L1.25 14.75'
        stroke={iconColor}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M14.75 14.75L1.25 1.25'
        stroke={iconColor}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
