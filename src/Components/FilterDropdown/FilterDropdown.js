import React, { useState } from 'react';
import styled from 'styled-components';

function FilterDropdown(props) {
  const [filterItem, setFilterItem] = useState('상담 많은 순');
  const [filterValid, setFilterValid] = useState(false);

  const showDropDown = () => {
    setFilterValid(!filterValid);
  };

  const changeFilterName = event => {
    setFilterItem(event.target.value.split(',')[0]);
    showDropDown();
    props.setSelectedSort(event.target.value.split(',')[1]);
  };

  return (
    <FilterContainer>
      <ChosenFilterName onClick={showDropDown}>
        {filterItem}
        <i className="fas fa-chevron-down" />
      </ChosenFilterName>
      <FilterBox style={{ display: `${filterValid ? '' : 'none'}` }}>
        {FILTER_ITEMS.map((item, index) => {
          return (
            <FilterItems
              key={index}
              value={[item.value, item.name]}
              onClick={changeFilterName}
            >
              {item.value}
            </FilterItems>
          );
        })}
      </FilterBox>
    </FilterContainer>
  );
}
export default FilterDropdown;

const FILTER_ITEMS = [
  { name: '-sell_count', value: '상담 많은 순' },
  { name: '-create_at', value: '최근 등록 순' },
  { name: '-price', value: '가격 높은 순' },
  { name: 'price', value: '가격 낮은 순' },
];

const FilterContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const ChosenFilterName = styled.div``;

const FilterBox = styled.ul`
  position: absolute;
  top: 25px;
  display: flex;
  flex-direction: column;
  list-style: none;
  ${props => props.theme.borderBlue}
  border-radius:20px;
`;

const FilterItems = styled.button`
  padding: 10px 4px;
  border: none;
  background-color: unset;
`;
