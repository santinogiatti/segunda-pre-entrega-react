
import NavBarComponent from './components/NavBarComponents/NavBarComponents';
import ItemListContainerComponent from './components/ItemListContainerComponents/ItemListContainerComponents';
import MainLayout from './layouts/MainLayout';
import MainRouter from './Routes/MainRouter';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from './context/CartContext';



function App() {
  

  return (

    <>

      <CartProvider>

      <MainRouter/>
      
      </CartProvider>
      
      

    </>

  );
}

export default App;
