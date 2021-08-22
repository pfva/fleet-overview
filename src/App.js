import Header from './components/UI/Header/Header';
import VehicleTable from './components/VehicleTable/VehicleTable';
import VehicleProvider from './store/VehicleProvider';

function App() {
  return (
    <VehicleProvider>
      <main>
        <Header />
        <VehicleTable />
      </main>
    </VehicleProvider>
  );
}

export default App;
