import { profile } from '../../data/profile';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.credit}>{profile.displayName}</p>
      </div>
    </footer>
  );
}
