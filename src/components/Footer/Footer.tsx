import { profile } from '../../data/profile';
import styles from './Footer.module.css';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.identity}>
          <p className={styles.mark}>{profile.displayName}</p>
          <p className={styles.copyright}>
            © {year} {profile.displayName}
          </p>
        </div>
        <a className={styles.backToTop} href="#top">
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  );
}
