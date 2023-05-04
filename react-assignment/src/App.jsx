
import './App.scss';
import Login from './pages/Login';
import Home from './pages/Home';
import Question from './pages/Question'
import {Routes, Route} from 'react-router-dom';
import GameCreation from './pages/GameCreation';
import Register from "./pages/Register";
import Answer from './pages/Answer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home path="/" />} />
          <Route path="/login" element={<Login path="/login" />} />
          <Route path="/register" element={<Register path="/register" />} />
          <Route path="/game-creation" element={<GameCreation path="/game-creation" />} />
          <Route path="/question" element={<Question path="/question" />} />
          <Route path="/answer" element={<Answer path="/answer" />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
