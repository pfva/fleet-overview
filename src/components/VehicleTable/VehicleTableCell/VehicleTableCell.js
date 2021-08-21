import Icon from '../../UI/Icon/Icon';
import styles from './VehicleTableCell.module.css';
import equipments from '../../../data/equipments.json';

const VehicleTableCell = ({ content: { type, data } }) => {
  if (type === 'equipments' && Array.isArray(data)) {
    const vehicleEquipments = [];
    data.forEach(equipmentNumber => {
      const equpimentName = equipments.find(
        equipment => equipment.id === equipmentNumber
      ).name;
      vehicleEquipments.push(equpimentName);
    });

    return (
      <div className={styles.vehicleEquipments}>
        {vehicleEquipments.map(equipmentName => {
          return <p className={styles.vehicleTableCell} key={equipmentName}>{equipmentName}</p>;
        })}
      </div>
    );
  }

  if (type === 'status' && data === 'active') {
    return (
      <div className={`${styles.vehicleTableCell} ${styles.iconWrapper}`}>
        <Icon type='active' />
        <p>{data}</p>
      </div>
    );
  }

  return <p className={styles.vehicleTableCell}>{data}</p>;
};

export default VehicleTableCell;
