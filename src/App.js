import './App.css';
import Footer from './Layouts/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import { useContext } from 'react';
import { ThemeContext } from './Services/Theme';

function App() {

  const {mode} = useContext(ThemeContext)

  return (
    <>
      <div className={`${mode}`}>
        <Home />
        <About />
        <Footer />
      </div>

    </>
  );
}

export default App;
