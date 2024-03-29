import { useState, useContext, useRef, useEffect } from 'react';
import EquipmentsContext from '../../../../store/equipments/equipments-context';
import VehicleContext from '../../../../store/vehicles/vehicle-context';
import { useClickOutside } from '../../../../hooks/useClickOutside';
import styles from '../VehicleTableCell.module.css';

const VehicleEquipments = ({ equipments, vehicleId }) => {
  const [isEditing, setIsEditing] = useState(false);
  const checkboxWrapper = useRef(null);
  const equipmentsContext = useContext(EquipmentsContext);
  const vehicleContext = useContext(VehicleContext);

  // Closes "editing mode" if user clicks anywhere outside the input field
  useClickOutside(checkboxWrapper, setIsEditing);

  const toggleEditHandler = () => {
    setIsEditing(!isEditing);
  };

  const toggleIsChecked = e => {
    const vehicleToUpdate = vehicleContext.vehicles.find(
      vehicle => vehicle.id === vehicleId
    );
    const checkboxValue = Number(
      e.target.attributes['data-equipment-id'].value
    );

    let updatedVehicle = {};
    if (vehicleToUpdate.equipments.includes(checkboxValue)) {
      const updatedEquipments = vehicleToUpdate.equipments.filter(
        equipment => equipment !== checkboxValue
      );
      updatedVehicle = {
        ...vehicleToUpdate,
        equipments: [...updatedEquipments],
      };
    } else {
      updatedVehicle = {
        ...vehicleToUpdate,
        equipments: [...vehicleToUpdate.equipments, checkboxValue],
      };
    }

    vehicleContext.updateVehicle(vehicleId, updatedVehicle);
  };

  const vehicleEquipments = [];
  equipments.forEach(equipmentNumber => {
    const { name } = equipmentsContext.equipments.find(
      equipment => equipment.id === equipmentNumber
    );
    vehicleEquipments.push(name);
  });

  useEffect(() => {
    const handleEnterKeypress = e => {
      if (e.code === 'Enter') {
        setIsEditing(false);
      }
    };

    const handleEscKeypress = e => {
      if (e.code === 'Escape') {
        setIsEditing(false);
      }
    };

    document.addEventListener('keydown', handleEnterKeypress);
    document.addEventListener('keydown', handleEscKeypress);
    return () => {
      document.removeEventListener('keydown', handleEnterKeypress);
      document.removeEventListener('keydown', handleEscKeypress);
    };
  }, []);

  return isEditing ? (
    <div
      className={`${styles.equipmentsWrapper} ${styles.vehicleTableCell}`}
      ref={checkboxWrapper}
      data-testid="VehicleEquipments-checkbox-wrapper"
    >
      {equipmentsContext.equipments.map(equipment => {
        return (
          <div key={equipment.id}>
            <input
              type="checkbox"
              name={equipment.name}
              id={equipment.name}
              data-equipment-id={equipment.id}
              className={styles.equipmentsCheckbox}
              checked={equipments.includes(equipment.id)}
              value={equipments.includes(equipment.id)}
              onChange={toggleIsChecked}
            />
            <label htmlFor={equipment.name} className={styles.equipmentsLabel}>
              {equipment.name}
            </label>
          </div>
        );
      })}
    </div>
  ) : (
    <div
      className={styles.vehicleEquipments}
      data-testid="VehicleEquipments-wrapper"
      onClick={toggleEditHandler}
    >
      <span className={`${styles.dataText} ${styles.adjustHovered}`}>
        {vehicleEquipments.map(equipmentName => {
          return (
            <p className={styles.vehicleTableCell} key={equipmentName}>
              {equipmentName}
            </p>
          );
        })}
      </span>
    </div>
  );
};

export default VehicleEquipments;
