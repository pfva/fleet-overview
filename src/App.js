import './App.css';
import Header from './components/UI/Header';
import VehicleTable from './components/VehicleTable/VehicleTable';
import vehicles from './data/vehicles.json';

function App() {
  return (
    <main className='App'>
      <Header />
      <VehicleTable vehicles={vehicles} />
    </main>
  );
}

export default App;
