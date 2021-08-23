import VehicleHeaderCell from '../VehicleTableHeader/VehicleHeaderCell/VehicleHeaderCell';
import styles from './VehicleTableHeader.module.css';

const VehicleTableHeader = () => {
  return (
    <div className={styles.vehicleTableHeader}>
      <VehicleHeaderCell title={'ID'} />
      <VehicleHeaderCell title={'Name'} />
      <VehicleHeaderCell title={'Driver'} />
      <VehicleHeaderCell title={'Status'} />
      <VehicleHeaderCell title={'FuelType'} />
      <VehicleHeaderCell title={'Equipments'} />
    </div>
  );
};

export default VehicleTableHeader;
