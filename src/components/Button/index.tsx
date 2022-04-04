import React, { Children } from 'react'

import { Container } from './styles'

type Props = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  outline?: boolean
  children: React.ReactNode
}

export default function Button({onClick, outline, children}:Props) {
  return (
    <Container onClick={onClick} outlineButton={outline}>
      {children}
    </Container>
  )
}
