
import './App.scss';
import Login from './pages/Login';
import Home from './pages/Home';
import Question from './pages/Question'
import {Routes, Route, Link} from 'react-router-dom';
import GameCreation from './pages/GameCreation';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home path="/" loggedIn={false} />} />
          <Route path="/login" element={<Login path="/login" />} />
          <Route path="/question" element={<Question path="/question" />} />
          <Route path="/game-creation" element={<GameCreation path="/game-creation" />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
