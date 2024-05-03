import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Nave from './componentes/Navbar';
import Cont from './componentes/Contato';
import Quem from './componentes/Quem';
import Footer from './componentes/Footer';
import Home from './componentes/Home';

function App() {
  return (
    <Router>
      <div className="App">
      <Nave/>
      <header>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Contato' element={<Cont/>}/>
        <Route path='/Quem' element={<Quem/>}/>
      </Routes>
      </header>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
