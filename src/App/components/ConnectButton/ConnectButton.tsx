import { Button } from '@mui/material'
import React from 'react'

interface IConnectButton {
  children?: React.ReactNode
  disabled?: boolean
  onClick?: () => void
  [key: string]: any
}

const ConnectButton: React.FC<IConnectButton> = ({ disabled, children, onClick, ...rest }) => {
  return (
    <Button variant='contained' sx={{ ...rest }} onClick={onClick} disabled={disabled}>
      {children}
    </Button>
  )
}

export default ConnectButton
