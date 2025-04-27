import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getMovieDetail } from '../../store/movie';
import styles from './styles.module.scss';

export default function Detail() {
  const dispatch = useAppDispatch();
  const { movideId } = useParams();
  const isLoading = useAppSelector((state) => state.getMovieData.isLoading);
  const { Poster, Title, Runtime, Genre, Director, Actors, imdbRating } = useAppSelector((state) => state?.getMovieDetailData?.data);

  useEffect(() => {
    dispatch(getMovieDetail(movideId));
  }, []);

  return (
    <>
      {isLoading ? (
        <CLoader />
      ) : (
        <div className={styles['c-detail']}>
          <div className={styles['c-detail__row']}>
            <div className={styles['c-detail__left']}>
              <img src={`${Poster}`} alt={`${Title}`} />
            </div>
            <div className={styles['c-detail__right']}>
              <div className={styles['c-detail__item']}>
                <strong>Başlık :</strong>
                <p>{Title}</p>
              </div>
              <div className={styles['c-detail__item']}>
                <strong>Süre :</strong>
                <p>{Runtime}</p>
              </div>
              <div className={styles['c-detail__item']}>
                <strong>Tür :</strong>
                <p>{Genre}</p>
              </div>
              <div className={styles['c-detail__item']}>
                <strong>Yönetmen :</strong>
                <p>{Director}</p>
              </div>
              <div className={styles['c-detail__item']}>
                <strong>Oyuncular :</strong>
                <p>{Actors}</p>
              </div>
              <div className={styles['c-detail__item']}>
                <strong>IMDb Puanı :</strong>
                <p>{imdbRating}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
