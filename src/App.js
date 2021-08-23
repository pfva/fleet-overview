import Header from './components/UI/Header/Header';
import VehicleTable from './components/VehicleTable/VehicleTable';
import VehicleProvider from './store/VehicleProvider';
import EquipmentsProvider from './store/EquipmentsProvider';

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
