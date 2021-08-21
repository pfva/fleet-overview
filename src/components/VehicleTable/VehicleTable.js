import VehicleTableHeader from './VehicleTableHeader/VehicleTableHeader';
import VehicleTableRow from './VehicleTableRow/VehicleTableRow';
import styles from './VehicleTable.module.css';

const VehicleTable = ({ vehicles }) => {
  return (
    <div className={styles.vehicleTable}>
      <VehicleTableHeader />
      {vehicles.map(vehicle => {
        return <VehicleTableRow key={vehicle.id} vehicle={vehicle} />;
      })}
    </div>
  );
};

export default VehicleTable;
