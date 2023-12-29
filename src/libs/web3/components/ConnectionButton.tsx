import * as React from 'react'
import { Box, Dialog, DialogContent, DialogTitle } from '@mui/material'
import ConnectButton from 'App/components/ConnectButton/ConnectButton'
import Web3Modal from 'libs/web3/components/ConnectionModal'
import { useWeb3React } from '@web3-react/core'
import { shortenString } from 'App/utils'
import { IconClose } from 'assets/images/icons'
import { CommonSpaceRowBox } from 'App/styles/styled'
const Web3Connection = () => {
  const { account } = useWeb3React()

  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <React.Fragment>
      <ConnectButton onClick={handleClickOpen}>
        {account ? shortenString(account, 4, 4) : 'Connect Wallet'}
      </ConnectButton>
      <Dialog className='dialog-connect-modal' open={open} onClose={handleClose}>
        <CommonSpaceRowBox style={{ padding: '12px' }}>
          <Box>Connect Wallet</Box>
          <IconClose onClick={handleClose} iconColor='#000' />
        </CommonSpaceRowBox>
        <DialogContent sx={{ p: '0px' }}>
          <Web3Modal />
        </DialogContent>
      </Dialog>
    </React.Fragment>
  )
}
export default Web3Connection
