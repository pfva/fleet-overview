import styles from './Icon.module.css';
import { ReactComponent as VehicleIcon } from '../../../assets/icons/truck.svg';

const Icon = ({ type }) => {
  if (type === 'active') {
    return <span className={styles.dot} data-testid="Icon-active"></span>;
  }
  if (type === 'vehicle') {
    return <span className={styles.vehicle} data-testid="Icon-vehicle"><VehicleIcon className={styles.vehicle} /></span>;
  }
  return null;
};

export default Icon;
