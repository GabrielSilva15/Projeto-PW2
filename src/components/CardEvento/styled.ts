import styled from "styled-components";

export const CardContainer = styled.li`
  padding: 8px;
  width: 300px;
  border-radius: 4px;
  overflow: hidden;
  background-color: #ebebeb;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
  list-style: none;
`;

export const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px ;
`;

export const InfoContainer = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Title = styled.span`
  font-weight: 700;
  color: black;
`;

 const Address = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: small;
  color: rgb(75, 75, 75);
`;

export const DateText = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: small;
  color: rgb(75, 75, 75);
`;

export default Address
