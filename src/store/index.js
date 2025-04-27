import { configureStore } from '@reduxjs/toolkit';
import { getMovieDetailReducer, getMovieReducer } from './movie/index.jsx';

export const store = configureStore({
  reducer: {
    getMovieData: getMovieReducer,
    getMovieDetailData: getMovieDetailReducer,
  },
});
