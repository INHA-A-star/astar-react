import axios from 'axios';

function fetchScenarios(authKey) {
  return axios.get('/scenarios', {
    headers: {
      'X-Auth-Token': authKey
    }
  });
}

export { fetchScenarios };
