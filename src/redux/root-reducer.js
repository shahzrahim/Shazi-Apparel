import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import asyncSessionStorage from 'redux-persist/lib/storage/session';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';

const persistConfig = {
  key: 'root',
  storage: asyncSessionStorage, 
  whitelist: ['cart']
}

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer

});

export default persistReducer(persistConfig, rootReducer);
