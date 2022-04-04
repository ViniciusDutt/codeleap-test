import React from 'react'

import { Container, Content } from './styles'
import { Button } from 'components'

type Props = {
  handleClose: () => void
  onClick: () => void
}

export default function DeleteModal({handleClose, onClick}:Props) {
  
  return (
    <Container>
      <Content>
        <h1>Are you sure you want to delete this item?</h1>
        <div>
            <Button onClick={handleClose} outline>Cancel</Button>
            <Button onClick={onClick} outline>OK</Button>
        </div>
      </Content>
    </Container>
  )
}
