import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { MainRoutes } from './components/MainRouter';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainRoutes/>
    </div>
  );
}

export default App;
