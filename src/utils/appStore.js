import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

const appStore = configureStore({
  reducer: {
    cart: cartReducer, //each slice will have its own reducer and this i sth emain reducer of the entire store used to alter the store
    //for each slice we include a reducer like this . if we had to store the user login details , a separate reducer for that has to be used in the store
  },
});

export default appStore;
