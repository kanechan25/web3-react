import React from 'react'
import Homepage from 'App/pages/Homepage/Homepage'
import Web3Info from 'App/pages/Web3Info/Web3Info'
import { PageContainer } from 'App/styles/styled'

type TRoutes = {
  href: string
  id: string
  name: string
  element: React.ReactNode
}
export const routes: TRoutes[] = [
  {
    href: '/',
    id: 'home',
    name: 'Home',
    element: <Homepage />,
  },
  {
    href: '/tokenomics',
    id: 'tokenomics',
    name: 'Tokenomics',
    element: <PageContainer>TOKENOMICS</PageContainer>,
  },
  {
    href: '/roadmap',
    id: 'roadmap',
    name: 'Roadmap',
    element: <PageContainer>ROADMAP</PageContainer>,
  },
  {
    href: '/web3-info',
    id: 'web3Info',
    name: 'Web3 Info',
    element: <Web3Info />,
  },
]
