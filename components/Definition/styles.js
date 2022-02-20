import styled from 'styled-components';

export const BoxDefinition = styled.div`
  margin: 3px;
  border: 2px solid rgba(7, 90, 170, 0.9);
  border-radius: 8px;
  padding: 15px;

  background-color: rgba(7, 90, 170, 0.9);
  color: #fff;
  ${'' /* transition: 0.3s; */}

  transition: 1.5s ease;
 		-webkit-transition: 1.5s ease; /* Chrome - Safari */

  &:hover{
    background-color: transparent;
    color: #075aaa;
    transition: 0.3s ease;

    transform : scale(1.1);
		-webkit-transform : scale(1.1); /* Chrome - Safari */
  }
`;

export const Subtitle = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
`;