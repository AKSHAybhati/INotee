import 'bootstrap/dist/css/bootstrap.min.css';
import {
BrowserRouter as Router,
Routes,
Route
} from "react-router-dom";

import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import NoteState from "./context/notes/NoteState";
import Login from './Components/Login';
import Signup from './Components/Signup';

const App = () => {
  return (
    <>
        <Router>
          <NoteState>
        <Navbar />
        <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        
        </Routes>
        </NoteState>
      </Router>
    </>
  )
}

export default App