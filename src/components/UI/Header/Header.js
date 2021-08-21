import styles from './Header.module.css';

const Header = () => {
  return (
      <header className={styles.header}>
        <h1 className={styles.title}>Welcome, Fleet Owner</h1>
        <p className={styles.infoText}>Here you can view a full list of your vehicle fleet</p>
      </header>
  );
};

export default Header;
