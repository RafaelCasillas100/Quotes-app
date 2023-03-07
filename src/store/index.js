import { configureStore } from '@reduxjs/toolkit';
import quotesReducer from './quotes';

const store = configureStore({
  reducer: {
    quotes: quotesReducer
  }
});

export default store;