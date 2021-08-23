import VehicleHeaderCell from '../VehicleTableHeader/VehicleHeaderCell/VehicleHeaderCell';
import styles from './VehicleTableHeader.module.css';

const VehicleTableHeader = () => {
  return (
    <div className={styles.vehicleTableHeader}>
      <VehicleHeaderCell title={'id'} />
      <VehicleHeaderCell title={'name'} />
      <VehicleHeaderCell title={'driver'} />
      <VehicleHeaderCell title={'status'} />
      <VehicleHeaderCell title={'fuelType'} />
      <VehicleHeaderCell title={'equipments'} />
    </div>
  );
};

export default VehicleTableHeader;
