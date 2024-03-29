import { routeName as cart } from './routes/cart';
import { routeName as category } from './routes/category';
import { routeName as products } from './routes/products';
import {routeName as testUi} from './routes/testUI';

export const pages = {
  cart,
  category,
  products,
  testUi,
} as const;