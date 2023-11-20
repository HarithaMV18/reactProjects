
import './App.css';
import Home from './Components/Home'
import About from './Components/About';
import {Route,Routes} from 'react-router-dom'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      <Footer/>
    
    </div>
  );
}

export default App;
