import styled from "styled-components";

export const Container = styled.div`
  width: 512px;
  height: 326px;
  background: #ffffff;
  border-radius: 16px;
  padding: 32px;
  overflow: auto;
`;

export const ItemBox = styled.div`
  display: flex;
  align-items: center;
  /* border: 1px solid #6458ff; */
  border-radius: 10px;
  width: 449px;
  height: 102px;
  padding: 20px;
  margin-bottom: 32px;
`;

export const ItemImg = styled.img`
  width: 102px;
  height: 102px;
  background: #FFFFFF;
  border: 1px solid #F7F7F7;
  border-radius: 16px;
  padding: 7px;
`
export const ItemTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
export const ItemBodyWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`
export const DeleteImg = styled.img`
  padding: 8px;
  width: 20px;
  height: 20px;
  background: #FAFBFF;
  border: 1px solid #F2F4FF;
  border-radius: 16px;
  &:hover{
    cursor: pointer;
  }
`