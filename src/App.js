import Header from './components/UI/Header/Header';
import VehicleTable from './components/VehicleTable/VehicleTable';
import vehicles from './data/vehicles.json';

function App() {
  return (
    <main>
      <Header />
      <VehicleTable vehicles={vehicles} />
    </main>
  );
}

export default App;
