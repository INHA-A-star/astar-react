import axios from 'axios';

function createInstance() {
  return axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}`
  });
}

export const instance = createInstance();
