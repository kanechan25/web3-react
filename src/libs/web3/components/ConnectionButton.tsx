import * as React from 'react'
import { Box, Dialog, DialogContent } from '@mui/material'
import ConnectButton from 'App/components/ConnectButton/ConnectButton'
import Web3Modal from 'libs/web3/components/ConnectionModal'
import { useWeb3React } from '@web3-react/core'
import { shortenString } from 'App/utils'
import { IconClose } from 'assets/images/icons'
import { CommonSpaceRowBox } from 'App/styles/styled'
import { useActions, useAppSelector } from 'App/hooks'
const Web3Connection = () => {
  const { account } = useWeb3React()
  const isOpenModal = useAppSelector(({ wallet }) => wallet.isOpenModal)
  const { setOpenModal } = useActions()

  const handleClickOpen = () => {
    setOpenModal({ isOpenModal: true })
  }

  const handleClose = () => {
    setOpenModal({ isOpenModal: false })
  }

  return (
    <React.Fragment>
      <ConnectButton onClick={handleClickOpen} background={account ? '#4d220c' : '#2b4e34'}>
        {account ? shortenString(account, 7, 5) : 'Connect Wallet'}
      </ConnectButton>
      <Dialog
        sx={{
          '& .MuiDialog-paper': {
            borderRadius: '16px',
          },
        }}
        className='dialog-connect-modal'
        open={isOpenModal}
        onClose={handleClose}
      >
        <CommonSpaceRowBox style={{ padding: '16px 16px 10px' }}>
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
