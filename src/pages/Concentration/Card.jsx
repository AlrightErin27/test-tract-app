import "./Concentration.css";
import { useState } from "react";

export default function Card({ key, emoji }) {
  const [faceDown, setFaceDown] = useState(true);

  return (
    <div
      className="Card"
      key={key}
      onClick={() => (faceDown ? setFaceDown(false) : setFaceDown(true))}
    >
      {faceDown ? (
        <div className="face-down"></div>
      ) : (
        <div className="face-up">{emoji}</div>
      )}
    </div>
  );
}
