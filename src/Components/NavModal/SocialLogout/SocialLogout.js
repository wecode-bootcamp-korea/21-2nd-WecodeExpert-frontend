import styled from 'styled-components';

const { Kakao } = window;
function SocialLogout(props) {
  const kakaoLogoutHandle = () => {
    Kakao.Auth.logout();
    localStorage.clear();
    props.setProfileValid(false);
    if (localStorage.setItem) {
      alert('GoodBye');
    }
  };

  return (
    <LogoutContainer>
      <LogoutText>Good Bye!</LogoutText>
      <LogoutButton kakao onClick={kakaoLogoutHandle}>
        <i className="fas fa-comment"></i>
        카카오계정 로그아웃
      </LogoutButton>
    </LogoutContainer>
  );
}
const LogoutContainer = styled.div`
  display: flex;
  position: absolute;
  left: -80px;
  flex-direction: column;
  text-align: center;
  align-items: center;
  border: 1px solid #b5b5b5;
  background-color: white;
  z-index: 20;
`;

const LogoutText = styled.p`
  margin-top: 10px;
  font-size: 12px;
`;

const LogoutButton = styled.button`
  width: 100px;
  border: none;
  margin: 10px 10px 20px 10px;
  background-color: #fee500;
  color: black;
  font-size: 13px;
`;
export default SocialLogout;
