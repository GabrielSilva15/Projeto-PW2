import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-weight: bold;
  font-size: 14px;
  color: #333;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 5px 10px;
  background-color: #f0efef;
  border: none;
  border-radius: 8px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
  font-size: 16px;

  &:focus {
    outline: 1px solid #9e9e9e;
  }
`;
