import renderer from 'react-test-renderer';
import VehicleTable from './VehicleTable';
import VehicleProvider from '../../store/VehicleProvider';

describe('VehicleTable', () => {
  it('renders an array of vehicles', () => {
    const tree = renderer
      .create(
        <VehicleProvider>
          <VehicleTable />
        </VehicleProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
