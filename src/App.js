import Footer from './Layouts/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import { useContext } from 'react';
import { ThemeContext } from './Services/Theme';
import Experience from './Pages/Experience';
import Projects from './Pages/Projects';
import Skills from './Pages/Skills';
import Contacts from './Pages/Contact';
import Education from './Pages/Education';
import Achievements from './Pages/Achievements';

function App() {

  const {mode} = useContext(ThemeContext)

  return (
    <>
      <div className={`${mode}`}>
        <Home />
        <About />
        <Experience/>
        <Skills/>
        <Projects/>
        <Education/>        
        <Achievements/>
        <Contacts/>
        <Footer />
      </div>
    </>
  );
}

export default App;
