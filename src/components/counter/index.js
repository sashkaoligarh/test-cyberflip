import React from "react";
import {
  Container,
  Number,
  Operator
} from './styles'
import Minus from './minus.svg'
import Plus from './plus.svg'
const Counter = (props) => {
  const {
    count,
    onMinus,
    onPlus
  } = props
  return (
    <Container>
      <Operator src={Minus} onClick={() => onMinus()}/>
      <Number>{count}</Number>
      <Operator src={Plus} onClick={() => onPlus()}/>
    </Container>
  )
}

export default Counter