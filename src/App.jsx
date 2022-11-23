import './App.css';
import Header2 from './componentes/Header2';
import Background from './componentes/Background';
import ProductLists from './componentes/ProductLists';
import FrecuentQuestions from './componentes/FrecuentQuestions';
import Footer from './componentes/Footer';

function App() {

  return (
    <div className="App"> 
      <Header2 />
      <Background />
      <ProductLists />
      <FrecuentQuestions />
      <Footer />
    </div>
  );
}

export default App;
