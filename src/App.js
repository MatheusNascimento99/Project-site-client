import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './componentes/secao/Navbar';
import Sectionone from './componentes/secao/Sectionone';
import Sectiontwo from './componentes/secao/Sectiontwo';
import Footer from './componentes/secao/Footer';
import Carrossel from '../src/componentes/Carrossel';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Sectionone></Sectionone>
      <Sectiontwo></Sectiontwo>
      <Carrossel></Carrossel>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
