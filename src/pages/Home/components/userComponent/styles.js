import styled from "styled-components";

export const Select = styled.select`
  border: 0;
  background-color: #FFF;
  :focus-visible {
    outline: none;
  }
  &:hover{
    cursor: pointer;
  }
`;

export const StyledDialog = styled.dialog`
position: absolute;
  width: 600px;
  border-radius: 10px;
  z-index: 5;
  padding: 20px;
  top:20%;
  overflow: auto;
  min-height: 400px;
  border: none;
  box-shadow: 0 0 #0000, 0 0 #0000, 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  &:backdrop {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const BodyDialog = styled.div`
  height: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`