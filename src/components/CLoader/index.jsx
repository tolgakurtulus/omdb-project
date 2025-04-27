import styles from './styles.module.scss';

export default function CLoader() {
  return (
    <div className={`${styles['c-loader']}`}>
      <div className={styles['c-loader__spin']}></div>
    </div>
  );
}
