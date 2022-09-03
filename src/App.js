
import './App.scss';
import Header from './components/header';
import Slider from './components/slider';
import Projects from './components/projects';
import About from './components/about';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      
      <Header/>
      <Slider/>
      <Projects/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
