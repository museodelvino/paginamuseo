import './App.css';
import Header2 from './componentes/Header2';
import Background from './componentes/Background';
import ProductLists from './componentes/ProductLists';
import FrecuentQuestions from './componentes/FrecuentQuestions';
import Footer from './componentes/Footer';
import ProductList from './componentes/ProductList';
import NavBar from './componentes/NavBar';

function App() {

  return (
    <div className="App"> 
      <Header2 />
      <Background />
      <ProductLists />
      <ProductList />
      <FrecuentQuestions />
      <Footer />
    </div>
  );
}

export default App;
