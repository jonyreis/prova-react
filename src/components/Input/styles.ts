import styled from "styled-components";

export const InputContainer = styled.input`
  border: none;
  border-bottom: 2px solid #ebebeb;
  font-size: 17px;
  font-style: italic;
  font-weight: bold;

  width: 100%;
  height: 60px;
  margin: 8px 0;
  padding-left: 30px;
  outline: none;
  &::placeholder {
    font-size: 17px;
    font-style: italic;
    font-weight: bold;
  }
`;
