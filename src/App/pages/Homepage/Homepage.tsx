import { useWeb3React } from '@web3-react/core'
import React, { useEffect, useState } from 'react'

import { ConnectionType, switchNetwork } from 'libs/web3/config/connectors'
import { CHAIN_INFO, INPUT_CHAIN_URL } from 'libs/web3/config/constants'
import { PageContainer } from 'App/styles/styled'

const Homepage = () => {
  const { chainId, account } = useWeb3React()

  return <PageContainer>THIS IS HOMEPAGE</PageContainer>
}

export default Homepage
