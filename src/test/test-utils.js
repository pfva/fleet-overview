import React from 'react';
import { render, screen } from '@testing-library/react';
import VehicleProvider from '../store/VehicleProvider';
import EquipmentsProvider from '../store/EquipmentsProvider';

const ProvidersHOC = ({ children }) => {
  return (
    <VehicleProvider>
      <EquipmentsProvider>{children}</EquipmentsProvider>
    </VehicleProvider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: ProvidersHOC, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
