import React from 'react'
import styled from 'styled-components'
import { BunTop, Ingredient, BunBottom } from './BurgerItems'

import { TYPES } from '../../constants/burger'

export const StyledBurger = styled.div`
  width: ${props => props.size}px;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
`

const Burger = ({ onClick, burger, size = 200, explode }) => {
  return (
    <StyledBurger size={size}>
      {burger.map(({ type, item }, index) => (
        <React.Fragment key={index}>
          {type === TYPES.BUN && item.includes('TOP') && (
            <BunTop
              item={item}
              onClick={() => onClick && onClick({ index, item, type })}
              mb={explode ? '8px' : 0}
            />
          )}
          {type === TYPES.INGREDIENT && (
            <Ingredient
              item={item}
              onClick={() => onClick && onClick({ index, item, type })}
              mb={explode ? '8px' : 0}
            />
          )}
          {type === TYPES.BUN && item.includes('BOTTOM') && (
            <BunBottom
              item={item}
              onClick={() => onClick && onClick({ index, item, type })}
              mb={explode ? '8px' : 0}
            />
          )}
        </React.Fragment>
      ))}
    </StyledBurger>
  )
}

export default Burger
