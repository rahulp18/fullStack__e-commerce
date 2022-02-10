import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api';
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZmY1OGY2OWUyYmNjNGVjZmMxMWE4MyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NDMwNzQxNSwiZXhwIjoxNjQ0NTY2NjE1fQ.BZn51-Qvolva09D9x_XreMI6eIEe7fKhcAyjAre8UqI';

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
