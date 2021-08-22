import VehicleTableCell from '../VehicleTableCell/VehicleTableCell';
import styles from './VehicleTableRow.module.css';

const VehicleTableRow = ({ vehicle }) => {
  const { id, name, driver, status, fuelType, equipments } = vehicle;

  return (
    <div className={styles.vehicleTableRow}>
      <VehicleTableCell content={{ type: 'id', data: id }} />
      <VehicleTableCell content={{ type: 'name', data: name }} />
      <VehicleTableCell content={{ type: 'driver', data: driver }} />
      <VehicleTableCell content={{ type: 'status', data: status, vehicleId: id }} />
      <VehicleTableCell content={{ type: 'fuelType', data: fuelType }} />
      <VehicleTableCell content={{ type: 'equipments', data: equipments }} />
    </div>
  );
};

export default VehicleTableRow;
