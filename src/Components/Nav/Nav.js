import { useEffect, useState } from 'react';
import React from 'react';
import NavCategory from '../NavModal/NavCategory/NavCategory';
import SocialLogin from '../NavModal/SocialLogin/SocialLogin';
import SocialLogout from '../NavModal/SocialLogout/SocialLogout';
import styled from 'styled-components';

function Nav(props) {
  const [categoryValid, setCategoryValid] = useState(false);
  const [accountModalValid, setAccountModalValid] = useState(false);
  const [userImg, setUserImg] = useState('');
  const [profileValid, setProfileValid] = useState(false);

  const categoryOn = () => {
    setCategoryValid(true);
  };

  const categoryOff = () => {
    setCategoryValid(false);
  };

  const loginModalon = () => {
    setAccountModalValid(true);
  };

  const loginModalOff = () => {
    setAccountModalValid(false);
  };

  useEffect(() => {
    setAccountModalValid(false);
  }, [userImg]);

  useEffect(() => {}, [profileValid]);

  return (
    <Container>
      <LogoWrap>
        <Logo src="./images/logo.jpg" alt="logo" />
      </LogoWrap>

      <SearchWrap>
        <FontIcon>
          <i className="fas fa-search" />
        </FontIcon>

        <Input type="text" placeholder="필요한 상담 찾기" />
      </SearchWrap>

      <UserItems>
        <ItemLink>
          <i className="far fa-comment-dots" />
        </ItemLink>
        <ItemLink onMouseEnter={categoryOn} onMouseLeave={categoryOff}>
          <i className="fas fa-list" />
          {categoryValid && <NavCategory isCheck={categoryValid} />}
        </ItemLink>
        <ItemLink onMouseEnter={loginModalon} onMouseLeave={loginModalOff}>
          {localStorage.getItem('Wexpert_token') && (
            <UserImg src={userImg} alt="profile" />
          )}
          {!localStorage.getItem('Wexpert_token') && (
            <i className="far fa-user-circle" />
          )}
          {!localStorage.getItem('Wexpert_token') && accountModalValid && (
            <SocialLogin
              setUserImg={setUserImg}
              setProfileValid={setProfileValid}
            />
          )}
          {localStorage.getItem('Wexpert_token') && accountModalValid && (
            <SocialLogout setProfileValid={setProfileValid} />
          )}
        </ItemLink>
      </UserItems>
    </Container>
  );
}
export default Nav;

const Container = styled.div`
  display: flex;
  max-width: 1280px;
  margin: 0 auto;
  height: 68px;
  justify-content: space-around;
  align-items: center;
`;

const LogoWrap = styled.div`
  padding: 10px;
`;

const SearchWrap = styled.div`
  display: flex;
  position: relative;
  margin: 0 auto;
  padding: 20px 20px 20px 46px;
  height: 31px;
  align-items: center;
  ${props => props.theme.borderBlue}
  border-radius: 27px;
  box-shadow: 0 8px 8px 0 rgb(111 138 255 / 10%);
`;

const UserImg = styled.img`
  border-radius: 50%;
  width: 30px;
`;

const FontIcon = styled.div`
  position: absolute;
  left: 10px;
  color: #8ca0ff;
`;

const Input = styled.input`
  font-size: 15px;
  border: none;
  outline: none;
  line-height: 31px;
  ::placeholder {
    color: #8ca0ff;
  }
`;

const UserItems = styled.div`
  display: flex;
  padding: 10px;
  justify-content: space-around;
  align-items: center;
  font-size: 18px;
`;

const ItemLink = styled.a`
  margin: 0 5px;
  position: relative;
  font-size: 22px;
`;

const Logo = styled.img`
  width: 110px;
`;
