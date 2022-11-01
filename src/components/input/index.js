import React, {FC, useState, useEffect, useRef} from 'react';
import {
  Container,
  InputContainer,
  Title,
} from './styles'

const Input = (props) => {
  const {
    value,
    handleChange,
    title,
    isBlocked,
    placeholder
  } = props
  
  return(
    <Container>
        <Title htmlFor='inputText'>
          {title}
        </Title>
        <InputContainer
          id='inputText'
          placeholder={placeholder}
          readOnly={isBlocked || false}
          type={'text'}
          value={value}
          onChange={(e) => handleChange(e.target.value)}
        />
    </Container>
  )
}

export default Input