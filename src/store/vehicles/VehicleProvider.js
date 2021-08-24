import { useState } from 'react';
import VehicleContext from './vehicle-context';
import vehiclesJson from '../../data/vehicles.json';

const VehicleProvider = props => {
  const [vehicleState, setVehicleState] = useState(vehiclesJson);
  const [isSorted, setIsSorted] = useState(false);
  const [sortedColumn, setSortedColumn] = useState('');

  const updateVehicleHandler = (id, updatedVehicle) => {
    const vehicleToUpdateIndex = vehicleState.findIndex(
      vehicle => vehicle.id === id
    );
    const updatedVehicleState = [...vehicleState];
    updatedVehicleState[vehicleToUpdateIndex] = updatedVehicle;
    setVehicleState(updatedVehicleState);
  };

  const sortAlphabeticallyHandler = column => {
    if (!isSorted) {
      setIsSorted(true);
      setSortedColumn(column);
      const sortedVehicles = vehicleState.sort((firstVehicle, secondVehicle) =>
        firstVehicle[column].toUpperCase() > secondVehicle[column].toUpperCase()
          ? 1
          : -1
      );
      setVehicleState(prevState => {
        return [...sortedVehicles];
      });
    } else {
      setIsSorted(false);
      setSortedColumn("");
      const sortedVehicles = vehicleState.sort((firstVehicle, secondVehicle) =>
        Number(firstVehicle.id.substring(1)) >
        Number(secondVehicle.id.substring(1))
          ? 1
          : -1
      );
      setVehicleState(prevState => {
        return [...sortedVehicles];
      });
    }
  };

  const vehicleContext = {
    vehicles: vehicleState,
    updateVehicle: updateVehicleHandler,
    sortAlphabetically: sortAlphabeticallyHandler,
    sortedColumn: sortedColumn,
  };

  return (
    <VehicleContext.Provider value={vehicleContext}>
      {props.children}
    </VehicleContext.Provider>
  );
};

export default VehicleProvider;
