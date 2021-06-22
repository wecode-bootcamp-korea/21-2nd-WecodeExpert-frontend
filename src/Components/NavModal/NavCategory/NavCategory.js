import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { borderBlue } from '../../../Styles/mixin';

function NavCategory() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch('/data/mock.json')
      .then(res => res.json())
      .then(data => {
        setCategory(data.category);
      });
  }, []);
  return (
    <DropdownWrap>
      {category.map((category, i) => {
        return <CategoryItems key={i}>{category.name}</CategoryItems>;
      })}
    </DropdownWrap>
  );
}

const DropdownWrap = styled.div`
  display: flex;
  position: absolute;
  left: -50px;
  text-align: center;
  flex-direction: column;
  ${borderBlue}
  background-color:white;
  z-index: 20;
`;
const CategoryItems = styled.a`
  text-decoration: none;
  padding: 5px 30px;
`;

export default NavCategory;
