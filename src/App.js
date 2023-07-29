import './App.css';
import Navbar from './components/navbar';
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Service from './pages/Service';
import Contact from './pages/Contact';
import About from './pages/About';
import Footer from './components/footer';
function App() {
  return (
    <div className='App'>
        <Routes>
          <Route path="/" element={<Navbar/>}>
            <Route index element={<Home/>} />
            <Route path="about" element={<About />} />
            <Route path="service" element={<Service />} />
            <Route path="contact" element={<Contact />} />
            {/* // <Route path="signup" element={<Signup />} />
            // <Route path="login" element={<Login />} /> */}
          </Route>
        </Routes>
      <Footer/>
      </div>
  );
}

export default App;
