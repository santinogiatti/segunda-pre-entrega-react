
import NavBarComponent from './components/NavBarComponents/NavBarComponents';
import ItemListContainerComponent from './components/ItemListContainerComponents/ItemListContainerComponents';
import MainLayout from './layouts/MainLayout';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  

  return (

    <>

      <NavBarComponent />
      <ItemListContainerComponent greeting={"Bienvenidos a mi E-commerce"} />
      

    </>

  );
}

export default App;
