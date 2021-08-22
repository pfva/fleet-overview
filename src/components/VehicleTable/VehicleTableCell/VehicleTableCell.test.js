import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import VehicleTableCell from './VehicleTableCell';

describe('VehicleTableCell', () => {
  it('renders without crashing', () => {
    const mockedId = { type: 'id', data: 'GA33' };
    const tree = renderer
      .create(<VehicleTableCell content={mockedId} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the name value', () => {
    const mockedName = { type: 'name', data: 'Patrick Star' };
    render(<VehicleTableCell content={mockedName} />);
    const name = screen.getByText(/Patrick/i);
    expect(name).toBeInTheDocument();
  });

  it('renders the status value and icon if status is active', () => {
    const mockedStatus = { type: 'status', data: 'active' };
    render(<VehicleTableCell content={mockedStatus} />);
    const status = screen.getByText(/active/i);
    const icon = screen.getByTestId(/Icon-active/i);
    expect(status).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  });

  it('renders the status value but not the icon if status is inactive', () => {
    const mockedStatus = { type: 'status', data: 'inactive' };
    render(<VehicleTableCell content={mockedStatus} />);
    const status = screen.getByText(/inactive/i);
    const icon = screen.queryByTestId(/Icon-active/i);
    expect(status).toBeInTheDocument();
    expect(icon).not.toBeInTheDocument();
  });

  it('renders no equipment name if equipments data is undefined', () => {
    const mockedEquipments = { type: 'equipments', data: undefined };
    const tree = renderer
      .create(<VehicleTableCell content={mockedEquipments} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the correct equipment name if the equipments array contains one value', () => {
    const mockedEquipments = { type: 'equipments', data: [2] };
    render(<VehicleTableCell content={mockedEquipments} />);
    const equipment = screen.getByText(/Tachograph/i);
    expect(equipment).toBeInTheDocument();
  });

  it('renders the correct equipment names if the equipments array contains multiple values', () => {
    const mockedEquipments = { type: 'equipments', data: [2, 3] };
    render(<VehicleTableCell content={mockedEquipments} />);
    const equipmentOne = screen.getByText(/Tachograph/i);
    const equipmentTwo = screen.getByText(/Fire Extinguisher/i);
    expect(equipmentOne).toBeInTheDocument();
    expect(equipmentTwo).toBeInTheDocument();
  });
});
