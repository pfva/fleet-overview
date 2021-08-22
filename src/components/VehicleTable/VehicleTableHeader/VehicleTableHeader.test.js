import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import VehicleTableHeader from './VehicleTableHeader';

describe('VehicleTableHeader', () => {
  it('renders without crashing', () => {
    const tree = renderer.create(<VehicleTableHeader />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the id column header', () => {
    render(<VehicleTableHeader />);
    const id = screen.getByText(/id/i);
    expect(id).toBeInTheDocument();
  });

  it('renders the name column header', () => {
    render(<VehicleTableHeader />);
    const name = screen.getByText(/name/i);
    expect(name).toBeInTheDocument();
  });

  it('renders the driver column header', () => {
    render(<VehicleTableHeader />);
    const driver = screen.getByText(/driver/i);
    expect(driver).toBeInTheDocument();
  });

  it('renders the status column header', () => {
    render(<VehicleTableHeader />);
    const status = screen.getByText(/status/i);
    expect(status).toBeInTheDocument();
  });

  it('renders the fuelType column header', () => {
    render(<VehicleTableHeader />);
    const fuelType = screen.getByText(/fuelType/i);
    expect(fuelType).toBeInTheDocument();
  });

  it('renders the equipments column header', () => {
    render(<VehicleTableHeader />);
    const equipments = screen.getByText(/equipments/i);
    expect(equipments).toBeInTheDocument();
  });
});
