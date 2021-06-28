import { React, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header/Header';
import StepNavigation from './StepNavigation/StepNavigation';

function ExpertStep1Type() {
  const [positionId, setPositionId] = useState(0);
  const history = useHistory();

  const handleNextStep = () => {
    if (!positionId) {
      alert('판매자 유형을 선택해 주세요.');
      return;
    }

    history.push({
      pathname: '/expert/join/agree',
      state: {
        positionId: positionId,
      },
    });
  };

  return (
    <Container>
      <Header />
      <Wrapper>
        <StepNavigation step={1} />
        <Content>
          <Title>판매자 유형 선택</Title>
          <Description>
            개발자 유형에 따라 아래 판매자 유형을 선택해주세요.
          </Description>

          <TypeSelectArea>
            <TypeSelectButton
              select={positionId === 1}
              onClick={() => setPositionId(1)}
            >
              프론트앤드
            </TypeSelectButton>
            <TypeSelectButton
              select={positionId === 2}
              onClick={() => setPositionId(2)}
            >
              백엔드
            </TypeSelectButton>
            <TypeSelectButton
              select={positionId === 3}
              onClick={() => setPositionId(3)}
            >
              풀스텍
            </TypeSelectButton>
          </TypeSelectArea>

          <TypeSelectDescription>
            {positionId === 1 && (
              <>
                <strong>프론트앤드 개발자인 경우 선택합니다.</strong>
                <br />
                실무 경력 3년 이상과 코딩테스트 통과된 경우에만 신청 가능합니다.
              </>
            )}
            {positionId === 2 && (
              <>
                <strong>백앤드 개발자인 경우 선택합니다.</strong>
                <br />
                실무 경력 3년 이상과 코딩테스트 통과된 경우에만 신청 가능합니다.
              </>
            )}
            {positionId === 3 && (
              <>
                <strong>풀스택 개발자인 경우 선택합니다.</strong>
                <br />
                실무 경력 7년 이상과 코딩테스트 통과된 경우에만 신청 가능합니다.
              </>
            )}
          </TypeSelectDescription>

          <InformationArea>
            <InformationTitle>필요 서류 안내</InformationTitle>
            <InformationList>
              <InformationItem>
                공통 : 분야 별 신청자격에 따른 첨부 서류
              </InformationItem>
            </InformationList>
          </InformationArea>

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
  margin: auto;
  padding: 80px 0 100px;
  width: 1160px;
`;

const Title = styled.p`
  font-size: 26px;
  font-weight: bold;
  line-height: 50px;
`;

const Description = styled.p`
  position: relative;
  padding-left: 15px;
  margin-top: 0;
  color: #333;
  font-size: 15px;
  text-align: left;
  line-height: 24px;

  &::before {
    position: absolute;
    top: 11px;
    left: 0;
    width: 3px;
    height: 3px;
    background-color: #4a65f6;
    content: '';
  }
`;

const TypeSelectArea = styled.div`
  padding-top: 48px;
  text-align: center;
`;

const TypeSelectButton = styled.a`
  display: inline-block;
  width: 370px;
  height: 94px;
  border-radius: 47px;
  font-size: 20px;
  font-weight: 500;
  line-height: 94px;

  &:not(:first-child) {
    margin-left: 25px;
  }

  ${props => {
    if (props.select) {
      return `
         background-color: #fff;
         color: #4a65f6;
         border: 1px solid rgba(74, 101, 246, 0.2);
         
         &::before {
             display: inline-block;
             margin-right: 19px;
             width: 10px;
             height: 25px;
             border: 3px solid #4a65f6;
             border-width: 0 3px 3px 0;
             transform: rotate(45deg);
             content: '';
         }`;
    } else {
      return `
         background-color: #f1f5ff;
         border: 1px solid rgba(74, 101, 246, 0.2);
         color: rgba(74,101,246,0.3);
         `;
    }
  }}
`;

const TypeSelectDescription = styled.div`
  margin-top: 48px;
  margin-bottom: -42px;
  color: #8c8c8c;
  font-size: 18px;
  line-height: 28px;
  text-align: center;

  strong {
    font-weight: 600;
    color: #4a65f6;
  }
`;

const InformationArea = styled.div`
  margin: 90px auto 0;
  width: 1160px;
`;

const InformationTitle = styled.span`
  color: #000;
  font-size: 18px;
`;

const InformationList = styled.ul`
  margin-top: 18px;
  padding: 30px;
  background-color: #fff;
  border: 1px solid rgba(126, 150, 255, 0.2);
  border-radius: 20px;
`;

const InformationItem = styled.li`
  position: relative;
  padding-left: 15px;
  line-height: 24px;

  &::before {
    position: absolute;
    top: 11px;
    left: 0;
    width: 3px;
    height: 3px;
    background-color: #4a65f6;
    border-radius: 3px;
    content: '';
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
export default ExpertStep1Type;
