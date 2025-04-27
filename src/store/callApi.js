import axios from 'axios';
import { apiURL } from '../db';
import { toastError, toastSuccess } from '../components/CToast';

axios.interceptors.response.use(
  (res) => res,
  (err) => {
    const statusCode = err?.response?.status;
    if (statusCode === 401) {
      localStorage.removeItem('token');
      window.location.href = '/auth/login';
    }
    throw err;
  }
);

export const CallApi = async ({ method, url, data, responseType }) => {
  try {
    const response = await axios({
      method,
      url: `${apiURL}${url}`,
      data,
      responseType: responseType ?? 'json',
    });

    toastSuccess('Connection Successful');
    return response.data;
  } catch (error) {
    toastError(error?.response?.data?.message || 'Connection Unsuccessful');
    throw error;
  }
};
