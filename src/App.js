import './App.css';
import Footer from './Layouts/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import { useContext } from 'react';
import { ThemeContext } from './Services/Theme';
import Career from './Pages/Career';
import Experience from './Pages/Experience';
import Projects from './Pages/Projects';
import Skills from './Pages/Skills';
import Awards from './Pages/Awards';
import Contacts from './Pages/Contact';

function App() {

  const {mode} = useContext(ThemeContext)

  return (
    <>
      <div className={`${mode}`}>
        <Home />
        <About />
        <Career/>
        <Experience/>
        <Projects/>
        <Skills/>
        <Awards/>
        <Contacts/>
        <Footer />
      </div>

    </>
  );
}

export default App;
