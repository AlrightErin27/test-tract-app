import "./TicTacToe.css";

export default function Square({ val, i, selectSquare }) {
  //dynamic className change to change color of text
  let charStyle = "";
  val === "X" ? (charStyle = "x-style") : (charStyle = "o-style");

  return (
    <div className="square" id={i} onClick={selectSquare}>
      <div className={charStyle}>{val}</div>
    </div>
  );
}
