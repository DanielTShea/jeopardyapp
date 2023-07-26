import Navbar from './components/Navbar';
import Home from './views/Home';
import Signup from './views/Signup';
import Login from './views/Login';
import NewGame from './views/NewGame';
import NewGameRound1 from './views/NewGameRound1';
import NewGameRound2 from './views/NewGameRound2';
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
            <Route path="/newgameround1" element={<NewGameRound1 />}></Route>
            <Route path="/newgameround2" element={<NewGameRound2 />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
