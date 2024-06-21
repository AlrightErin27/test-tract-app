import { Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./pages/Navbar/Navbar";
import Home from "./pages/Home";
import TicTacToe from "./pages/TicTacToe/TicTacToe";
import Memory from "./pages/Memory/Memory";
import Game from "./pages/TEST/Game";
import Concentration from "./pages/Concentration/Concentration";

function App() {
  return (
    <div className="App">
      <div className="app-row">
        <Navbar />
      </div>
      <div className="app-row">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tic-tac-toe" element={<TicTacToe />} />
            <Route path="/memory" element={<Memory />} />
            <Route path="/game" element={<Game />} />
            <Route path="/concentration" element={<Concentration />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
