import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  vus: 100,
  duration: '30s',
};

export default function () {
  let testId = Math.floor(Math.random() * (1000011 - 900009)) + 900009;
  const res = http.get(`http://localhost:3000/products/${testId}`,
  {tags: {name: 'id'}});
  check(res, {
    'is status 200': (r) => r.status === 200
  });
  sleep(1)
}