export const customFetch = (url, options = {}, success, error) => {
  return fetch(url, { method: 'GET', ...options })
    .then(res => res.json())
    .then(res => success && success(res))
    .catch(err => error && error(err));
};

const ACCESS_TOKEN_KEY = 'Wexpert_token';

const getToken = () => {
  const token = localStorage.getItem(ACCESS_TOKEN_KEY);

  if (token) {
    return token;
  } else {
    // alert('토큰이 존재하지 않습니다!');
    return '';
  }
};

const setToken = token => {
  localStorage.setItem(ACCESS_TOKEN_KEY, token);
};

export const token = {
  get: getToken,
  set: setToken,
};
