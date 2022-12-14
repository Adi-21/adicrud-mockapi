import './App.css';
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';
import Add from './Components/Add';
import Navbar from './Components/Layout/Navbar';
import Edituser from './Components/Edituser';
import User from './Components/User';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/add' element={<Add />} />
          <Route exact path='/edituser/:id' element={<Edituser />} />
          <Route exact path='/user/:id' element={<User />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;