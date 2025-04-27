import { createAsyncThunk } from '@reduxjs/toolkit';
import { createSliceModule } from '../createSliceModule';
import { CallApi } from '../callApi';
import { apiKEY } from '../../db';

export const getMovie = createAsyncThunk('getMovieReducer', ({ pageNumber, moviename, publishyear, type }) => {
  const config = {
    url: `?s=${moviename ? moviename : 'pokemon'}${publishyear ? `&y=${publishyear}` : ''}${type ? `&type=${type}` : ''}&page=${pageNumber}&apikey=${apiKEY}`,
    method: 'GET',
  };

  return CallApi(config);
});

export const getMovieDetail = createAsyncThunk('getMovieDetailReducer', (movideId) => {
  const config = {
    url: `?i=${movideId}&apikey=${apiKEY}`,
    method: 'GET',
  };

  return CallApi(config);
});

export const getMovieReducer = createSliceModule('getMovieReducer', getMovie).reducer;
export const getMovieDetailReducer = createSliceModule('getMovieDetailReducer', getMovieDetail).reducer;
