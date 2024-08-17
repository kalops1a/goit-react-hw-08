import React from'react';
import { useSelector } from'react-redux';
import { selectIsLoggedIn } from'../../redux/auth/selectors'; 
import styles from'./AppBar.module.css';
import AuthNav from'../AuthNav/AuthNav'; 
import UserMenu from'../UserMenu/UserMenu'; 

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={styles.header}><h1 className={styles.title}>Книга контактів</h1><nav>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </nav></header>
  );
};

export default AppBar;