import Icon from '../Icon/Icon';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Icon type="vehicle" />
      <div className={styles.textWrapper}>
        <h1 className={styles.title}>Welcome, Fleet Owner</h1>
        <p className={styles.infoText}>
          Here you can view a full list of your vehicle fleet.
        </p>
        <p className={styles.infoText}>
          To edit a vehicle, simply click on the field you want to change.
        </p>
        <p className={styles.infoText}>
          The updated vehicle will be saved when you press Enter/Esc, or click anywhere outside.
        </p>
      </div>
    </header>
  );
};

export default Header;
