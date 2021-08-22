import { useContext } from 'react';
import VehicleContext from '../../../../store/vehicle-context';
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
      >
        <Icon type="active" />
        <p>{status}</p>
      </div>
    );
  } else {
    return (
      <p className={styles.vehicleTableCell} onClick={toggleStatus}>
        {status}
      </p>
    );
  }
};

export default VehicleStatus;
