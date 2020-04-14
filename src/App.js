import React, { createContext, useState } from 'react'
import styled from 'styled-components'

import ItemsList from './components/ItemsList'
import WorkPlan from './components/WorkPlan'
import RulesList from './components/RulesList'

import logo from './image/logo.png'

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 50px 50px 50px;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const StateContext = createContext()

function App() {
  const [userBurger, setUserBurger] = useState([])
  const [ingredients, setIngredients] = useState(3)

  return (
    <StateContext.Provider
      value={{
        userBurger,
        setUserBurger,
        ingredients,
        setIngredients
      }}
    >
      <Header>
        <img src={logo} alt="Logo" width="150" />
      </Header>
      <Wrapper>
        <ItemsList />
        <WorkPlan />
        <RulesList />
      </Wrapper>
    </StateContext.Provider>
  )
}

export default App
