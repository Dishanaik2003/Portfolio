import Navbar from "./component/Navbar";
import About_me from "./component/About_me";
import Portfolio from "./component/Portfolio";
import Contact from "./component/Contact";
import Skills from "./component/Skills";
import Home from './component/Home';
import { Routes,Route,BrowserRouter} from 'react-router-dom';
import "./App.css";

function App() {
  return (
    <>
      <div className="Navbar">
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={ <Home />} />
          <Route path='/about' element={ <About_me />} />
          <Route path='/contact' element={ <Contact />} />
          <Route path='/skills' element={ <Skills />} />
          <Route path='/portfolio' element={ <Portfolio/>} />
        </Routes>
        </BrowserRouter>
       
        
  </div>
    </>
  );
}

export default App;
