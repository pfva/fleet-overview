import React from 'react';

const VehicleContext = React.createContext({
  vehicles: [],
  updateVehicle: id => {} // Mainly for IDE autocompletion
});

export default VehicleContext;
