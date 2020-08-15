import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import collectionReducer from './collections/collection.reducer';

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
  collection: collectionReducer,
});
