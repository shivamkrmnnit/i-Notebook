import './App.css';
import Home from './components/Home';
import About from './components/About';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <>
    <div>
      <NoteState>
      <Router>
      <Navbar/>
      {/* <Alert message="this is alert"/> */}
      <div className='container'>
     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        {/* <Route path="/signup" element={<Signup />} /> */}
      </Routes>
      </div>
      </Router>
      
      </NoteState>
      </div>
    </>
  );
}

export default App;
