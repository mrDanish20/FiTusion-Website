
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Features from './Components/Features';
import Services from './Components/Services';
import Exercise from './Components/Exercise';
import Contactus from './Components/Contactus';
import Login from './Components/Login';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Features' element={<Features />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/Exercise' element={<Exercise />} />
          <Route path='/Contactus' element={<Contactus />} />
          <Route path='/Login' element={<Login />}/>



        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
