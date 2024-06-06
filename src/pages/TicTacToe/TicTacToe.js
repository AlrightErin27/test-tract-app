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
  }, [board]); //this fxn runs after everytime setBoard is used

  useEffect(() => {
    if (result.gameState != "in-play") alert(`FIN! Winner: ${result.winner}`);
  }, [result]); //fxn runs when result has changed to !"in-play"

  //CHOOSE SQUARE
  const selectSquare = (square) => {
    setBoard(
      //map through board arr & get it's value and it's index
      //update square to current player
      board.map((val, idx) => {
        //example) if someone clicks square1 it goes to the board arr index of 1 & IF its currently empty ("")->
        //then it the current players char is returned as the square's value (changing it from "" to either "X" or "O", which is displayed in Square.js)
        if (idx == square && val == "") {
          return player;
        }
        //if the value isn't changed the preset value "" is stilll displayed
        return val;
      })
    );
  };

  //CHECK IF WINNING PATTERN EXISTS
  const checkWin = () => {
    //loop through each pattern/arr
    WinningPatterns.forEach((currPattern) => {
      const playingPlayer = board[currPattern[0]];
      if (playingPlayer == "") return;

      let foundWinningPattern = true;

      currPattern.forEach((idx) => {
        if (board[idx] != playingPlayer) {
          foundWinningPattern = false;
        }
      });

      if (foundWinningPattern) {
        setResult({ winner: player, gameState: "won" });
      }
    });
  };
  //CHECK IF TIE
  const checkTie = () => {
    let filled = true;

    board.forEach((square) => {
      if (square == "") {
        filled = false;
      }
    });
    if (filled) {
      setResult({ winner: "no one", gameState: "cats" });
    }
  };

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
