import { React, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import StepNavigation from './StepNavigation/StepNavigation';
import { StepButton } from '../../Styles/mixin';

function ExpertStep3Basic({ location }) {
  const [tagInput, setTagInput] = useState('');
  const [tags, setTags] = useState([]);
  const history = useHistory();

  const [form, setForm] = useState({
    introduction: '',
    categoryId: '',
    agree: false,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleForm = e => {
    const { name, value, type } = e.target;

    let setting;
    switch (type) {
      case 'text':
        setting = value;
        break;

      case 'checkbox':
        setting = e.target.checked;
        break;

      case 'select-one':
        setting = value;
        break;

      default:
        break;
    }
    setForm({ ...form, [name]: setting });
  };

  // 태그 추가 Event
  const handleAddTag = () => {
    if (!tagInput) return;

    // 최대 5개까지 입력 가능
    if (tags.length >= 5) {
      alert('태그는 5개까지 입력 가능합니다.');
      return;
      // } else if (CHECK_KOR_ENG_NUM.test(tags)) {
      //   alert('태그는 한글,영문,숫자만 입력 가능합니다.');
      //   return;
    }

    // 중복체크
    const dupCnt = tags.reduce(
      (cur, tag) => cur + (tag === tagInput ? 1 : 0),
      0
    );
    if (dupCnt > 0) {
      alert('중복된 태그가 존재합니다.');
      return;
    }

    setTags([...tags, tagInput]);
    setTagInput('');
  };

  // 태그 삭제 Event
  const handleDeleteTag = input => {
    setTags(
      tags.filter(tag => {
        return input === tag ? null : tag;
      })
    );
  };

  // 다음 버튼 Event
  const handleNextStep = () => {
    // 필수체크
    if (!form.categoryId) {
      alert('분야 선택은 필수 입니다.');
      return;
    } else if (!form.introduction) {
      alert('한 줄 소개는 필수 입니다.');
      return;
    } else if (!form.agree) {
      alert('동의한 경우에만 서비스 이용이 가능합니다.');
      return;
    }

    history.push({
      pathname: '/expert/join/seller',
      state: {
        positionId: location.state.positionId,
        categoryId: form.categoryId,
        tags: tags,
        introduction: form.introduction,
      },
    });
  };

  return (
    <Wrapper>
      <StepNavigation step={3} />
      <Content>
        <FormTitle>기본 정보 입력</FormTitle>

        <FormContent>
          <FormList>
            <SubTitle>
              상담 분야 <strong>필수입력*</strong>
            </SubTitle>
            <FormDescription>
              상담할 분야와 태그를 입력해주세요. 해당 정보는 eXpert 프로필에
              노출되며, 프로필 및 상품 검색 정보로 활용됩니다.
              <br />
              '분야'는 최초 등록 이후 수정이 불가하며, 태그는
              <strong>
                PC eXpert 센터 &gt; 계정 관리 &gt; 기본 정보 관리 화면
              </strong>
              에서 수정 및 재등록하실 수 있습니다.
            </FormDescription>
            <FormItemList>
              <FormItem>
                <FormItemInner>
                  <FormItemLabel>분야</FormItemLabel>
                  <FormItemInput>
                    <InputSelect onChange={handleForm} name="categoryId">
                      <option>분야를 선택해 주세요.</option>
                      <option value="1">Javascript</option>
                      <option value="2">Python</option>
                      <option value="3">React</option>
                      <option value="4">HTML</option>
                      <option value="5">Go</option>
                      <option value="6">Mysql</option>
                      <option value="7">Java</option>
                      <option value="8">C</option>
                      <option value="9">C++</option>
                    </InputSelect>
                  </FormItemInput>
                </FormItemInner>
              </FormItem>
              <FormItem>
                <FormItemInner>
                  <FormItemLabel>태그</FormItemLabel>
                  <FormItemInput>
                    <TagArea>
                      <TagAreaInner>
                        <TagInputBox>
                          <label>#</label>
                          <TagInput
                            onKeyPress={e => {
                              if (e.key === 'Enter') handleAddTag();
                            }}
                            placeholder="태그 입력 (20자 이내 최대 5개)"
                            maxLength={20}
                            value={tagInput}
                            onChange={e => setTagInput(e.target.value)}
                          ></TagInput>
                        </TagInputBox>
                      </TagAreaInner>
                      <TabAddButton onClick={handleAddTag}>추가</TabAddButton>
                      <TagErrorDescription></TagErrorDescription>
                    </TagArea>
                    <TagItemList>
                      {tags?.map(tag => {
                        return (
                          <TagItem key={tag}>
                            #{tag}
                            <TagDeleteButton
                              onClick={() => handleDeleteTag(tag)}
                            ></TagDeleteButton>
                          </TagItem>
                        );
                      })}
                    </TagItemList>
                  </FormItemInput>
                </FormItemInner>
              </FormItem>
            </FormItemList>
          </FormList>

          <FormList>
            <SubTitle>
              한 줄 소개 <strong>필수입력*</strong>
            </SubTitle>
            <FormDescription>
              본인을 간단히 소개할 수 있는 내용을 30자 이내로 입력해주세요.
              <br />한 줄 소개는 eXpert 프로필 정보 및 eXpert 검색 정보로
              사용되며,
              <strong>
                PC 프로필 &gt; 관리 또는 모바일 MY &gt; 프로필 &gt; 더보기 &gt;
                프로필 수정
              </strong>
              에서 수정 및 재등록하실 수 있 습니다.
            </FormDescription>
            <FormItemList>
              <FormItem>
                <InputBox>
                  <InputText
                    type="text"
                    placeholder="한 줄 소개가 없습니다."
                    maxLength={30}
                    value={form.introduction}
                    onChange={handleForm}
                    name="introduction"
                  ></InputText>
                  <span>
                    <em>{form.introduction.length}</em>/30
                  </span>
                </InputBox>
              </FormItem>
            </FormItemList>
          </FormList>
        </FormContent>

        <InformationCheckBox>
          <input
            type="checkbox"
            id="allAgree"
            onClick={handleForm}
            name="agree"
          />
          <AgreeCheckBox for="allAgree" agree={form.agree}>
            <i className="fas fa-check-square"></i>
            <span>
              입력한 정보는 엑스퍼트 서비스내 프로필 공개를 목적으로 하며,
              <strong>
                언제든지 직접 삭제할 수 있고, 탈퇴 시에는 바로 폐기됩니다.
              </strong>
            </span>
          </AgreeCheckBox>
        </InformationCheckBox>

        <StepButtonArea>
          <NextButton onClick={handleNextStep}>
            <span>다음</span>
          </NextButton>
        </StepButtonArea>
      </Content>
    </Wrapper>
  );
}

// 영문, 한글, 숫자만 입력 가능 정규식
const CHECK_KOR_ENG_NUM = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]+$/;

const Wrapper = styled.div`
  padding-bottom: 100px;
  background-color: #fafbfe;
`;

const Content = styled.div`
  margin: 100px auto 0;
  width: 1060px;
`;

const FormTitle = styled.p`
  font-size: 26px;
  font-weight: bold;
  line-height: 50px;
`;

const FormContent = styled.div`
  margin-top: 38px;
`;

const FormList = styled.div`
  &:not(:first-child) {
    margin-top: 30px;
  }
`;

const FormItemList = styled.div`
  padding: 30px;
  margin-top: 18px;
  background-color: #fff;
  border: 1px solid rgba(74, 101, 246, 0.2);
  border-radius: 20px;
  box-shadow: 0 5px 20px 0 rgb(74 101 246 / 10%);
`;

const FormItem = styled.div`
  &:not(:first-child) {
    margin-top: 30px;
  }
`;

const FormItemInner = styled.div`
  position: relative;
  padding-left: 167px;
  min-height: 48px;
`;

const FormItemLabel = styled.span`
  position: absolute;
  top: 14px;
  left: 0;
  width: 157px;
  color: #4c4c4c;
  font-size: 15px;
  line-height: 20px;
  word-wrap: break-word;
`;

const FormItemInput = styled.div``;

const InputBox = styled.div`
  position: relative;

  span {
    position: absolute;
    right: 15px;
    bottom: 15px;
    color: #8c8c8c;
    font-size: 14px;
  }
`;

const InputText = styled.input`
  display: block;
  padding: 11px 15px;
  padding-right: 75px;
  width: 100%;
  height: 48px;
  background-color: #fff;
  border: 1px solid rgba(126, 150, 255, 0.7);
  box-sizing: border-box;
  border-radius: 10px;
  font-size: 15px;
  line-height: 24px;
  caret-color: #4a65f6;
`;

const InputSelect = styled.select`
  position: relative;
  display: block;
  padding: 13px 40px 13px 15px;
  width: 462px;
  background-color: #fff;
  border: 1px solid rgba(126, 150, 255, 0.7);
  border-radius: 10px;
  color: #757575;
  font-size: 15px;
  text-align: left;
  line-height: 20px;
`;

const TagArea = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 10px;
`;

const TagAreaInner = styled.div`
  margin-right: 10px;
  width: 462px;
`;

const TagInputBox = styled.div`
  position: relative;
  border: 1px solid rgba(126, 150, 255, 0.7);
  border-radius: 10px;
  overflow: hidden;
  outline: none;

  label {
    position: absolute;
    top: 12px;
    left: 15px;
    padding-top: 0;
    color: rgba(0, 0, 0, 0.3);
    font-size: 15px;
    line-height: 26px;
    curosr: text;

    &:active {
      color: #000;
    }
  }
`;

const TagInput = styled.input`
  padding: 11px 15px 11px 24px;
  width: 100%;
  height: 48px;
  background-color: #fff;
  box-sizing: border-box;
  border: 0;
  border-radius: 0;
  font-size: 15px;
  line-height: 24px;
  white-space: nowrap;
  caret-color: #4a65f6;
`;

const TabAddButton = styled.button`
  margin-right: 25px;
  width: 89px;
  height: 48px;
  background-color: #7e96ff;
  border: 1px solid rgba(126, 150, 255, 0.15);
  border-radius: 10px;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  line-height: 22px;
`;

const TagItemList = styled.div``;

const TagItem = styled.span`
  position: relative;
  display: inline-block;
  margin: 0 10px 6px 0;
  padding: 0 15px;
  width: auto;
  height: 42px;
  background-color: rgba(126, 150, 255, 0.04);
  box-sizing: border-box;
  border: 1px solid rgba(126, 150, 255, 0.15);
  border-radius: 10px;
  color: #7e96ff;
  font-size: 15px;
  line-height: 40px;
  vertical-align: top;
  cursor: default;
`;

const TagDeleteButton = styled.button`
  display: inline-block;
  margin-right: -15px;
  padding: 0 15px 0 5px;
  width: 35px;
  height: 100%;
  background-color: transparent;
  border: 0;
  vertical-align: top;
  outline: 0;
  cursor: pointer;

  &::before,
  &::after {
    display: inline-block;
    width: 7px;
    height: 7px;
    border: solid rgba(126, 150, 255, 0.5);
    vertical-align: top;
    transform: rotate(45deg);
    content: '';
  }
  &::before {
    margin-top: 3px;
    border-width: 1px 1px 0 0;
  }

  &::after {
    margin: 3px -4px 0 2px;
    border-width: 0 0 1px 1px;
  }
`;

const TagErrorDescription = styled.div`
  display: inline-block;
  margin-top: 13px;
  font-size: 14px;
  line-height: 20px;
  vertical-align: top;
`;

const SubTitle = styled.p`
  color: #333;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;

  strong {
    margin-left: 6px;
    color: #ff7b7b;
    font-size: 14px;
    line-height: 20px;
    vertical-align: top;
  }
`;

const FormDescription = styled.p`
  margin-top: 4px;
  color: #8c8c8c;
  font-size: 14px;
  line-height: 20px;
  word-wrap: break-word;
`;

const InformationCheckBox = styled.div`
  margin-top: 50px;

  span {
    display: inline-block;
    line-height: 28px;
  }

  input {
    position: absolute;
    margin: -1px;
    width: 1px;
    height: 1px;
    clip: rect(0 0 0 0);
    overflow: hidden;
    -webkit-appearance: checkbox;
  }
`;

const AgreeCheckBox = styled.label`
  display: inline-block;
  cursor: pointer;
  overflow: hidden;

  i {
    position: relative;
    border-radius: 7px;
    font-size: ${props => props.size || '22px'};
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
    margin-left: 8px;
    color: #4c4c4c;
    font-size: 15px;
    line-height: 21px;
    vertical-align: text-bottom;

    strong {
      color: #4a65f6;
      font-size: 16px;
    }
  }
`;

const StepButtonArea = styled.div`
  margin-top: 60px;
  text-align: center;
`;

const NextButton = styled.a`
  ${StepButton}
`;
export default ExpertStep3Basic;
