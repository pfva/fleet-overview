import { render, screen } from '../../../../utils/test-utils';
import renderer from 'react-test-renderer';
import VehicleHeaderCell from './VehicleHeaderCell';

describe('VehicleHeaderCell', () => {
  it('renders without crashing', () => {
    const tree = renderer.create(<VehicleHeaderCell />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the name title', () => {
    render(<VehicleHeaderCell title="name" />);
    const name = screen.getByText(/name/i);
    expect(name).toBeInTheDocument();
  });
});
