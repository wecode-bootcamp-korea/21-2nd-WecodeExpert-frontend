import React from 'react';
import styled from 'styled-components';

const { Kakao } = window;

function SocialLogin(props) {
  const kakaoLoginHandle = () => {
    Kakao.Auth.login({
      success: function (authObj) {
        fetch('http://3.133.12.85:8000/users/social-login', {
          method: 'POST',
          //헤더로 토큰 송출
          headers: {
            Authorization: authObj.access_token,
          },
        })
          .then(res => res.json())
          .then(res => {
            //유저 프로필 수신
            localStorage.setItem('Wexpert_token', res.access_token);
            localStorage.setItem('User_profile', res.profile);
            if (localStorage.setItem) {
              alert('환영합니다!');
              props.setProfileValid(true);
            }
          });
      },
      fail: function (err) {
        alert(err);
      },
    });
  };

  return (
    <LoginContainer>
      <LoginText>
        클릭 한 번으로
        <br /> 당신의 전문가에게
      </LoginText>
      <LoginBtn kakao onClick={kakaoLoginHandle}>
        <i className="fas fa-comment"></i>
        카카오 로그인
      </LoginBtn>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  display: flex;
  position: absolute;
  left: -80px;
  flex-direction: column;
  text-align: center;
  align-items: center;
  background-color: white;
  border: 1px solid #b5b5b5;
  z-index: 20;
`;

const LoginText = styled.p`
  margin-top: 10px;
  font-size: 12px;
`;

const LoginBtn = styled.button`
  width: 100px;
  border: none;
  margin: 10px 10px 20px 10px;
  background-color: #fee500;
  color: black;
  font-size: 13px;
`;

export default SocialLogin;
