import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './components/homePage/homePage';
import NavBar from './components/navBar/navBar';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
        <Route path='/' element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
