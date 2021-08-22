import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});