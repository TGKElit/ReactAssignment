import "./App.scss";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Question from "./pages/Question";
import { Routes, Route, Link } from "react-router-dom";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home path="/" loggedIn={false} />} />
          <Route path="/login" element={<Login path="/login" />} />
          <Route path="/register" element={<Register path="/register" />} />
          <Route path="/question" element={<Question path="/question" />} />
          <Route path="/answer" element={<Question path="/answer" />} />
        </Routes>
        {/*<Link to="/login">Login</Link>
        <Link to="/">Home</Link>*/}
      </header>
    </div>
  );
}

export default App;
