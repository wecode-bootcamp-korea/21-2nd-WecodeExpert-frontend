import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { borderBlue } from '../../../Styles/mixin';

function NavCategory() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch('/data/categoryData.json')
      .then(res => res.json())
      .then(data => {
        setCategory(data.results);
      });
  }, []);
  return (
    <DropdownContainer>
      <DropdownWrap>
        {category.map((category, i) => {
          return (
            <CategoryItems key={i}>
              <Link to={category.url}>
                {category.name}
                <CategoryImage
                  src={category.image}
                  alt={category.name + 'image'}
                />
              </Link>
            </CategoryItems>
          );
        })}
      </DropdownWrap>
    </DropdownContainer>
  );
}

const DropdownContainer = styled.div`
  position: absolute;
  display: grid;
  width: 100px;
  left: -950px;
  top: 43px;
  align-items: center;
`;

const DropdownWrap = styled.div`
  display: flex;
  justify-content: space-between;
  ${borderBlue}
  border-radius:10px;
  background-color: white;
  z-index: 20;
  position: relative;
  background: #fffff5;

  :after,
  :before {
    bottom: 100%;
    right: 1%;
    border: solid transparent;
    content: '';
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
  }
  :after {
    border-color: rgba(255, 255, 245, 0);
    border-bottom-color: #fffff5;
    border-width: 21px;
    margin-left: -20px;
  }
  :before {
    border-color: rgba(96, 220, 245, 0);
    border-bottom-color: #60dcf5;
    border-width: 21px;
    margin-left: -22px;
  }
`;
const CategoryItems = styled.div`
  text-decoration: none;
  padding: 5px 30px;
  font-size: 10px;
  a {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
`;

const CategoryImage = styled.img`
  width: 50px;
`;

export default NavCategory;
