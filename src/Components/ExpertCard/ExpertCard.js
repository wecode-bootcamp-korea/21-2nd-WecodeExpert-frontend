import React from 'react';
import styled from 'styled-components';

function ExpertCard() {
  return (
    <ExpertContainer>
      <ProfileWrap>
        <ExpertProfile
          src="https://i.imgur.com/pyMaNRl.png"
          alt="profile image"
        ></ExpertProfile>
        <DesignCircle></DesignCircle>
      </ProfileWrap>

      <ExpertName>
        <em>지식IN</em>
      </ExpertName>
      <Contents>IT분야 :) HW/SW/기타 각종 상담 도우미</Contents>
      <AverageRespond>
        평균 응답시간 <span>3분</span>
      </AverageRespond>
      <HashTag>
        <span>#컴퓨터</span>
        <span>#노트북</span>
      </HashTag>
    </ExpertContainer>
  );
}

const ExpertContainer = styled.div`
  height: 259px;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  border: solid 1px rgba(111, 138, 255, 0.15);
  margin-bottom: 40px;
`;

const ProfileWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: 30px;
  margin-bottom: 10px;
`;

const ExpertProfile = styled.img`
  border-radius: 50%;
  width: 70px;
  z-index: 1;
`;

const DesignCircle = styled.div`
  position: absolute;
  top: 18px;
  height: 100%;
  width: 70px;
  border-radius: 50%;
  background-color: rgb(126 150 255 / 15%);
  content: '';
`;

const ExpertName = styled.p`
  font-size: 18px;
  font-weight: 800;
  margin-bottom: 20px;
`;

const Contents = styled.p`
  display: block;
  max-height: 60px;
  margin-top: 12px;
  font-size: 14px;
  line-height: 20px;
  word-break: break-word;
  word-wrap: break-word;
  color: rgba(0, 0, 0, 0.5);
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

const AverageRespond = styled.div`
  font-size: 12px;
  span {
    color: #03cf5d;
  }
`;

const HashTag = styled.div`
  display: flex;
  justify-content: center;
  span {
    margin: 0 5px;
    padding: 5px;
    background-color: #f7f7f7;
  }
`;

export default ExpertCard;
