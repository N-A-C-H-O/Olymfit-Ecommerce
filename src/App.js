import './App.css';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavbarComp } from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <NavbarComp/>
      <ItemListContainer greeting= "Bienvenido!"/>
      <hr/>
      <ItemDetailContainer />
    </div>
  );
}

export default App;