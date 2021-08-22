import { useState } from 'react';
import VehicleContext from '../store/vehicle-context';
import vehiclesJson from '../data/vehicles.json';

const VehicleProvider = props => {
  const [vehicleState, setVehicleState] = useState(vehiclesJson);

  const updateVehicleHandler = (id, updatedVehicle) => {
    const vehicleToUpdateIndex = vehicleContext.vehicles.findIndex(vehicle => vehicle.id === id);
    vehicleContext.vehicles[vehicleToUpdateIndex] = updatedVehicle;
    
    setVehicleState(vehicleContext.vehicles);
  }

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
