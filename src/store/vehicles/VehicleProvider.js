import { useState } from 'react';
import VehicleContext from './vehicle-context';
import vehiclesJson from '../../data/vehicles.json';

const VehicleProvider = props => {
  const [vehicleState, setVehicleState] = useState(vehiclesJson);

  const updateVehicleHandler = (id, updatedVehicle) => {
    const vehicleToUpdateIndex = vehicleState.findIndex(
      vehicle => vehicle.id === id
    );
    const updatedVehicleState = [...vehicleState];
    updatedVehicleState[vehicleToUpdateIndex] = updatedVehicle;
    setVehicleState(updatedVehicleState);
  };

  const vehicleContext = {
    vehicles: vehicleState,
    updateVehicle: updateVehicleHandler,
  };

  return (
    <VehicleContext.Provider value={vehicleContext}>
      {props.children}
    </VehicleContext.Provider>
  );
};

export default VehicleProvider;
