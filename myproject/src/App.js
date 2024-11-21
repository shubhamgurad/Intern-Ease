import './App.css';
import './Clgpics.css';
import './Director.css';
import './Loginfrom.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './Homepage.jsx';
import Navbarr from './Navbarr.jsx';
import Home from './Home.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signupfrom from './Signupfrom';
import Footer from './Footer.jsx';
import Contactus from './Contactus.jsx';
import Loginfrom from './Loginfrom.jsx';
import Aboutus from './Aboutus.jsx';
import Intern from './Intern.jsx';
import Studinfo from './Studinfo.jsx';
import Sarchitanis from './Sarchitanis.jsx';
import Director from './Director.jsx'
import axios from 'axios';
import Account from './Account.jsx';

function App() {
  axios.defaults.baseURL = 'http://localhost:8000'
  return (
    <>
      <Homepage />
      <BrowserRouter>
      <Navbarr />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/intern' element={<Intern/>}/>
          <Route path='/loginform' element={<Loginfrom />} />
          <Route path='/aboutus' element={<Aboutus />} />
          <Route path='/contactus' element={<Contactus />} />
          <Route path='/signupfrom' element={<Signupfrom/>}/>
          <Route path='/studinfo' element={<Studinfo/>}/>
          <Route path='/sarchitanis' element={<Sarchitanis/>}/>
          <Route path='/director' element={<Director/>}/>
          <Route path='/account/:email' element={<Account/>}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;