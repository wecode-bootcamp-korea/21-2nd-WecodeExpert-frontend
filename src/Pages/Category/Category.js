import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import styled from 'styled-components';
import CategoryCard from '../../Components/CategoryCard/CategoryCard';
import ExpertCard from '../../Components/ExpertCard/ExpertCard';
import FilterDropdown from '../../Components/FilterDropdown/FilterDropdown';

function Category(props) {
  const [categoryData, setCategoryData] = useState([]);
  const [expertData, setExpertData] = useState([]);
  const [chooseCardFilter, setChooseCardFilter] = useState(0);
  const [selectedSort, setSelectedSort] = useState('-sell_count');
  const [cardCount, setCardCount] = useState(4);
  const location = useLocation();

  const cardFilter =
    chooseCardFilter === 0 ? 'products?category' : 'products/expert?category';

  const makeBorderBottom = event => {
    setChooseCardFilter(event.target.value);
  };

  let category = fetch(
    `http://3.133.12.85:8000/products?category=${props.match.params.id}&sort=-sell_count`
  );
  let expert = fetch(
    `http://3.133.12.85:8000/products/expert?category=${props.match.params.id}`
  );

  const mapSetFunctionToIndex = {
    0: setCategoryData,
    1: setExpertData,
  };

  useEffect(() => {
    Promise.all([category, expert])
      .then(res => Promise.all(res.map(el => el.json())))
      .then(data => {
        data.forEach((element, index) => {
          const forFetcth = mapSetFunctionToIndex[index];
          forFetcth(element);
        });
      });
  }, []);

  useEffect(() => {
    fetch(
      `http://3.133.12.85:8000/${cardFilter}=${props.match.params.id}&sort=${selectedSort}`
    )
      .then(res => res.json())
      .then(data => {
        chooseCardFilter === 0 ? setCategoryData(data) : setExpertData(data);
      });
  }, [selectedSort]);

  const plusCount = () => {
    setCardCount(cardCount + 4);
    fetchCard();
  };

  const fetchCard = () => {
    fetch(
      `http://3.133.12.85:8000/${cardFilter}=${props.match.params.id}&sort=${selectedSort}&limit=${cardCount}`
    );
  };

  return (
    <Container>
      <Title>{CATEGORY[location.pathname.split('/')[2]]}</Title>
      <FilterTap>
        {TOP_FILTER_LIST.map((items, i) => {
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
          <ListCount>
            전체{' '}
            {chooseCardFilter === 0 ? categoryData.count : expertData.count}
          </ListCount>
          {chooseCardFilter === 0 && (
            <FilterDropdown setSelectedSort={setSelectedSort} />
          )}
        </ListNav>
        {chooseCardFilter === 0 ? (
          <CategoryCard categoryData={categoryData} />
        ) : (
          <ExpertCard expertData={expertData} />
        )}
      </ListSection>
      <FetchMoreCard onClick={plusCount}>
        <span>상담 상품</span> 더보기
      </FetchMoreCard>
    </Container>
  );
}
const CATEGORY = {
  1: 'JavaScript',
  2: 'Python',
  3: 'React',
  4: 'HTML',
  5: 'Go',
  6: 'MySql',
  7: 'Java',
  8: 'C',
  9: 'C++',
};

const TOP_FILTER_LIST = ['상담', '엑스퍼트'];

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
  margin-bottom: 10px;
`;

const ListCount = styled.div``;

const FetchMoreCard = styled.button`
  display: block;
  margin: 0 auto;
  padding: 10px 60px;
  border-radius: 23px;
  border: solid 1px rgba(107, 108, 128, 0.1);
  font-size: 15px;
  line-height: 18px;
  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgb(157 167 195 / 10%);
  cursor: pointer;
  span {
    color: #7e96ff;
  }
`;

export default Category;
