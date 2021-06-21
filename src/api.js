export const API_URL = 'https://dogsapi.origamid.dev/json';

export function TOKEN_POST(body) {
  return {
    url: API_URL + '/jwt-auth/v1/tokens',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}
export function TOKEN_VALIDATE_POST(token) {
  return {
    url: API_URL + '/jwt-auth/v1/tokens/validate',
    options: {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  };
}

export function USER_GET(token) {
  return {
    url: API_URL + 'api/user',
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  };
}

export function RESTAURANTS_GET({ page, total, user }) {
  return {
    url: `${API_URL}/api/restaurants/?_page=${page}&_total=${total}&_user=${user}`,
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  };
}
