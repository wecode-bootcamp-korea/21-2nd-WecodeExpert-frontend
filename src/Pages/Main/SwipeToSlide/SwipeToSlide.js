import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

export default function SwipeToSlide({
  infinite,
  slidesToShow,
  centerPadding,
  children,
  speed,
}) {
  const settings = {
    className: 'center',
    infinite: infinite || false,
    centerPadding: centerPadding || '60px',
    slidesToShow: slidesToShow || 4,
    swipeToSlide: true,
    speed: speed || 500,
  };

  return (
    <Container>
      <Slider {...settings}>{children}</Slider>
    </Container>
  );
}

const Container = styled.div`
  .slick-arrow {
    position: absolute;
    width: 48px;
    height: 48px;
    background-color: #fff;
    border: 1px solid rgba(111, 138, 255, 0.15);
    border-radius: 50%;
    box-shadow: 0 5px 10px 0 rgb(0 0 0 / 10%);
    z-index: 2;

    &::before {
      content: '';
      font-size: 0;
      opacity: 0;
    }

    &.slick-prev {
      left: -45px;

      &::after {
        border-width: 0 0 2px 2px;
        transform: rotate(45deg);
      }
    }

    &.slick-next {
      right: -45px;

      &::after {
        border-width: 2px 2px 0 0;
        transform: rotate(45deg);
      }
    }

    &::after {
      position: absolute;
      top: 50%;
      left: 50%;
      margin: -4px 0 0 -6px;
      width: 8px;
      height: 8px;
      border: 2px solid #222;
      transform: rotate(45deg);
      content: '';
    }

    &.slick-disabled {
      opacity: 0;
      cursor: default;

      &:after {
        opacity: 0;
      }
    }
  }
`;
