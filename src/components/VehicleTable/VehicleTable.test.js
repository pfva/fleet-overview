import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import VehicleTable from './VehicleTable';

const mockedVehicles = [
  {
    id: 'v1',
    name: 'AB23',
    driver: 'SpongeBob SquarePants',
    status: 'active',
    fuelType: 'LNG',
    equipments: [1, 2],
  },
  {
    id: 'v2',
    name: 'XXW123',
    driver: 'Patrick Star',
    status: 'active',
    fuelType: 'Diesel',
    equipments: [2],
  },
  {
    id: 'v3',
    name: 'GA33',
    driver: 'Squidward Tentacles',
    status: 'active',
    fuelType: 'CNG',
    equipments: [4],
  },
];

describe('VehicleTable', () => {
  it('renders an array of vehicles', () => {
    const tree = renderer
      .create(<VehicleTable vehicles={mockedVehicles} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
