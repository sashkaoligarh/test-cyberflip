import styled from 'styled-components'

export const Container = styled.div`
  width: 97px;
  height: 38px;
  background: #FAFBFF;
  border: 1px solid #F2F4FF;
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
  padding: 8px 12px;
  align-items: center;
  margin:16px 24px 16px 32px;
  @media screen and (max-width: 700px){
    margin:6px 12px 22px 12px;
  }
`
export const Operator = styled.img`
  width: 28px;
  height: 28px;
  &:hover{
    cursor: pointer;
  }
`

export const Number = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  font-family: 'Oxygen';
font-style: normal;
  &:hover{
    cursor: pointer;
  }
`