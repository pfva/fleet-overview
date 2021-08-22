import { useState, useRef, useEffect, useContext } from 'react';
import VehicleContext from '../../../../src/store/vehicle-context';
import VehicleStatus from './VehicleStatus/VehicleStatus';
import styles from './VehicleTableCell.module.css';
import equipments from '../../../data/equipments.json';

const VehicleTableCell = ({ content: { type, data, vehicleId } }) => {
  const [updatedData, setUpdatedData] = useState(data);
  const [isEditing, setIsEditing] = useState(false);
  const inputElement = useRef(null);
  const vehicleContext = useContext(VehicleContext);

  const toggleEditHandler = () => {
    setIsEditing(!isEditing);
  };

  const inputChangeHandler = e => {
    setUpdatedData(e.target.value);
  };

  // Closes "editing mode" if user clicks anywhere outside the input field
  useEffect(() => {
    const handleClickOutsideInput = event => {
      if (
        inputElement.current &&
        !inputElement.current.contains(event.target)
      ) {
        setIsEditing(false);
        setUpdatedData(data);
      }
    };

    document.addEventListener('mousedown', handleClickOutsideInput);
    return () => {
      document.removeEventListener('mousedown', handleClickOutsideInput);
    };
  }, [inputElement, data]);

  // Updates the context state if the user has changed the data
  useEffect(() => {
    const handleEnterKeypress = e => {
      if (e.code === 'Enter') {
        setIsEditing(false);
        if (updatedData !== data) {
          const vehicleToUpdate = vehicleContext.vehicles.find(
            vehicle => vehicle.id === vehicleId
          );
          const updatedVehicle = {
            ...vehicleToUpdate,
            [type]: updatedData,
          };
          vehicleContext.updateVehicle(vehicleId, updatedVehicle);
        }
      }
    };
    document.addEventListener('keydown', handleEnterKeypress);
    return () => {
      document.removeEventListener('keydown', handleEnterKeypress);
    };
  }, [updatedData]);

  // Special handling for equipments
  // TODO: Move to own component
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

  return isEditing ? (
    <input
      type='text'
      value={updatedData}
      onChange={inputChangeHandler}
      ref={inputElement}
      className={styles.input}
      autoFocus
    />
  ) : (
    <p className={styles.vehicleTableCell} onClick={toggleEditHandler}>
      {data}
    </p>
  );
};

export default VehicleTableCell;
