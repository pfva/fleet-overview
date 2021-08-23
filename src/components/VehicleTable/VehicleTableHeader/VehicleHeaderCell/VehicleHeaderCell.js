import styles from './VehicleHeaderCell.module.css';

const VehicleHeaderCell = ({ title }) => {
  return <p className={styles.vehicleHeaderCell}>{title}</p>;
};

export default VehicleHeaderCell;
