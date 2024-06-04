import "./TicTacToe.css";

export default function Square({ val, i, selectSquare }) {
  return (
    <div className="square" id={i} onClick={selectSquare}>
      {val}
    </div>
  );
}
