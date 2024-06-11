import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'Content-type' : 'application/json',
  }
})

async function sendApiRequest(option) {
  try {
    const response = await instance({
      method: option.method,
      url: option.endpoint,
      data: option.data,
      params: option.params,
      headers: option.headers
    });

    return response;
  } catch (e) {
    return e;
  }
}

export default sendApiRequest;