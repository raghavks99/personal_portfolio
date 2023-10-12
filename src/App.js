import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import Experience from './Pages/Experience'
import Nav from './Components/Nav';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Routes>
          <Route path = "/" element = {<Home/>} />
          <Route path = "/project" element = {<Projects/>} />
          <Route path = "/experience" element = {<Experience/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
