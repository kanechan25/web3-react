import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

interface ITabItem {
  to: string
  content: React.ReactNode
  isActive: boolean
  onClick: () => void
}
enum COLOR {
  LIGHT = '#FFF',
  DARK = '#000',
  NONE = 'transparent',
}
const TabItem: React.FC<ITabItem> = ({ to, content, onClick, isActive }) => {
  const navigate = useNavigate()
  const handleClick = () => {
    onClick()
    navigate(`${to}`)
  }

  return (
    <MenuItem onClick={handleClick} active={isActive}>
      {content}
    </MenuItem>
  )
}

export default TabItem

const MenuItem = styled.div<{ active: boolean }>`
  padding: 8px 16px;
  border-radius: 24px;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  user-select: none;
  color: ${({ active }) => (active ? COLOR.LIGHT : COLOR.DARK)};
  background: ${({ active }) => (active ? COLOR.DARK : COLOR.NONE)};
`
