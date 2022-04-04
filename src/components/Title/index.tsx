import React from 'react'

import { Text } from './styles'

type Props = {
    white?: boolean
    children: React.ReactNode
}

export default function Title({white, children}:Props) {
  return (
    <Text whiteColor={white}>
        {children}
    </Text>
  )
}