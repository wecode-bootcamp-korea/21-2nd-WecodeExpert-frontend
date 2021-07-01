import { React } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <Wrapper>
      <FooterArea>
        <FooterMenu>
          <Link to="#">익스퍼트 이용약관</Link>
          <FooterMenuSlice>|</FooterMenuSlice>
          <Link to="#">지식iN 서비스 운영원칙</Link>
          <FooterMenuSlice>|</FooterMenuSlice>
          <Link to="#">
            <strong>개인정보처리방침</strong>
          </Link>
          <FooterMenuSlice>|</FooterMenuSlice>
          <Link to="#">eXpert 이용약관</Link>
          <FooterMenuSlice>|</FooterMenuSlice>
          <Link to="#">eXpert 오피셜 이용안내</Link>
          <FooterMenuSlice>|</FooterMenuSlice>
          <Link to="#">eXpert 고객센터</Link>
          <FooterMenuSlice>|</FooterMenuSlice>
          <Link to="#">1:! 문의</Link>
          <FooterMenuSlice>|</FooterMenuSlice>
        </FooterMenu>
        <FooterDescription>
          <FooterDescriptionDesc>
            익스퍼트는 통신판매중개시스템의 제공자로서 통신판매의 당사자가
            아닙니다. 상품의 판매, 상담 내용을 포함하여 용역 및 강의의 이행,
            환불 등 상품과 관련한 의무와 책임은 각 판매자에게 있습니다. 또한
            익스퍼트는 본 플랫폼 외부에서 이루어진 상담 등으로 인하여 발생한
            문제에 대해서도 마찬가지로 책임을 지지 않습니다.
          </FooterDescriptionDesc>
          <FooterDescriptionInfo>
            <FooterDescriptionInfoTitle>
              사업자등록번호
            </FooterDescriptionInfoTitle>
            <FooterDescriptionInfoContent>
              111-22-333333
            </FooterDescriptionInfoContent>
            <FooterMenuSlice>|</FooterMenuSlice>
            <FooterDescriptionInfoTitle>
              통신판매업 신고번호
            </FooterDescriptionInfoTitle>
            <FooterDescriptionInfoContent>
              제2021-서울강남-777호
            </FooterDescriptionInfoContent>
            <FooterMenuSlice>|</FooterMenuSlice>
            <FooterDescriptionInfoTitle>대표이사</FooterDescriptionInfoTitle>
            <FooterDescriptionInfoContent>멘토링</FooterDescriptionInfoContent>
            <FooterMenuSlice>|</FooterMenuSlice>
            <FooterDescriptionInfoContent>
              사업자등록정보확인
            </FooterDescriptionInfoContent>
          </FooterDescriptionInfo>
        </FooterDescription>
        <FooterCopyright>
          <ExpertLogo
            src="https://user-images.githubusercontent.com/3303885/124051964-72a00900-da58-11eb-9065-6fe9df3ed4f9.png"
            alt="logo"
            height="18px"
          />
          Copyright © Wecode Corp. All Rights Reserved.
        </FooterCopyright>
      </FooterArea>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  position: relative;
  width: 100%;
  border-top: 1px solid #ebebeb;
  background-color: #fff;
`;

const FooterArea = styled.div`
  padding: 0 48px;
  max-width: 1280px;
  margin: 0 auto;
  padding: 27px 20px;
  line-height: 20px;
  font-size: 12px;
  color: #4c4c4c;
  text-align: center;
`;

const FooterMenu = styled.div`
  margin-bottom: 11px;
`;

const FooterMenuSlice = styled.span`
  display: inline-block;
  overflow: hidden;
  width: 1px;
  height: 11px;
  margin: -2px 5px 0 4px;
  background-color: #d7d7d7;
  vertical-align: middle;
`;

const FooterDescription = styled.div`
  margin: 18px 0;
`;

const FooterDescriptionDesc = styled.p`
  font-size: 12px;
  color: #8c8c8c;
  line-height: 18px;
`;

const FooterDescriptionInfo = styled.p`
  margin-top: 19px;
  font-size: 12px;
  line-height: 22px;
`;

const FooterDescriptionInfoTitle = styled.span`
  color: #8c8c8c;
`;

const FooterDescriptionInfoContent = styled.span`
  color: #4c4c4c;
  padding-left: 3px;
`;

const FooterCopyright = styled.div`
  font-size: 10px;
`;

const ExpertLogo = styled.img`
  width: auto;
  height: 18px;
  display: inline-block;
  margin: -2px 10px 0 0;
  font-size: 0;
  line-height: 0;
  color: transparent;
  vertical-align: middle;
`;

export default Footer;
