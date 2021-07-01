import { React } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Header() {
  return (
    <Container>
      <Wrapper>
        <LogoArea>
          <Link to="/">Expert</Link>
          <Divider />
          <Title>Expert 신청하기</Title>
        </LogoArea>
      </Wrapper>
    </Container>
  );
}

const Container = styled.header`
  position: relative;
  height: 69px;
  border-bottom: 1px solid #e5e5e5;
  z-index: 10;
`;

const Wrapper = styled.div`
  padding: 22px 30px 0;
`;

const LogoArea = styled.h1`
  line-height: 25px;
`;

const Divider = styled.span`
  display: inline-block;
  margin: 2px 14px 0 17px;
  width: 1px;
  height: 20px;
  background-color: rgba(205, 204, 204, 0.5);
  vertical-align: top;
`;

const Title = styled.span`
  vertical-align: top;
`;

export default Header;
