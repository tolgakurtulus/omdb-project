import styles from './styles.module.scss';

export default function CButton({ text, type, exType, htmlType, handleClick }) {
  return (
    <button onClick={handleClick} className={`${styles['c-button']} ${styles[type ?? 'primary']} ${styles[exType ?? 'default']}`} type={htmlType ?? 'button'}>
      {text}
    </button>
  );
}
