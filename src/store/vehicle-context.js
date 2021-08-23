import React from 'react';

const VehicleContext = React.createContext({
  vehicles: [],
  updateVehicle: (id, updatedVehicle) => {}, // Mainly for IDE autocompletion
});

export default VehicleContext;
