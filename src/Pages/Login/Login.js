import React from 'react';
import styled from 'styled-components';
import KaKaoLogin from 'react-kakao-login';

class KakaoSignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 'kakao',
    };
  }

  responseKaKao = res => {
    this.setState({
      data: res,
    });
    alert(JSON.stringify(this.state.data));
  };

  responseFail = err => {
    alert(err);
  };

  render() {
    return (
      <>
        <LoginModal>
          <MentWrap>
            <InduceMent>
              클릭 한 번에
              <br /> 당신의 전문가에게
            </InduceMent>
          </MentWrap>

          <KaKaoButton
            jsKey={'33a50ca3cd70239aebe6a18e1ca715bce'}
            buttonText="KaKao"
            onSuccess={this.responseKaKao}
            onFailure={this.responseFail}
            getProfile={true}
          />
        </LoginModal>
      </>
    );
  }
}

const LoginModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MentWrap = styled.div`
  margin: 20px 0;
`;

const InduceMent = styled.div`
  text-align: center;
`;

const KaKaoButton = styled(KaKaoLogin)`
  padding: 0;
  width: 190px;
  height: 44px;
  line-height: 44px;
  color: #783c00;
  background-color: #ffeb00;
  border: 1px solid transparent;
  border-radius: 3px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2);
  }
`;

export default KakaoSignUp;
