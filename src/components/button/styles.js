import styled from "styled-components";

export const Container = styled.button`
  width:100%;
  display:flex;
  justify-content: center;
  align-items: center;
  font-family: Poppins;
  font-style: normal;
  color:#FFFF;
  font-weight: 600;
  font-size: 18px;
  background-color: #797FE2;
  line-height: 27px;
  height:49px;
  border:none;
  border-radius: 10px;
  outline: none;
  &:hover{
    cursor: pointer;
    background-color: #90B6FF;

  }
  &:active{
    background-color: #2E2790;
  }
  @media screen and (max-width: 700px){
    font-weight: 500;
    font-size: 14px;
  }
`
