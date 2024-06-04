import { useState, useEffect } from "react";
import "./TicTacToe.css";

import Square from "./Square";

export default function TicTacToe() {
  //-------- STATE --------//
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  return (
    <div className="tic-tac-toe">
      <div className="board">
        <div className="row">
          <Square val={board[0]} i={"sq0"} />
          <Square val={board[1]} i={"sq1"} />
          <Square val={board[2]} i={"sq2"} />
        </div>
        <div className="row">
          <Square val={board[3]} i={"sq3"} />
          <Square val={board[4]} i={"sq4"} />
          <Square val={board[5]} i={"sq5"} />
        </div>
        <div className="row">
          <Square val={board[6]} i={"sq6"} />
          <Square val={board[7]} i={"sq7"} />
          <Square val={board[8]} i={"sq8"} />
        </div>
      </div>
    </div>
  );
}
