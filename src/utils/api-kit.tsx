import axios from 'axios';
import { REACT_APP_BASE_URL } from './api-const';

const APIKit = axios.create({
  baseURL: REACT_APP_BASE_URL
});

APIKit.interceptors.request.use(async (config) => {
  return config;
});

export {APIKit};
  