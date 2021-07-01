import { React } from 'react';
import styled from 'styled-components';

function ExpertAgreeItemBox({
  isAgree,
  setIsAgree,
  title,
  subTitle,
  content,
  isRequire,
}) {
  return (
    <AgreeBox>
      <AgreeHeader>
        <span>
          <input type="checkbox" />
          <AgreeCheckBox
            for="allAgree"
            agree={isAgree}
            onClick={() => setIsAgree(!isAgree)}
          >
            <i className="fas fa-check-square"></i>
            <span>{title}</span>
          </AgreeCheckBox>
        </span>
        {isRequire && <RequireAgree>필수 *</RequireAgree>}
      </AgreeHeader>
      <AgreeText>
        <strong>{subTitle}</strong>
        <AgreeContentList>
          {content?.map(item => (
            <AgreeContentItem>
              <strong>{item.title}</strong>
              <p>{item.content}</p>
            </AgreeContentItem>
          ))}
        </AgreeContentList>
      </AgreeText>
    </AgreeBox>
  );
}

const AgreeBox = styled.div`
  margin-top: 30px;
  background-color: #fff;
  border: 1px solid rgba(74, 101, 246, 0.2);
  border-radius: 20px;
  box-shadow: 0 5px 20px 0 rgb(74 101 246 / 10%);
`;

const AgreeHeader = styled.div`
  padding: 23px 43px;

  span {
    display: inline-block;
  }

  input {
    position: absolute;
    margin: -1px;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
    -webkit-appearance: checkbox;
  }
`;

const AgreeCheckBox = styled.label`
  display: inline-block;
  overflow: hidden;
  cursor: pointer;

  i {
    position: relative;
    border-radius: 7px;
    font-size: ${props => props.size || '25px'};
    line-height: 0.86;

    ${props => {
      if (props.agree) {
        return `
          border: 1px solid rgba(255, 255, 255, 0);
          color: #7187e6;
        `;
      } else {
        return `
          border: 1px solid #e5e5e5;
          color: rgba(255, 255, 255, 0);
        `;
      }
    }};
  }

  span {
    margin-left: 13px;
    margin-top: -9px;
    font-size: 15px;
    vertical-align: middle;
  }
`;

const RequireAgree = styled.span`
  margin-left: 6px;
  color: #ff7b7b;
  font-size: 14px;
  line-height: 20px;
  vertical-align: super;
`;

const AgreeText = styled.div`
  padding: 30px 40px;
  height: 103px;
  background-color: #fafbfe;
  border-top: 1px solid rgba(74, 101, 246, 0.2);
  border-radius: 0 0 20px 20px;
  overflow: auto;

  strong {
    display: block;
    color: #4c4c4c;
    font-size: 16px;
    font-weight: 600;
    line-height: 22px;
  }
`;

const AgreeContentList = styled.ul``;

const AgreeContentItem = styled.li`
  display: list-item;

  strong {
    display: block;
    margin-top: 24px;
    color: #4c4c4c;
    font-size: 14px;
    font-weight: 600;
    line-height: 22px;
  }

  p {
    margin-top: 6px;
    font-size: 12px;
  }
`;

export default ExpertAgreeItemBox;
