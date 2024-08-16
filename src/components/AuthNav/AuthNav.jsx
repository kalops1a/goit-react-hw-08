import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <div className={styles.authNav}>
      <Link to="/register" className={styles.navLink}>Register</Link>
      <Link to="/login" className={styles.navLink}>Login</Link>
    </div>
  );
};

export default AuthNav;
