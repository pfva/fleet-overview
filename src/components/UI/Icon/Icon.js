import styles from './Icon.module.css';
import { ReactComponent as VehicleIcon } from '../../../assets/icons/truck.svg';

const Icon = ({ type }) => {
  if (type === 'active') {
    return (
      <span
        className={`${styles.dot} ${styles.active}`}
        data-testid="Icon-active"
      ></span>
    );
  }
  if (type === 'inactive') {
    return (
      <span
        className={`${styles.dot} ${styles.inactive}`}
        data-testid="Icon-inactive"
      ></span>
    );
  }
  if (type === 'vehicle') {
    return (
      <span className={styles.vehicle} data-testid="Icon-vehicle">
        <VehicleIcon className={styles.vehicle} />
      </span>
    );
  }
  if (type === 'caret-down') {
    return (
      <span data-testid="Icon-caret-down">
        &#9660;
      </span>
    );
  }
  return null;
};

export default Icon;
