import styled from 'styled-components';

export const Header = styled.header`
  background-color: #efe9e5;
  display: flex;
  

  .icon {
    flex: 1;
    padding: 20px 5px;
  }

  ul{
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
  }

  ul li {
    height: 100%;
    display: flex;
    align-items: center;
    min-width: 100px;
    padding: 20px 15px;
    transition: 0.3s;

    &:hover {
      background-color: #01295c;
      color: #fff;
      transition: 0.3s;
    }
  }
  
`;

export const Footer = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #efe9e5;
  padding-bottom: 8px;

  h3{
    margin: 15px 0 0 0;
  }

  p{
    margin: 0;
  }
`;

export const Image = styled.img`
  height: 50px;
  width: 50px;
`;

export const Exit = styled.div`
  border: none;
  background-color: transparent;
`;