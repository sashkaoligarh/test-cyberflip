import React from 'react';
import {Container} from './styles'

const Button = (props) => {
  const {
    onClick,
    title,
    disabled
  } = props
  return (
    <Container
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </Container>
  );
}
 
export default Button;