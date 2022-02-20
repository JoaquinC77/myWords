import styled from 'styled-components';

export const Container = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 10px;

  @media (max-width: 700px){
    box-shadow: none;
  }
`;

export const Title = styled.div`
  text-align: center;
  padding: 15px 0;
  
  h6{
    font-size: 45px;
    font-weight: 800;
    color: #075aaa;
  }
`;


