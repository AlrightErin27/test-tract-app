import "./TicTacToe.css";

//import { useState } from "react";

export default function TicTacToe({ val, chooseSquare }) {
  return (
    <div className="Square" onClick={chooseSquare}>
      {val}
    </div>
  );
}
