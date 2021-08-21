import VehicleTableCell from '../VehicleTableCell/VehicleTableCell';
import styles from './VehicleTableHeader.module.css';

const VehicleTableHeader = () => {
  return (
    <div className={styles.vehicleTableHeader}>
      <VehicleTableCell type='id' />
      <VehicleTableCell type='name' />
      <VehicleTableCell type='driver' />
      <VehicleTableCell type='status' />
      <VehicleTableCell type='fuelType' />
      <VehicleTableCell type='equipments' />
    </div>
  );
};

export default VehicleTableHeader;
