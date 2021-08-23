import VehicleTableCell from '../VehicleTableCell/VehicleTableCell';
import styles from './VehicleTableRow.module.css';

const VehicleTableRow = ({ vehicle }) => {
  const { id, name, driver, status, fuelType, equipments } = vehicle;

  return (
    <div className={styles.vehicleTableRow} data-testid="VehicleTableRow">
      <VehicleTableCell content={{ type: 'id', data: id, vehicleId: id }} />
      <VehicleTableCell content={{ type: 'name', data: name, vehicleId: id }} />
      <VehicleTableCell
        content={{ type: 'driver', data: driver, vehicleId: id }}
      />
      <VehicleTableCell
        content={{ type: 'status', data: status, vehicleId: id }}
      />
      <VehicleTableCell
        content={{ type: 'fuelType', data: fuelType, vehicleId: id }}
      />
      <VehicleTableCell
        content={{ type: 'equipments', data: equipments, vehicleId: id }}
      />
    </div>
  );
};

export default VehicleTableRow;
