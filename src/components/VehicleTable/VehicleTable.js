import { useContext } from 'react';
import VehicleContext from '../../store/vehicle-context';
import VehicleTableHeader from './VehicleTableHeader/VehicleTableHeader';
import VehicleTableRow from './VehicleTableRow/VehicleTableRow';
import styles from './VehicleTable.module.css';

const VehicleTable = () => {
  const vehicleContext = useContext(VehicleContext);

  return (
    <div className={styles.vehicleTable}>
      <VehicleTableHeader />
      <div className={styles.vehicleTableRowWrapper}>
        {vehicleContext.vehicles.map(vehicle => {
          return <VehicleTableRow key={vehicle.id} vehicle={vehicle} />;
        })}
      </div>
    </div>
  );
};

export default VehicleTable;
