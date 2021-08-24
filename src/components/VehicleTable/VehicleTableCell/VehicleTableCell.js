import { useState, useRef, useEffect, useContext } from 'react';
import VehicleContext from '../../../../src/store/vehicle-context';
import VehicleStatus from './VehicleStatus/VehicleStatus';
import VehicleEquipments from './VehicleEquipments/VehicleEquipments';
import styles from './VehicleTableCell.module.css';

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

    const handleEscKeypress = e => {
      if (e.code === 'Escape') {
        setIsEditing(false);
        setUpdatedData(data);
      }
    };

    document.addEventListener('keydown', handleEnterKeypress);
    document.addEventListener('keydown', handleEscKeypress);
    return () => {
      document.removeEventListener('keydown', handleEnterKeypress);
      document.removeEventListener('keydown', handleEscKeypress);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updatedData]);

  // Special interactivity for equipments
  if (type === 'equipments' && Array.isArray(data)) {
    return <VehicleEquipments equipments={data} vehicleId={vehicleId} />;
  }

  // Special interactivity for status
  if (type === 'status') {
    return <VehicleStatus status={data} vehicleId={vehicleId} />;
  }

  return isEditing ? (
    <input
      type="text"
      value={updatedData}
      onChange={inputChangeHandler}
      ref={inputElement}
      className={styles.input}
      autoFocus
      data-testid="VehicleTableCell-input"
    />
  ) : (
    <p className={styles.vehicleTableCell} onClick={toggleEditHandler} data-testid="VehicleTableCell-text">
      <span className={styles.dataText}>{data}</span>
    </p>
  );
};

export default VehicleTableCell;
