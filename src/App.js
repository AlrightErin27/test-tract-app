
import "./App.css"
import Navbar from "./Navbar"
import Home from "./pages/Home"
import TicTacToe from "./pages/TicTacToe"
import Game from "./pages/Game"

function App() {

  let component;

  switch(window.location.pathname){
    case "/":
      component = <Home />;
      break;
    case "/tic-tac-toe":
      component = <TicTacToe />;
      break;
    case "/game":
      component = <Game />;
      break;
  };
  return (
    <div className="App">
      
      <Navbar />
      <div className="container">
      {component}
      </div>
    </div>
  );
}

export default App; 
