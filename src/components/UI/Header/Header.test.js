import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Header from './Header';

describe('Header', () => {
  it('renders without crashing', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the welcome message', () => {
    render(<Header />);
    const title = screen.getByText(/Welcome, Fleet Owner/i);
    expect(title).toBeInTheDocument();
  });

  it('renders the information text', () => {
    render(<Header />);
    const infoText = screen.getByText(/Here you can view a full list/i);
    expect(infoText).toBeInTheDocument();
  });
});
