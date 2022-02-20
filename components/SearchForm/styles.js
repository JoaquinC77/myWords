import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  input[type="text"]{
    border: none;
    border-radius: 5px;
    background-color: #eee;
    padding: 8px;
    width: 100%;
    outline: 01295c;
  }
`;

export const Button = styled.button`
  border: 3px solid #01295c;
  border-radius: 10px;
  color: #FFFFFF;
  background-color: #01295c;
  padding: 8px;
  width: 100%;
  transition: 0.3s;
  font-weight: 700;
  
  &:hover{
    background-color: transparent;
    transition: 0.3s;
    color: #000;
  }
`;