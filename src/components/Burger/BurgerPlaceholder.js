import React from 'react'

import { StyledBurger } from './Burger'
import {
  BunTopPlaceholder,
  BunBottomPlaceholder,
  IngredientPlaceholder
} from './BurgerItems'

const PlaceholderBurger = ({ size = 200 }) => {
  return (
    <StyledBurger size={size}>
      <BunBottomPlaceholder mb="8px" />
      <IngredientPlaceholder mb="8px" />
      <IngredientPlaceholder mb="8px" />
      <BunTopPlaceholder mb="8px" />
    </StyledBurger>
  )
}

export default PlaceholderBurger
