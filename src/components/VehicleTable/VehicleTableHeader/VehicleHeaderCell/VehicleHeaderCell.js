import { useContext } from 'react';
import Icon from '../../../UI/Icon/Icon';
import VehicleContext from '../../../../store/vehicles/vehicle-context';
import styles from './VehicleHeaderCell.module.css';

const VehicleHeaderCell = ({ title, column }) => {
  const vehicleContext = useContext(VehicleContext);

  const sortVehicles = () => {
    console.log(column);
    if (column !== 'equipments' && column !== 'id') {
      vehicleContext.sortAlphabetically(column);
    }
  };

  return (
    <div className={styles.vehicleHeaderWrapper}>
      {column === vehicleContext.sortedColumn && (
        <Icon type="caret-down" className={styles.caret} />
      )}
      <p className={styles.vehicleHeaderCell} onClick={sortVehicles}>
        {title}
      </p>
    </div>
  );
};

export default VehicleHeaderCell;
