import React, { useState } from 'react';
import styled from 'styled-components';
import CategoryCard from '../../Components/CategoryCard/CategoryCard';
import ExpertCard from '../../Components/ExpertCard/ExpertCard';

function Category() {
  const [filterItem, setFilterItem] = useState('인기순');

  const [chooseCardFilter, setChooseCardFilter] = useState(0);

  const filterList = ['상담', '엑스퍼트'];

  const makeBorderBottom = event => {
    setChooseCardFilter(event.target.value);
  };

  return (
    <Container>
      <Title>JAVA</Title>
      <FilterTap>
        {filterList.map((items, i) => {
          return (
            <FilterItems
              key={i}
              value={i}
              onClick={makeBorderBottom}
              style={{
                borderBottom: `${
                  chooseCardFilter === i ? '2px solid #4b65f6' : ''
                }`,
                color: `${chooseCardFilter === i ? '#4b65f6' : '#252525'}`,
              }}
            >
              {items}
            </FilterItems>
          );
        })}
      </FilterTap>
      <ListSection>
        <ListNav>
          <ListCount>전체 8</ListCount>
          <ListFilter>
            {filterItem}
            <i className="fas fa-chevron-down" />
          </ListFilter>
        </ListNav>
        <ItemsArea>
          {chooseCardFilter === 0 ? <CategoryCard /> : <ExpertCard />}
        </ItemsArea>
      </ListSection>
    </Container>
  );
}

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 7px 20px 0;
  line-height: 24px;
  background: #fff;
`;

const Title = styled.div`
  max-width: 1280px;
  font-size: 36px;
  font-weight: 800;
`;

const FilterTap = styled.ul`
  width: 100%;
  margin: 30px 0;
  display: flex;
`;

const FilterItems = styled.li`
  margin-left: 15px;
`;

const ListSection = styled.div`
  backgroundcolor: #f9faff;
`;

const ListNav = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 15px;
`;

const ListCount = styled.div``;

const ListFilter = styled.ul`
  border: none;
  background-color: none;
`;

const ItemsArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default Category;
