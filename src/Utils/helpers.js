// input : email
// output : email id 부분 비식별처리 (최소 3글자 표시, 5글자 *처리)
export const getHiddenEmail = email => {
  if (email.length === 0) return '';

  const hiddenCnt = 5;
  const minViewCnt = 3;
  const split = email.split('@');

  // 3글자 이하일 경우 *처리 하지 않는다.
  if (split[0].length <= minViewCnt) return split[0];

  const id = split[0];
  const len = id.length - minViewCnt;

  // 필수로 보이는 글자가 hidden수 보다 작을 경우
  if (id.length - minViewCnt < hiddenCnt) {
    let st = '';

    for (let i = 1; i <= len; i++) {
      st += '*';
    }

    return id.slice(0, minViewCnt) + st;

    // 필수로 보이는 글자가 hidden수 보다 클 경우
  } else {
    return id.slice(0, len) + '*****';
  }
};
