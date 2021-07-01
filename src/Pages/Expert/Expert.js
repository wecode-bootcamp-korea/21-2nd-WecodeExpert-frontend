import { React, useEffect } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header/Header';
import ExpertIntroduce from './ExpertIntroduce';
import ExpertStep1Type from './ExpertStep1Type';
import ExpertStep2Agree from './ExpertStep2Agree';
import ExpertStep3Basic from './ExpertStep3Basic';
import ExpertStep4Seller from './ExpertStep4Seller';

function Expert({ match }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Wrapper>
        <Content>
          <Route exact path="/expert/join" component={ExpertIntroduce} />
          <Route exact path="/expert/join/type" component={ExpertStep1Type} />
          <Route exact path="/expert/join/agree" component={ExpertStep2Agree} />
          <Route exact path="/expert/join/basic" component={ExpertStep3Basic} />
          <Route
            exact
            path="/expert/join/seller"
            component={ExpertStep4Seller}
          />
        </Content>
      </Wrapper>
    </div>
  );
}
const Wrapper = styled.div`
  background-color: #fff;
`;

const Content = styled.div`
  background-color: #fafbfe;
`;

export default Expert;
