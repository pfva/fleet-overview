import { useState } from 'react';
import EquipmentsContext from './equipments-context';
import equipmentsJson from '../../data/equipments.json';

const EquipmentsProvider = props => {
  const [equipmentsState, setEquipmentsState] = useState(equipmentsJson);

  const equipmentsContext = {
    equipments: equipmentsState,
  };

  return (
    <EquipmentsContext.Provider value={equipmentsContext}>
      {props.children}
    </EquipmentsContext.Provider>
  );
};

export default EquipmentsProvider;
