import { React, useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

function FixableTabMenu({ tabList, tabIndex, setTabIndex, top }) {
  const [isFix, setIsFix] = useState(false);
  const tabMenu = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const nextIsFixed = window.pageYOffset > tabMenu.current.offsetTop;
      const isDiff = isFix !== nextIsFixed;

      if (isDiff) setIsFix(!isFix);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isFix]);

  return (
    <>
      <TabAreaHidden ref={tabMenu} />
      <TabArea isFix={isFix} top={top}>
        <TabList>
          {tabList?.map((item, index) => (
            <TabLink onClick={() => setTabIndex(index)} key={index}>
              <TabInner selected={tabIndex === index ? true : false}>
                <strong>{item}</strong>
              </TabInner>
            </TabLink>
          ))}
        </TabList>
      </TabArea>
    </>
  );
}

const TabAreaHidden = styled.div``;

const TabArea = styled.div`
  ${props => {
    if (props.isFix) {
      return `position: fixed; top: ${
        props.top || 0
      }px; z-index: 9999; left: 0px; right: 0px;`;
    } else {
      return `position:relative; width: 100%;`;
    }
  }}
  background-color: #fff;
  overflow: hidden;

  &::before {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 2px;
    background-color: rgba(126, 150, 255, 0.1);
    content: '';
  }
`;

const TabList = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 0;
  max-width: 1220px;
`;

const TabLink = styled.a`
  padding: 0 10px;
  font-size: 17px;
  line-height: 30px;
  cursor: pointer;
`;

const TabInner = styled.div`
  padding-top: 16px;
  height: 56px;
  box-sizing: border-box;
  border-bottom: 4px solid transparent;
  color: #000;

  ${props => {
    if (props.selected) {
      return `
        border-color: #4a65f6;
        color: #4a65f6;
      `;
    }
  }}
`;

export default FixableTabMenu;
