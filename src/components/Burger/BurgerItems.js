import styled from 'styled-components'
import { darken, lighten, linearGradient } from 'polished'
import { space } from 'styled-system'

import { BUNS, INGREDIENTS } from '../../constants/burger'
import { BURGER_COLORS, COLORS } from '../../constants/colors'

export const Item = styled.div`
  transition: opacity 200ms ease-in-out;
  ${space}

  ${({ onClick }) =>
    onClick &&
    `:hover {
      cursor: pointer;
      opacity: 0.8;
    }`}
`

export const BunTop = styled(Item)`
  width: 100%;
  border-radius: 2px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
  height: 50px;

  ${({ item }) =>
    item === BUNS.CLASSIC_BUN_TOP &&
    linearGradient({
      colorStops: [
        BURGER_COLORS.CLASSIC_BUN,
        darken(0.1, BURGER_COLORS.CLASSIC_BUN)
      ],
      toDirection: 'to bottom',
      fallback: BURGER_COLORS.CLASSIC_BUN
    })}

  ${({ item }) =>
    item === BUNS.DARK_BUN_TOP &&
    linearGradient({
      colorStops: [BURGER_COLORS.DARK_BUN, darken(0.1, BURGER_COLORS.DARK_BUN)],
      toDirection: 'to bottom',
      fallback: BURGER_COLORS.DARK_BUN
    })}
`

export const BunBottom = styled(Item)`
  width: 100%;
  border-radius: 5px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  height: 30px;

  ${({ item }) =>
    item === BUNS.CLASSIC_BUN_BOTTOM &&
    linearGradient({
      colorStops: [
        BURGER_COLORS.CLASSIC_BUN,
        darken(0.1, BURGER_COLORS.CLASSIC_BUN)
      ],
      toDirection: 'to top',
      fallback: BURGER_COLORS.CLASSIC_BUN
    })}

  ${({ item }) =>
    item === BUNS.DARK_BUN_BOTTOM &&
    linearGradient({
      colorStops: [BURGER_COLORS.DARK_BUN, darken(0.1, BURGER_COLORS.DARK_BUN)],
      toDirection: 'to top',
      fallback: BURGER_COLORS.DARK_BUN
    })}
`

export const Ingredient = styled(Item)`
  width: 97%;
  border-radius: 5px;
  height: 20px;

  ${({ item }) =>
    item === INGREDIENTS.TOMATOES &&
    `
      display: flex;
      justify-content: space-around;
      height: 15px;
      :before {
        display: block;
        height: 100%;
        width: 50%;
        margin-right: 2px;
        content: '';

        border-radius: 40px;
        background: ${BURGER_COLORS.TOMATOES};
      }
      :after {
        display: block;
        height: 100%;
        width: 50%;
        border-radius: 40px;
        margin-left: 2px;
        content: '';

        background: ${BURGER_COLORS.TOMATOES};
      }
    `}

  ${({ item }) =>
    item === INGREDIENTS.LETTUCE &&
    `
      width: 102%;
      background-color: ${BURGER_COLORS.LETTUCE};
    `}

  ${({ item }) =>
    item === INGREDIENTS.ONION &&
    `
      height: 8px;
      border-radius: 30px;
      background: ${BURGER_COLORS.ONION};
    `}

  ${({ item }) =>
    item === INGREDIENTS.BEEF &&
    `
      background-image: radial-gradient(${BURGER_COLORS.BEEF_DOT} 20%, transparent 20%),
        radial-gradient(${BURGER_COLORS.BEEF_DOT} 20%, transparent 20%);
      background-color: ${BURGER_COLORS.BEEF};
      background-position: 0 0, 10px 10px;
      background-size: 20px 20px;
    `}

  ${({ item }) =>
    item === INGREDIENTS.BACON &&
    `
      background: ${BURGER_COLORS.BACON};
      height: 15px;
      position: relative;
      :before {
        display: block;
        height: 5px;
        width: 100%;
        content: '';
        position: absolute;
        top: 0px;
        background: ${lighten(0.2, BURGER_COLORS.BACON)};
      }
      :after {
        display: block;
        height: 5px;
        width: 100%;
        content: '';
        position: absolute;
        bottom: 0px;
        background: ${lighten(0.2, BURGER_COLORS.BACON)};
      }
    `}

  ${({ item }) =>
    item === INGREDIENTS.CHEESE &&
    `
      background: ${BURGER_COLORS.CHEESE};
      height: 5px;
      border-radius: 1px;
      position: relative;
      z-index: 1;
      :after {
        display: block;
        height: 0;
        width: 0;
        content: '';
        position: absolute;
        right: 1px;
        bottom: -9px;
        transform: rotate(10deg);
        border-left: 107px solid transparent;
        border-bottom: 20px solid ${BURGER_COLORS.CHEESE};
      }
    `}
`

export const BunBottomPlaceholder = styled(BunBottom)`
  background: ${lighten(0.25, COLORS.GREY)};
`
export const BunTopPlaceholder = styled(BunTop)`
  background: ${lighten(0.25, COLORS.GREY)};
`
export const IngredientPlaceholder = styled(Ingredient)`
  background: ${lighten(0.25, COLORS.GREY)};
`
