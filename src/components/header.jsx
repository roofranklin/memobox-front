import Logo from './logo';
import styled from "styled-components";

const Content = styled.header`
    background-color: #FFFFFF;
    width: 100%;
`

const Container = styled.div`
    display: flex;
    width: 1440px;
    padding: 8px 32px;
    justify-content: space-between;
    margin: auto;
    align-items: center;
`

const Avatar = styled.img``

const Header = () => {
    return (
      <Content>
        <Container>
            <Logo />
            <Avatar src='images/icons/user.svg' />
        </Container>
      </Content>  
    );
  };
  
  export default Header;