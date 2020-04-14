import { isBurgerValid } from './checker'
import { TYPES, CLASSIC_BUNS, ITEMS } from '../constants/burger'

describe('isBurgerValid', () => {
  it('Valid burger', () => {
    const burger = [
      { type: TYPES.BUN, item: CLASSIC_BUNS.CLASSIC_BUN_BOTTOM },
      { type: TYPES.INGREDIENT, item: ITEMS.TOMATOES },
      { type: TYPES.INGREDIENT, item: ITEMS.BEEF },
      { type: TYPES.INGREDIENT, item: ITEMS.LETTUCE },
      { type: TYPES.BUN, item: CLASSIC_BUNS.CLASSIC_BUN_TOP }
    ]

    expect(isBurgerValid(burger)).toBe(true)
  })
})
