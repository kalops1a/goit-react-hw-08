import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <Link to="/contacts" className={styles.navLink}>Contacts</Link>
      <Link to="/register" className={styles.navLink}>Register</Link>
      <Link to="/login" className={styles.navLink}>Login</Link>
    </nav>
  );
};

export default Navigation;