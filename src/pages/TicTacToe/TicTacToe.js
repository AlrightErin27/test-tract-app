import { useState, useEffect } from "react";
import "./TicTacToe.css";

import Square from "./Square";
import { WinningPatterns } from "./WinningPatterns";

export default function TicTacToe() {
  //-------- STATE --------//
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("O");
  const [result, setResult] = useState({
    winner: "none",
    gameState: "in-play",
  });

  //-------- USE EFFECT --------//
  useEffect(() => {
    checkWin();
    checkTie();
    player == "X" ? setPlayer("O") : setPlayer("X");
  }, [board]);

  //CHOOSE SQUARE
  const selectSquare = (square) => {
    //update square to current player
    setBoard(
      board.map((val, idx) => {
        if (idx == square && val == "") {
          return player;
        }
        return val;
      })
    );
  };

  //CHECK IF WINNING PATTERN EXISTS
  const checkWin = () => {};
  //CHECK IF TIE
  const checkTie = () => {};

  return (
    <div>
      <div className="tic-tac-toe">
        <div className="board">
          <div className="row">
            <Square
              val={board[0]}
              i={"sq0"}
              selectSquare={() => {
                selectSquare(0);
              }}
            />
            <Square
              val={board[1]}
              i={"sq1"}
              selectSquare={() => {
                selectSquare(1);
              }}
            />
            <Square
              val={board[2]}
              i={"sq2"}
              selectSquare={() => {
                selectSquare(2);
              }}
            />
          </div>
          <div className="row">
            <Square
              val={board[3]}
              i={"sq3"}
              selectSquare={() => {
                selectSquare(3);
              }}
            />
            <Square
              val={board[4]}
              i={"sq4"}
              selectSquare={() => {
                selectSquare(4);
              }}
            />
            <Square
              val={board[5]}
              i={"sq5"}
              selectSquare={() => {
                selectSquare(5);
              }}
            />
          </div>
          <div className="row">
            <Square
              val={board[6]}
              i={"sq6"}
              selectSquare={() => {
                selectSquare(6);
              }}
            />
            <Square
              val={board[7]}
              i={"sq7"}
              selectSquare={() => {
                selectSquare(7);
              }}
            />
            <Square
              val={board[8]}
              i={"sq8"}
              selectSquare={() => {
                selectSquare(8);
              }}
            />
          </div>
        </div>
        <text>Player: {player}</text>
        <text>Game: {result.gameState}</text>
        <text>Winner: {result.winner}</text>
      </div>
    </div>
  );
}
