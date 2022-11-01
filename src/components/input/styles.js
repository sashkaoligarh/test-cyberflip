import styled from 'styled-components'

export const Container = styled.form`
  width:100%;
  display: flex;
  flex-direction: column;
  position: relative;
`

export const InputContainer = styled.input`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  width:100%;
  height: 59px;
  background: rgba(187, 210, 255, 0.05);
  border: 1px solid #DBDBDB;
  border-radius: 5px;
  &:hover {
    background: rgba(187, 210, 255, 0.05);
    border: 1px solid #6458FF;
  }
  &:focus-visible{
    background: #FFFFFF;
    border: 1px solid #6458FF;
    border-radius: 5px;
    outline: none;
  }
`

export const Title = styled.label`
  position: absolute;
  background-color: #FFFF;
  margin:10px;
  top:-25px;
  left:4px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color:#2E2790;
  line-height: 27px;
  padding:2px;
`
