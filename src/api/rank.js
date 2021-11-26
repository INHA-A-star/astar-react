import { instance } from './index';

function fetchRankList() {
  return instance.get('/rankList');
}

export { fetchRankList };
