import { React, useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header/Header';
import StepNavigation from './StepNavigation/StepNavigation';
import ExpertAgreeItemBox from './ExpertAgreeItemBox/ExpertAgreeItemBox';
import { AGREE_1, AGREE_2, AGREE_3 } from './ExpertAgreeInfo';

function ExpertStep2Agree() {
  const [agree1, setAgree1] = useState(false);
  const [agree2, setAgree2] = useState(false);
  const [agree3, setAgree3] = useState(false);
  const [agreeAll, setAgreeAll] = useState(false);
  const location = useLocation();
  const history = useHistory();

  const handelAllAgree = () => {
    setAgree1(!agreeAll);
    setAgree2(!agreeAll);
    setAgree3(!agreeAll);
    setAgreeAll(!agreeAll);
  };

  useEffect(() => {
    if (agree1 === agree2 && agree1 === agree3 && agree1) {
      setAgreeAll(true);
    } else {
      setAgreeAll(false);
    }
  }, [agree1, agree2, agree3]);

  const handleNextStep = () => {
    if (!agreeAll) {
      alert('필수 항목에 모두 동의해 주세요.');
      return;
    }
    if (location.state === undefined) {
      alert('진행 중 오류가 발생하였습니다. 처음 부터 다시 시작해 주세요.');
      history.push({
        pathname: '/expert/join/introduce',
      });
      return;
    }
    history.push({
      pathname: '/expert/join/basic',
      state: { positionId: location.state.positionId },
    });
  };

  return (
    <Container>
      <Header />
      <Wrapper>
        <StepNavigation step={2} />

        <Content>
          <AllAgreeArea>
            <input type="checkbox" id="allAgree" />
            <AgreeCheckBox
              for="allAgree"
              agree={agreeAll}
              onClick={handelAllAgree}
            >
              <i className="fas fa-check-square"></i>
              <span>
                이용약관, 개인정보 수집 및 이용, 상담전문가의 개인정보보호
                의무에 모두 동의합니다.
              </span>
            </AgreeCheckBox>
          </AllAgreeArea>

          <ExpertAgreeItemBox
            title={AGREE_1.title}
            subTitle={AGREE_1.subTitle}
            content={AGREE_1.content}
            isRequire={true}
            isAgree={agree1}
            setIsAgree={setAgree1}
          />

          <ExpertAgreeItemBox
            title={AGREE_2.title}
            subTitle={AGREE_2.subTitle}
            content={AGREE_2.content}
            isRequire={true}
            isAgree={agree2}
            setIsAgree={setAgree2}
          />

          <ExpertAgreeItemBox
            title={AGREE_3.title}
            subTitle={AGREE_3.subTitle}
            content={AGREE_3.content}
            isRequire={true}
            isAgree={agree3}
            setIsAgree={setAgree3}
          />

          <StepButtonArea>
            <NextButton onClick={handleNextStep}>
              <span>다음</span>
            </NextButton>
          </StepButtonArea>
        </Content>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  min-width: 1160px;
`;

const Wrapper = styled.div`
  padding-bottom: 100px;
  background-color: #fafbfe;
`;

const Content = styled.div`
  margin: 100px auto 0;
  width: 1060px;
`;

const AllAgreeArea = styled.div`
  line-height: 28px;

  span {
    display: inline-block;
  }

  input {
    position: absolute;
    margin: -1px;
    width: 1px;
    height: 1px;
    clip: rect(0 0 0 0);
    overflow: hidden;
    -webkit-appearance: checkbox;
  }
`;

const AgreeCheckBox = styled.label`
  display: inline-block;
  overflow: hidden;
  cursor: pointer;

  i {
    position: relative;
    border-radius: 7px;
    font-size: ${props => props.size || '32px'};
    line-height: 0.86;

    ${props => {
      if (props.agree) {
        return `
          color: #7187e6;
          border: 1px solid rgba(255, 255, 255, 0);
          
        `;
      } else {
        return `
          color: rgba(255, 255, 255, 0);
          border: 1px solid #e5e5e5;
        `;
      }
    }};
  }

  span {
    margin-top: -11px;
    margin-left: 13px;
    font-size: 18px;
    vertical-align: middle;
  }
`;

const StepButtonArea = styled.div`
  margin-top: 60px;
  text-align: center;
`;

const StepButton = styled.a`
  display: inline-block;
  width: 120px;
  height: 48px;
  background-color: #4a65f6;
  box-shadow: 0 12px 10px -10px #4a65f6;
  border-radius: 10px;
  color: #fff;
  font-size: 17px;
  font-weight: 500;
  line-height: 48px;
`;

const NextButton = styled(StepButton)``;
export default ExpertStep2Agree;
