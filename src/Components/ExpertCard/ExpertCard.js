import React from 'react';
import styled from 'styled-components';

function ExpertCard(props) {
  return (
    <ExpertContainer>
      {props.expertData.result?.map((expert, i) => {
        return (
          <ExpertCardItem key={i}>
            <ProfileWrap>
              <ExpertProfile
                src={expert.expert_image}
                alt="profile image"
              ></ExpertProfile>
              <DesignCircle />
            </ProfileWrap>

            <ExpertName>
              <em>{expert.expert_name}</em>
            </ExpertName>

            <Contents>{expert.introduction}</Contents>

            <AverageRespond>
              평균 응답시간 <span>3분</span>
            </AverageRespond>

            <HashTag>
              {expert.hashtag?.map((hashTagItem, i) => {
                return <span key={i}>#{hashTagItem}</span>;
              })}
            </HashTag>
          </ExpertCardItem>
        );
      })}
    </ExpertContainer>
  );
}

const ExpertContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ExpertCardItem = styled.div`
  justify-content: center;
  text-align: center;
  background-color: white;
  flex-direction: column;
  border: solid 1px rgba(111, 138, 255, 0.15);
  margin-bottom: 40px;
  margin-right: 20px;
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
  height: 70px;
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
  margin: 10px 100px 20px 100px;
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

  font-size: 13px;
  span {
    margin: 5px 5px 10px 5px;
    padding: 2px 3px 2px 3px;
    background-color: #f7f7f7;
  }
`;

export default ExpertCard;
