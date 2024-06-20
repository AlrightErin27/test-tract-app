import "./Memory.css";

import { useState } from "react";
import PlayerData from "./PlayerData";
import Board from "./Board";

export default function Memory() {
  const [name, setName] = useState("");
  const [fullForm, setFullForm] = useState(false);
  const [movesLeft, setMovesLeft] = useState(10);

  return (
    <div className="Memory">
      {fullForm === false ? (
        <form className="form">
          <label>
            Enter your name:{"    "}
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <button type="submit" onClick={() => setFullForm(true)}>
            Submit
          </button>
        </form>
      ) : (
        <div className="in-game">
          <PlayerData name={name} movesLeft={movesLeft} />

          <Board />
        </div>
      )}
    </div>
  );
}
