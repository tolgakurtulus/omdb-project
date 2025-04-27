import { toast } from 'react-toastify';

export const toastSuccess = (text) => {
  return toast.success(text ?? 'Connection Successful', { autoClose: 1000, theme: 'dark' });
};

export const toastError = (text) => {
  return toast.error(text ?? 'Connection Unsuccessful', { autoClose: 1000, theme: 'dark' });
};
