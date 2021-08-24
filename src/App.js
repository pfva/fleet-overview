import Header from './components/UI/Header/Header';
import VehicleTable from './components/VehicleTable/VehicleTable/VehicleTable';
import VehicleProvider from './store/vehicles/VehicleProvider';
import EquipmentsProvider from './store/equipments/EquipmentsProvider';

function App() {
  return (
    <VehicleProvider>
      <EquipmentsProvider>
        <main>
          <Header />
          <VehicleTable />
        </main>
      </EquipmentsProvider>
    </VehicleProvider>
  );
}

export default App;
