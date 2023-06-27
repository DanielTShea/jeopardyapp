import Navbar from './components/Navbar';
import Home from './views/Home';
import Signup from './views/Signup';
import Login from './views/Login';
import NewGame from './views/NewGame';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/newgame" element={<NewGame />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
