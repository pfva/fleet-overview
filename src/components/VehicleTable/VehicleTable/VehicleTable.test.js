import renderer from 'react-test-renderer';
import VehicleTable from './VehicleTable';
import VehicleProvider from '../../../store/vehicles/VehicleProvider';
import EquipmentsProvider from '../../../store/equipments/EquipmentsProvider';

describe('VehicleTable', () => {
  it('renders an array of vehicles', () => {
    const tree = renderer
      .create(
        <VehicleProvider>
          <EquipmentsProvider>
            <VehicleTable />
          </EquipmentsProvider>
        </VehicleProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
