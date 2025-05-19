// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Home from './components/Home';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Achievements from './sections/Achievements';

function App() {
  return (
    <div>
      <Navbar />
      <Home/>
      <Skills />
      <Projects />
      <Experience />
      <Achievements/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
