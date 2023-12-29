import React, { useState } from 'react'
import { Box } from '@mui/material'
import { ConnectionOptions } from 'libs/web3/components/ConnectionOptions'
import { ConnectionType } from 'libs/web3/config/connectors'
import { useWeb3React } from '@web3-react/core'
import styled from 'styled-components'
import { useAppSelector } from 'App/hooks'

const Web3Modal: React.FC = () => {
  const { isActive } = useWeb3React()
  const currentConnectionType = useAppSelector(({ wallet }) => wallet.connectionType)
  return (
    <Box sx={{ maxWidth: '350px' }}>
      <TermPolicyWrapper>
        By connecting a wallet, you agree to our Terms of Service and acknowledge that you have read and understand the
        our protocol disclaimer.
      </TermPolicyWrapper>
      <ConnectionOptions currentConnectionType={currentConnectionType} isConnectionActive={!!currentConnectionType} />
    </Box>
  )
}

export default Web3Modal

export const TermPolicyWrapper = styled.div`
  width: fit-content;
  background: #efefef;
  padding: 12px;
  margin: 12px 16px;
  border-radius: 12px;
  font-size: 13px;
`
