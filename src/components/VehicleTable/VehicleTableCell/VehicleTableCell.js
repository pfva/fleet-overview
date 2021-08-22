import VehicleStatus from './VehicleStatus/VehicleStatus';
import styles from './VehicleTableCell.module.css';
import equipments from '../../../data/equipments.json';

const VehicleTableCell = ({ content: { type, data, vehicleId } }) => {
  if (type === 'equipments' && Array.isArray(data)) {
    const vehicleEquipments = [];
    data.forEach(equipmentNumber => {
      const equpimentName = equipments.find(
        equipment => equipment.id === equipmentNumber
      ).name;
      vehicleEquipments.push(equpimentName);
    });

    return (
      <div
        className={styles.vehicleEquipments}
        data-testid='VehicleEquipments-wrapper'
      >
        {vehicleEquipments.map(equipmentName => {
          return (
            <p className={styles.vehicleTableCell} key={equipmentName}>
              {equipmentName}
            </p>
          );
        })}
      </div>
    );
  }

  if (type === 'status') {
    return <VehicleStatus status={data} vehicleId={vehicleId} />;
  }

  return <p className={styles.vehicleTableCell}>{data}</p>;
};

export default VehicleTableCell;
