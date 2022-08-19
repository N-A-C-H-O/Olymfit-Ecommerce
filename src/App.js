import './App.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavbarComp } from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <NavbarComp></NavbarComp>
      <ItemListContainer greeting= "Bienvenido!"/>
    </div>
  );
}

export default App;