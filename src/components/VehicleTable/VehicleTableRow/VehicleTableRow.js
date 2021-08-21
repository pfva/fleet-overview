import VehicleTableCell from '../VehicleTableCell/VehicleTableCell';
import styles from './VehicleTableRow.module.css';

const VehicleTableRow = ({ vehicle }) => {
  const { id, name, driver, status, fuelType, equipments } = vehicle;

  return (
    <div className={styles.vehicleTableRow}>
      <VehicleTableCell type={id} />
      <VehicleTableCell type={name} />
      <VehicleTableCell type={driver} />
      <VehicleTableCell type={status} />
      <VehicleTableCell type={fuelType} />
      <VehicleTableCell type={equipments} />
    </div>
  );
};

export default VehicleTableRow;
