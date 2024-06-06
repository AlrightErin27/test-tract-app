import { Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./pages/Navbar/Navbar";
import Home from "./pages/Home";
import TicTacToe from "./pages/TicTacToe/TicTacToe";
import Game from "./pages/Game";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tic-tac-toe" element={<TicTacToe />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
