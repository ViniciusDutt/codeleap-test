import React, { Children } from 'react'

import { Container } from './styles'

type Props = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  outline?: boolean
  children: React.ReactNode
  disabled?: boolean
}

export default function Button({onClick, outline, children, disabled}:Props) {
  return (
    <Container onClick={onClick} outlineButton={outline} disabled={disabled}>
      {children}
    </Container>
  )
}
