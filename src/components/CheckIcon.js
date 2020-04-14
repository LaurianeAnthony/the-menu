import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../constants/colors'

const Icon = styled.span`
  height: 20px;
  width: 20px;
  border-radius: 100%;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  color: ${COLORS.WHITE};
  font-weight: 600;
  background: ${props => (props.checked ? COLORS.GREEN_LIGHT : COLORS.MAIN)};
`

const CheckIcon = ({ checked }) => {
  return <Icon checked={checked}>{checked ? '✓' : '✗'}</Icon>
}

export default CheckIcon
