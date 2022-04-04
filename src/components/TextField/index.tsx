import React from 'react'

import { Container } from './styles'

interface Props extends React.InputHTMLAttributes<HTMLInputElement|HTMLTextAreaElement>{
  label: string
  multiline?: boolean
  rows?: number
}

export default function TextField({label, multiline, value, rows, ...rest}:Props) {
  
  return (
    <Container>
        <p>{label}</p>
        {multiline ? <textarea rows={rows} {...rest} value={value} /> : <input value={value} {...rest} />}
    </Container>
  )
}