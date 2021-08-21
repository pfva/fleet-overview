import styles from './VehicleTableCell.module.css';

const VehicleTableCell = ({ type }) => {
  return <p className={styles.vehicleTableCell}>{type}</p>;
};

export default VehicleTableCell;
