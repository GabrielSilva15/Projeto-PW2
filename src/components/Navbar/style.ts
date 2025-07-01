import styled from "styled-components";

export const NavbarContainer = styled.div`
    display: flex;
    gap: 16px;
    padding: 12px 20px;
    margin-bottom: 20px;
    justify-content: center;
    background-color: #f5f5f5;
    border: 1px solid #ddd;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
`;

export const NavButton = styled.button<{ active?: boolean }>`
  padding: 10px 20px;
  background-color: ${(props) => (props.active ? "#4caf50" : "#ffffff")};
  color: ${(props) => (props.active ? "#ffffff" : "#333")};
  border: 2px solid #4caf50;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: ${(props) => (props.active ? "#45a049" : "#e6f5e6")};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #a5d6a7;
  }
`;