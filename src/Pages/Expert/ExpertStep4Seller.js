import { React, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { uploadFile } from 'react-s3';
import StepNavigation from './StepNavigation/StepNavigation';
import { StepButton } from '../../Styles/mixin';
import { GET_EXPERT_API } from '../../config';
import { S3_CONFIG } from '../../S3_config';
import { customFetch, token } from '../../Utils/function';

const DEFAILT_IMAGE_URL =
  'https://user-images.githubusercontent.com/3303885/123738019-fe8e2580-d8de-11eb-98da-9d8621f88d9e.png';

function ExpertStep4Seller({ location }) {
  const [file, setFile] = useState({
    filePath: DEFAILT_IMAGE_URL,
    fileName: '',
  });

  const [form, setForm] = useState({
    name: '',
    address: '',
    phoneNumber: '',
    email: '',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInput = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const history = useHistory();

  const handleNextStep = () => {
    if (form.name === '') {
      alert('이름은 필수입력 입니다!');
      return;
    } else if (form.address === '') {
      alert('주소는 필수입력 입니다!');
      return;
    } else if (form.phoneNumber === '') {
      alert('전화번호는 필수입력 입니다!');
      return;
    } else if (form.email === '') {
      alert('이메일은 필수입력 입니다!');
      return;
    }

    // Step1: Image Upload
    // Step2: API POST
    if (!file.file) {
      handleSendPost(DEFAILT_IMAGE_URL);
    } else {
      uploadFile(file.file, S3_CONFIG)
        .then(data => handleSendPost(data.location))
        .catch(err => console.error(err));
    }
  };

  const handleSendPost = fileUrl => {
    customFetch(
      `${GET_EXPERT_API}`,
      {
        method: 'POST',
        body: JSON.stringify({
          introduction: location.state.introduction || '',
          image: fileUrl,
          name: form.name,
          category_id: location.state.categoryId,
          hash_tag: location.state.tags || [],
          seller_info: {
            address: form.address,
            phone_number: form.phoneNumber,
            email: form.email,
          },
          position_id: location.state.positionId,
        }),
        headers: {
          Authorization: token.get(),
        },
      },
      result => {
        if (result.message === 'SUCCESS') {
          alert('신청 접수 되었습니다!');
          history.push({ pathname: '/' });
        } else if (result.message === 'EXISTS_EXPERT') {
          alert('이미 접수된 신청이 존재합니다.');
        } else {
          alert('신청 접수 실패하였습니다.' + result.message);
        }
      },
      err => {
        console.log(err);
        alert('전송에 실패하였습니다.');
      }
    );
  };

  const handleFileInput = e => {
    if (!e.target.files) return;
    setFile({
      filePath: URL.createObjectURL(e.target.files[0]),
      file: e.target.files[0],
    });
  };

  return (
    <Wrapper>
      <StepNavigation step={4} />
      <Content>
        <FormTitle>판매자 정보 입력</FormTitle>
        <FormContent>
          <FormList>
            <SubTitle>
              판매자 정보 <strong>필수입력*</strong>
            </SubTitle>
            <FormDescription>
              판매자 정보는 전자상거래법 준수 및 고객 응대를 위해 프로필 및
              상품정보, 거래 정보 화면에 노출됩니다.
            </FormDescription>

            <FormItemList>
              <FormItem>
                <FormItemInner>
                  <FormItemLabel>
                    이름 <em>*</em>
                  </FormItemLabel>
                  <FormItemInput>
                    <InputText
                      type="text"
                      name="name"
                      placeholder="ex) 김멘토"
                      onChange={handleInput}
                    ></InputText>
                  </FormItemInput>
                </FormItemInner>
              </FormItem>

              <FormItem>
                <FormItemInner>
                  <FormItemLabel>프로필 사진</FormItemLabel>
                  <FormItemInput>
                    <ProfileArea>
                      <ProfileThumb src={file.filePath} size="100px" />
                      <input
                        id="fileUpload"
                        type="file"
                        onChange={handleFileInput}
                      />
                      <FileUploadLabel htmlFor="fileUpload">
                        이미지 업로드
                      </FileUploadLabel>
                      <ProfileImageDeleteButton
                        onClick={() =>
                          setFile({
                            file: null,
                            filePath: DEFAILT_IMAGE_URL,
                          })
                        }
                      >
                        이미지 제거
                      </ProfileImageDeleteButton>
                    </ProfileArea>
                  </FormItemInput>
                </FormItemInner>
              </FormItem>

              <FormItem>
                <FormItemInner>
                  <FormItemLabel>
                    사업장 주소 <em>*</em>
                  </FormItemLabel>
                  <FormItemInput>
                    <InputText
                      type="text"
                      name="address"
                      placeholder="ex) 서울특별시 강남구 테헤란로"
                      onChange={handleInput}
                    ></InputText>
                  </FormItemInput>
                </FormItemInner>
              </FormItem>

              <FormItem>
                <FormItemInner>
                  <FormItemLabel>
                    고객센터 전화번호 <em>*</em>
                  </FormItemLabel>
                  <FormItemInput>
                    <InputText
                      type="text"
                      name="phoneNumber"
                      placeholder="ex) 010-1234-5678"
                      onChange={handleInput}
                    ></InputText>
                  </FormItemInput>
                </FormItemInner>
              </FormItem>

              <FormItem>
                <FormItemInner>
                  <FormItemLabel>
                    고객센터 이메일 <em>*</em>
                  </FormItemLabel>
                  <FormItemInput>
                    <InputText
                      type="text"
                      name="email"
                      placeholder="ex) hp@wecode.co.kr"
                      onChange={handleInput}
                    ></InputText>
                  </FormItemInput>
                </FormItemInner>
              </FormItem>
            </FormItemList>
          </FormList>
        </FormContent>

        <StepButtonArea>
          <NextButton onClick={handleNextStep}>
            <span>신청서 작성 완료</span>
          </NextButton>
        </StepButtonArea>
      </Content>
    </Wrapper>
  );
}

// 영문, 한글, 숫자만 입력 가능 정규식
const CHECK_KOR_ENG_NUM = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]+$/;

const ProfileThumb = styled.div.attrs(props => ({
  image: props.src,
  size: props.size || '30px',
}))`
  position: relative;
  align-self: center;
  margin-right: 6px;
  width: ${props => props.size};
  height: ${props => props.size};
  background-image: url(${props => props.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
`;

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
    padding-top: 30px;
    border-top: 1px solid rgba(229, 229, 229, 0.8);
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

  em {
    display: inline-block;
    color: #ff7b7b;
    font-size: 14px;
    line-height: 20px;
    vertical-align: middle;
  }
`;

const FormItemInput = styled.div`
  input[type='file'] {
    display: none;
  }
`;

const ProfileArea = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 120px;
`;

const InputText = styled.input`
  display: inlne-block;
  padding: 11px 15px;
  padding-right: 75px;
  width: 100%;
  height: 48px;
  background-color: #fff;
  box-sizing: border-box;
  border: 1px solid rgba(126, 150, 255, 0.7);
  border-radius: 10px;
  font-size: 15px;
  line-height: 24px;
  caret-color: #4a65f6;
`;

const FileUploadLabel = styled.label`
  margin-top: 12px;
  display: inline-block;
  width: 120px;
  height: 48px;
  background-color: #4a65f6;
  border-radius: 10px;
  box-shadow: 0 12px 10px -10px #4a65f6;
  color: #fff;
  text-align: center;
  font-size: 17px;
  font-weight: 500;
  line-height: 48px;
  cursor: pointer;
`;

const ProfileImageDeleteButton = styled.a`
  margin-top: 10px;
  text-align: center;
  color: #4a65f6;
  cursor: pointer;
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

const StepButtonArea = styled.div`
  margin-top: 60px;
  text-align: center;
`;

const NextButton = styled.a`
  ${StepButton}
  width: 160px;
  cursor: pointer;
`;

export default ExpertStep4Seller;
