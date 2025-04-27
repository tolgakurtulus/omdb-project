import { Link } from 'react-router-dom';

export const apiKEY = import.meta.env.VITE_REACT_APP_API_KEY;

export const apiURL = import.meta.env.VITE_REACT_APP_API_NAME;

export const mainLayout = {
  labelCol: {
    span: 5,
  },
  wrapperCol: {
    span: 19,
  },
};

export const mseColumns = [
  { value: 'movie', label: 'Movie' },
  { value: 'series', label: 'Series' },
  { value: 'episode', label: 'Episode' },
];

export const mainColumns = [
  {
    title: 'Title',
    dataIndex: 'Title',
    key: 'Title',
    render: (text, record) => <Link to={`/result/${record.imdbID}`}>{text}</Link>,
  },
  {
    title: 'Year',
    dataIndex: 'Year',
    key: 'Year',
  },
  {
    title: 'Imdb ID',
    dataIndex: 'imdbID',
    key: 'imdbID',
  },
];
