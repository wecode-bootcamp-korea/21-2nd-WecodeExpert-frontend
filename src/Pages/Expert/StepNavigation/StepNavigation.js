import { React } from 'react';
import styled from 'styled-components';

function StepNavigation({ step }) {
  return (
    <Container>
      <Wrapper>
        <Inner>
          <StepItem active={step === 1} complete={step > 1}>
            <StepItemText>판매자 유형 선택</StepItemText>
          </StepItem>
          <StepItem active={step === 2} complete={step > 2}>
            <StepItemText>약관 동의</StepItemText>
          </StepItem>
          <StepItem active={step === 3} complete={step > 3}>
            <StepItemText>기본 정보 입력</StepItemText>
          </StepItem>
          <StepItem active={step === 4} complete={step > 4}>
            <StepItemText>판매자 정보 입력</StepItemText>
          </StepItem>
        </Inner>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  padding-top: 30px;
`;

const Wrapper = styled.div`
  padding-top: 23px;
  text-align: center;
`;

const Inner = styled.div`
  display: inline-block;
  height: 36px;
  border-top: 2px solid #e7e8f1;

  &::after {
    display: table;
    clear: both;
    content: '';
  }
`;

const StepItem = styled.div`
  position: relative;
  float: left;

  &:not(:first-child) {
    margin-left: 240px;
  }

  &::before {
    display: block;
    margin-top: -7px;
    width: 12px;
    height: 12px;
    background-color: #fafbfc;
    border: 2px solid #e7e8f1;
    box-sizing: border-box;
    border-radius: 10px;
    content: '';
    ${props => {
      if (props.active) {
        return `
          background-color: #fff;
          border-color: #4a65f6;
        `;
      }

      if (props.complete) {
        return `
          background-color: #7e96ff;
          border-color: #7e96ff;
          color: #7e96ff;
        `;
      }
    }}
  }

  ${props => {
    if (props.active) {
      return `
        span {
          color: #4a65f6;
        }`;
    }

    if (props.complete) {
      return `
        span {
          color: #7e96ff;
        }`;
    }
  }}
`;

const StepItemText = styled.span`
  position: absolute;
  margin-left: -100px;
  top: 14px;
  width: 200px;
  color: rgba(0, 0, 0, 0.2);
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  line-height: 20px;
`;

export default StepNavigation;
