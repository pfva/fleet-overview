import VehicleTableCell from '../VehicleTableCell/VehicleTableCell';
import styles from './VehicleTableHeader.module.css';

const VehicleTableHeader = () => {
  return (
    <div className={styles.vehicleTableHeader}>
      <VehicleTableCell content={{ data: 'id' }} />
      <VehicleTableCell content={{ data: 'name' }} />
      <VehicleTableCell content={{ data: 'driver' }} />
      <VehicleTableCell content={{ data: 'status' }} />
      <VehicleTableCell content={{ data: 'fuelType' }} />
      <VehicleTableCell content={{ data: 'equipments' }} />
    </div>
  );
};

export default VehicleTableHeader;
