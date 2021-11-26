import axios from "axios";

function createInstance() {
  return axios.create({
<<<<<<< HEAD
    baseURL: `${process.env.REACT_APP_API_URL}/api`
    // baseURL: '/api',
=======
    baseURL: `${process.env.REACT_APP_API_URL}`,
>>>>>>> 63eace771e14c01f37d53cf414c767cf86f96e77
  });
}

export const instance = createInstance();
