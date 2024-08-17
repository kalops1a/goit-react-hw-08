import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors'; 
import styles from './AppBar.module.css';
import AuthNav from '../AuthNav/AuthNav'; 
import UserMenu from '../UserMenu/UserMenu'; 
import Navigation from '../Navigation/Navigation'; 

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Книга контактів</h1>
      <nav className={styles.nav}>
        <Navigation /> 
        {isLoggedIn ? <UserMenu /> : <AuthNav />}  
      </nav>
    </header>
  );
};

export default AppBar;