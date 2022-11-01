import styled from "styled-components";

export const Container = styled.div`
  width: 688px;
  min-height: 222px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 16px;
  padding: 20px;

`;

export const OrderCard = styled.div`
  display: flex;
  width: 624px;
  height: 46px;
  margin-bottom: 10px;
  margin-top: 10px;
  align-items: center;
  justify-content: space-between;
`;

export const BodyWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const UserAvatar = styled.img`
  width: 46px;
  height: 46px;
  border-radius: 100%;
  margin-right: 10px;
`;
export const SettingsBox = styled.div`
  font-family: 'Oxygen';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #C9CCCF;
  align-items: center;
  display: flex;
  &:hover{
    cursor: pointer;
  }
`
export const Select = styled.select`
  border: 0;
  background-color: #FFF;
  width: 40px;
  :focus-visible {
    outline: none;
  }
  &:hover{
    cursor: pointer;
  }
`;
