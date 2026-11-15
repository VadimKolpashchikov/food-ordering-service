import styles from './Loader.module.scss';

export default function Loader({ size = 300 }: { size?: number }) {
  return (
    <div className={styles['loader']} style={{ width: `${size}px` }}>
      <img src="/images/pizza-frame.png" alt="Пицца" />
    </div>
  );
}
