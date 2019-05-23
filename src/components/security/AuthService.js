import decode from 'jwt-decode';

export function customFetch(url, options) {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  };
  if (loggedIn()) {
    headers['Authorization'] = 'Bearer ' + getToken();
  }
  return fetch(url, {
    headers,
    ...options
  }).then(response =>
    response.json().then(json => {
      if (!response.ok) {
        return Promise.reject(json);
      }
      return json;
    })
  );
}

export function login(username, password) {
  // Get a token from api server using the fetch api
  return customFetch('http://localhost:9090/signin', {
    method: 'POST',
    body: JSON.stringify({
      username,
      password
    })
  });
}

export function loggedIn() {
  const token = getToken();
  return !!token && !isTokenExpired(token);
}

export function isTokenExpired(token) {
  try {
    const decoded = decode(token);
    if (decoded.exp < Date.now() / 1000) {
      // Checking if token is expired. N
      return true;
    } else return false;
  } catch (err) {
    return false;
  }
}

export function setToken(idToken) {
  // Saves user token to localStorage
  localStorage.setItem('id_token', idToken);
}

export function getToken() {
  // Retrieves the user token from localStorage
  return localStorage.getItem('id_token');
}

export function logout() {
  // Clear user token and profile data from localStorage
  localStorage.removeItem('id_token');
}

export function getProfile() {
  // Using jwt-decode npm package to decode the token
  return decode(getToken());
}
