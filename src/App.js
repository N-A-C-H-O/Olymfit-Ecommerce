import './App.css';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavbarComp } from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
      <BrowserRouter>
        <NavbarComp />
        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/categoria/:categoryId' element={<ItemListContainer />}/>
          <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;