import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import VehicleTableRow from './VehicleTableRow';

const mockedVehicle = {
  id: 'v3',
  name: 'GA33',
  driver: 'Squidward Tentacles',
  status: 'active',
  fuelType: 'CNG',
  equipments: [4], // Hook
};

describe('VehicleTableRow', () => {
  it('renders without crashing', () => {
    const tree = renderer
      .create(<VehicleTableRow vehicle={mockedVehicle} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the id value', () => {
    render(<VehicleTableRow vehicle={mockedVehicle} />);
    const id = screen.getByText(mockedVehicle.id);
    expect(id).toBeInTheDocument();
  });

  it('renders the name value', () => {
    render(<VehicleTableRow vehicle={mockedVehicle} />);
    const name = screen.getByText(mockedVehicle.name);
    expect(name).toBeInTheDocument();
  });

  it('renders the driver value', () => {
    render(<VehicleTableRow vehicle={mockedVehicle} />);
    const driver = screen.getByText(mockedVehicle.driver);
    expect(driver).toBeInTheDocument();
  });

  it('renders the status value', () => {
    render(<VehicleTableRow vehicle={mockedVehicle} />);
    const status = screen.getByText(mockedVehicle.status);
    expect(status).toBeInTheDocument();
  });

  it('renders the fuelType value', () => {
    render(<VehicleTableRow vehicle={mockedVehicle} />);
    const fuelType = screen.getByText(mockedVehicle.fuelType);
    expect(fuelType).toBeInTheDocument();
  });

  it('renders the translated equipments value', () => {
    render(<VehicleTableRow vehicle={mockedVehicle} />);
    const equipments = screen.getByText(/Hook/i);
    expect(equipments).toBeInTheDocument();
  });
});
