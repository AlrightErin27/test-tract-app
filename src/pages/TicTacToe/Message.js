import "./TicTacToe.css";
import { useEffect } from "react";

export default function Message({ winner }) {
  return winner == "none" ? (
    <h1 className="message-blank">BLANK</h1>
  ) : (
    <h1 className="message-filled">{winner} wins!</h1>
  );
}
