import './App.css';
import Navbar from './components/navbar';
import Home from './components/Home';
import Social from './components/social';
import './index.css';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {

  return (
    <>
    <Navbar> </Navbar>
    <Home></Home>
    <About />
    <Portfolio />
    <Experience />
    <Contact /> 


    <Social/> 
      </>
  )
}

export default App;
