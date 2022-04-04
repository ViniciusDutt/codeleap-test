import React from 'react'

import * as icons from 'theme/icons'

type Props = {
    iconSelect: 'DeleteIcon' | 'EditIcon'
    onClick?: (e:React.MouseEvent) => void
}

export default function Icon({iconSelect, onClick}:Props) {

  const iconSrc =  icons[iconSelect]
  
  return (
    <img src={iconSrc} alt="" onClick={onClick} />
  )
}