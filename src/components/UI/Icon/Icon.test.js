import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Icon from './Icon';

describe('Icon', () => {
  it('renders without crashing', () => {
    const tree = renderer.create(<Icon />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the acive icon when passed as a type prop', () => {
    render(<Icon type="active" />);
    const icon = screen.getByTestId(/Icon-active/i);
    expect(icon).toBeInTheDocument();
  });
});
