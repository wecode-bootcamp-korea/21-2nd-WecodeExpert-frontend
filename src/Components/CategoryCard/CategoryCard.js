import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function CategoryCard() {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    fetch('/data/listData.json')
      .then(res => res.json())
      .then(data => setListData(data.result));
  }, []);

  return (
    <>
      {listData.map((listData, index) => {
        return (
          <CardItem key={index}>
            <Link to={`/detail/${listData.product_id}`}>
              <CardItemTitle>
                <strong>{listData.title}</strong>
              </CardItemTitle>
              <CardItemContent>
                <em>{listData.content}</em>
              </CardItemContent>
              <HashTag>
                {listData.hasTag &&
                  listData.hashTag.map((hashTag, i) => {
                    return <TagItems key={i}>{hashTag.hashTag}</TagItems>;
                  })}
              </HashTag>
              <CardPrice>
                <em>{listData.price.split('.')[0]}원</em>
              </CardPrice>
            </Link>
            <Link to={`/detail/${listData.product_id}`}>
              <ProfileBox>
                <ProfileThumb src={`${listData.expert_image}`} size="30px" />
                <ProfileInfoArea>
                  <ProfileInfoSpan>{listData.expert_name}</ProfileInfoSpan>
                  <ProfileInfoSpan>{listData.expert_type}</ProfileInfoSpan>
                </ProfileInfoArea>
                <i className="fas fa-arrow-circle-right"></i>
              </ProfileBox>
            </Link>
          </CardItem>
        );
      })}
    </>
  );
}

const ProfileThumb = styled.div.attrs(props => ({
  image: props.src,
  size: props.size || '30px',
}))`
  margin-right: 6px;
  width: ${props => props.size};
  height: ${props => props.size};
  background-image: url(${props => props.image});

  background-size: cover;
  border-radius: 50%;
`;

const CardItem = styled.div`
  margin-bottom: 40px;
  background-color: #fff;
  border: 1px solid rgba(111, 138, 255, 0.15);
  border-radius: 5px;
  width: 280px;
  overflow: hidden;
  a {
    display: block;
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
`;

const CardItemTitle = styled.div`
  padding: 15px;
  box-sizing: border-box;
  background-image: url(https://ssl.pstatic.net/static/kin/section/expert/m/bgCardSquare.png);
  bacground-size: 188px auto;
  background-color: rgb(121, 146, 255);

  strong {
    display: block;
    height: 75px;
    color: #fff;
    font-size: 19px;
    font-weight: 600;
    line-height: 25px;
  }
`;

const CardItemContent = styled.div`
  padding: 12px 15px;

  em {
    display: block;
    height: 42px;
    color: #4c4c4c;
    font-size: 15px;
    line-height: 21px;
    word-wrap: break-word;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

const HashTag = styled.div`
  display: flex;
`;

const TagItems = styled.div`
  margin-left: 10px;
  padding: 5px;
  background-color: #f7f7f7;
`;

const CardPrice = styled.div`
  padding: 12px 15px;
  em {
    display: block;
    font-size: 18px;
    font-weight: 700;
  }
`;

const ProfileBox = styled.div`
  align-items: center;
  position: relative;
  display: flex;
  padding: 12px 15px;
  width: 100%;

  &::before {
    position: absolute;
    top: 0;
    left: 15px;
    right: 15px;
    height: 1px;
    background-color: rgba(156, 174, 228, 0.1);
    content: '';
  }
`;

const ProfileInfoArea = styled.div`
  flex: 1;
  display: flex;
  color: #8c8c8c;
  font-size: 14px;
  line-height: 20px;
  overflow: hidden;
`;

const ProfileInfoSpan = styled.span`
   ${props => {
     if (props.before) {
       return `
         flex: none;

         ::before {
           display: inline-block;
           margin: 9px 4px 0;
           width: 2px;
           height: 2px;
           background-color: #939393;
           border-radius: 50%;
           vertical-align: top;
           content: '';
         }
       `;
     }
   }} }
  `;
export default CategoryCard;
