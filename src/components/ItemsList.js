import React, { useContext } from 'react'
import styled from 'styled-components'

import { StateContext } from '../App'
import { BUNS, TYPES, INGREDIENTS } from '../constants/burger'

import { Title3 } from './Title'
import { BunTop, BunBottom, Ingredient } from './Burger/BurgerItems'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  width: 33%;
`

const List = styled.div`
  width: 70%;
  max-width: 170px;
  margin-bottom: 1rem;
`

const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 0.5rem;
`

const ItemsList = () => {
  const { userBurger, setUserBurger } = useContext(StateContext)

  const onClickItem = ({ type, item }) => {
    setUserBurger([...userBurger, { type, item }])
  }

  return (
    <Container>
      <Title3>Buns</Title3>
      <List>
        <ListItem>
          <BunTop
            onClick={() =>
              onClickItem({
                type: TYPES.BUN,
                item: BUNS.CLASSIC_BUN_TOP
              })
            }
            item={BUNS.CLASSIC_BUN_TOP}
          />
        </ListItem>
        <ListItem>
          <BunBottom
            onClick={() =>
              onClickItem({
                type: TYPES.BUN,
                item: BUNS.CLASSIC_BUN_BOTTOM
              })
            }
            item={BUNS.CLASSIC_BUN_BOTTOM}
          />
        </ListItem>
        <ListItem>
          <BunTop
            onClick={() =>
              onClickItem({ type: TYPES.BUN, item: BUNS.DARK_BUN_TOP })
            }
            item={BUNS.DARK_BUN_TOP}
          />
        </ListItem>
        <ListItem>
          <BunBottom
            onClick={() =>
              onClickItem({
                type: TYPES.BUN,
                item: BUNS.DARK_BUN_BOTTOM
              })
            }
            item={BUNS.DARK_BUN_BOTTOM}
          />
        </ListItem>
      </List>

      <Title3>Ingredients</Title3>
      <List>
        {Object.keys(INGREDIENTS).map((item, index) => (
          <ListItem key={index}>
            <Ingredient
              onClick={() => onClickItem({ type: TYPES.INGREDIENT, item })}
              item={item}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  )
}

export default ItemsList
