import { instance } from './index';

function fetchScenarios(authKey) {
  return instance.get('/scenarios', {
    headers: {
      'X-Auth-Token': authKey
    }
  });
}

export { fetchScenarios };
