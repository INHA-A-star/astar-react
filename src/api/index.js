import axios from 'axios';

function createInstance() {
  return axios.create({
    baseURL: '/api'
    // baseURL: process.env.NODE_ENV === 'development' ? '/api/' : `${process.env.REACT_APP_API_URL}/api/`
  });
}

export const instance = createInstance();