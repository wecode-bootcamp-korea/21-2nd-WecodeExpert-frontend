import { React } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header/Header';
import StepNavigation from './StepNavigation/StepNavigation';

function ExpertStep4Seller({ location }) {
  const history = useHistory();

  const handleNextStep = () => {
    //TODO POST API
  };

  return (
    <Container>
      <Header />
      <Wrapper>
        <StepNavigation step={4} />
        <Content>
          <FormTitle>판매자 정보 입력</FormTitle>

          <FormContent>
            <FormList>
              <SubTitle>
                판매자 정보 <strong>필수입력*</strong>
              </SubTitle>
              <FormDescription>
                판매자 정보는 전자상거래법 준수 및 고객 응대를 위해 프로필 및
                상품정보, 거래 정보 화면에 노출됩니다.
              </FormDescription>

              <FormItemList>
                <FormItem>
                  <FormItemInner>
                    <FormItemLabel>
                      이름 <em>*</em>
                    </FormItemLabel>
                    <FormItemInput>
                      <InputText type="text"></InputText>
                    </FormItemInput>
                  </FormItemInner>
                </FormItem>

                <FormItem>
                  <FormItemInner>
                    <FormItemLabel>프로필 사진</FormItemLabel>
                    <FormItemInput>
                      <InputText type="text"></InputText>
                    </FormItemInput>
                  </FormItemInner>
                </FormItem>

                <FormItem>
                  <FormItemInner>
                    <FormItemLabel>
                      사업장 주소 <em>*</em>
                    </FormItemLabel>
                    <FormItemInput>
                      <InputText type="text"></InputText>
                    </FormItemInput>
                    <FormItemInput>
                      <InputText type="text"></InputText>
                    </FormItemInput>
                  </FormItemInner>
                </FormItem>

                <FormItem>
                  <FormItemInner>
                    <FormItemLabel>
                      고객센터 전화번호 <em>*</em>
                    </FormItemLabel>
                    <FormItemInput>
                      <InputText type="text"></InputText>
                    </FormItemInput>
                  </FormItemInner>
                </FormItem>

                <FormItem>
                  <FormItemInner>
                    <FormItemLabel>
                      고객센터 이메일 <em>*</em>
                    </FormItemLabel>
                    <FormItemInput>
                      <InputText type="text"></InputText>
                    </FormItemInput>
                  </FormItemInner>
                </FormItem>
              </FormItemList>
            </FormList>
          </FormContent>

          <StepButtonArea>
            <NextButton onClick={handleNextStep}>
              <span>신청서 작성 완료</span>
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

const FormTitle = styled.p`
  font-size: 26px;
  font-weight: bold;
  line-height: 50px;
`;

const FormContent = styled.div`
  margin-top: 38px;
`;

const FormList = styled.div`
  &:not(:first-child) {
    margin-top: 30px;
  }
`;

const FormItemList = styled.div`
  padding: 30px;
  margin-top: 18px;
  background-color: #fff;
  border: 1px solid rgba(74, 101, 246, 0.2);
  border-radius: 20px;
  box-shadow: 0 5px 20px 0 rgb(74 101 246 / 10%);
`;

const FormItem = styled.div`
  &:not(:first-child) {
    margin-top: 30px;
    padding-top: 30px;
    border-top: 1px solid rgba(229, 229, 229, 0.8);
  }
`;

const FormItemInner = styled.div`
  position: relative;
  padding-left: 167px;
  min-height: 48px;
`;

const FormItemLabel = styled.span`
  position: absolute;
  top: 14px;
  left: 0;
  width: 157px;
  color: #4c4c4c;
  font-size: 15px;
  line-height: 20px;
  word-wrap: break-word;

  em {
    display: inline-block;
    color: #ff7b7b;
    font-size: 14px;
    line-height: 20px;
    vertical-align: middle;
  }
`;

const FormItemInput = styled.div``;

const InputText = styled.input`
  display: block;
  padding: 11px 15px;
  padding-right: 75px;
  width: 100%;
  height: 48px;
  background-color: #fff;
  box-sizing: border-box;
  border: 1px solid rgba(126, 150, 255, 0.7);
  border-radius: 10px;
  font-size: 15px;
  line-height: 24px;
  caret-color: #4a65f6;
`;

const SubTitle = styled.p`
  color: #333;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;

  strong {
    margin-left: 6px;
    color: #ff7b7b;
    font-size: 14px;
    line-height: 20px;
    vertical-align: top;
  }
`;

const FormDescription = styled.p`
  margin-top: 4px;
  color: #8c8c8c;
  font-size: 14px;
  line-height: 20px;
  word-wrap: break-word;
`;

const StepButtonArea = styled.div`
  margin-top: 60px;
  text-align: center;
`;

const StepButton = styled.a`
  display: inline-block;
  width: 180px;
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
export default ExpertStep4Seller;
