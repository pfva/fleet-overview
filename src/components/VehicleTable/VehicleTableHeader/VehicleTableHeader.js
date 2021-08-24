import VehicleHeaderCell from '../VehicleTableHeader/VehicleHeaderCell/VehicleHeaderCell';
import styles from './VehicleTableHeader.module.css';

const VehicleTableHeader = () => {
  return (
    <div className={styles.vehicleTableHeader}>
      <VehicleHeaderCell title="ID" column="id" />
      <VehicleHeaderCell title="Name" column="name" />
      <VehicleHeaderCell title="Driver" column="driver" />
      <VehicleHeaderCell title="Status" column="status" />
      <VehicleHeaderCell title="Fuel type" column="fuelType" />
      <VehicleHeaderCell title="Equipments" column="equipments" />
    </div>
  );
};

export default VehicleTableHeader;
