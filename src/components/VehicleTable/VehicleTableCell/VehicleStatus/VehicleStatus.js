import { useContext } from 'react';
import VehicleContext from '../../../../store/vehicles/vehicle-context';
import Icon from '../../../UI/Icon/Icon';
import styles from '../VehicleTableCell.module.css';

const VehicleStatus = ({ status, vehicleId }) => {
  const vehicleContext = useContext(VehicleContext);

  const toggleStatus = () => {
    const vehicleToUpdate = vehicleContext.vehicles.find(
      vehicle => vehicle.id === vehicleId
    );
    const updatedVehicle = {
      ...vehicleToUpdate,
      status: status === 'active' ? 'inactive' : 'active',
    };
    vehicleContext.updateVehicle(vehicleId, updatedVehicle);
  };

  if (status === 'active') {
    return (
      <div
        className={`${styles.vehicleTableCell} ${styles.iconWrapper}`}
        onClick={toggleStatus}
        data-testid="VehicleStatus-on"
      >
        <Icon type="active" />
        <p>
          <span className={styles.dataText}>{status}</span>
        </p>
      </div>
    );
  } else {
    return (
      <div
        className={`${styles.vehicleTableCell} ${styles.iconWrapper}`}
        onClick={toggleStatus}
        data-testid="VehicleStatus-off"
      >
        <Icon type="inactive" />
        <p>
          <span className={styles.dataText}>{status}</span>
        </p>
      </div>
    );
  }
};

export default VehicleStatus;
