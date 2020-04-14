import React, { useContext } from 'react'
import styled from 'styled-components'
import { lighten } from 'polished'
import { StateContext } from '../App'
import { COLORS } from '../constants/colors'
import Burger from './Burger/Burger'
import PlaceholderBurger from './Burger/BurgerPlaceholder'

const StyledWorkPlan = styled.div`
  width: 100%;
  margin: 0 20px;
  background: ${lighten(0.28, COLORS.GREY)};
  border: 1px dashed ${COLORS.GREY};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`

const StyledPlaceholderBurger = styled.div`
  width: 200px;
  position: absolute;
  bottom: 16px;
`

const StyledBurger = styled.div`
  position: absolute;
  bottom: 16px;
`

const Block = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  width: 33%;
`

const WorkPlan = () => {
  const { userBurger, setUserBurger } = useContext(StateContext)
  const onRemoveIngredient = index => {
    userBurger.splice(index, 1)
    setUserBurger([...userBurger])
  }
  return (
    <Block>
      <StyledWorkPlan>
        {userBurger.length === 0 && (
          <StyledPlaceholderBurger>
            <PlaceholderBurger size="200" />
          </StyledPlaceholderBurger>
        )}
        <StyledBurger>
          <Burger
            explode
            burger={userBurger}
            onClick={({ index }) => onRemoveIngredient(index)}
            size="200"
          />
        </StyledBurger>
      </StyledWorkPlan>
    </Block>
  )
}

export default WorkPlan
