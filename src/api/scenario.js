import axios from 'axios';

function fetchScenarios() {
  return axios.get('/scenarios');
}

export { fetchScenarios };
