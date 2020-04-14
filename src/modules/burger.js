import { BUNS, INGREDIENTS, TYPES } from '../constants/burger'

export const generateBurger = ingredients => {
  const breadIndex = parseInt(Math.random() * BUNS.length)
  const sidesIndexes = new Array(ingredients)
    .fill(0)
    .map(() => parseInt(Math.random() * INGREDIENTS.length))

  return [
    { type: TYPES.TOP, item: BUNS[breadIndex] },
    ...sidesIndexes.map(index => {
      return { type: 'sides', item: INGREDIENTS[index] }
    }),
    { type: TYPES.BOTTOM, item: BUNS[breadIndex] }
  ]
}
