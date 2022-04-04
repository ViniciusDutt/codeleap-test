import React from 'react'

import { Container, Content } from './styles'
import { PostBox } from 'components'
import { PostType } from 'pages/Timeline'

type Props = {
  data: PostType
  onClick: (state: { title: string; content: string }) => void;
}

export default function EditModal({data, onClick}:Props) {
  return (
    <Container>
      <Content>
        <PostBox title="Edit item" buttonName="Save" data={data} onClick={onClick}/>
      </Content>
    </Container>
  )
}