import axios from 'axios';

import {PRODUCTS_BASE_URL} from '@shared/config';

export const instance = axios.create({
  baseURL: PRODUCTS_BASE_URL,
})