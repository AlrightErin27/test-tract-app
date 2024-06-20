import "./Memory.css";
import { useState, useEffect } from "react";

export default function Card({ emoji, cardColor }) {
  const [faceDown, setFaceDown] = useState(true);

  return (
    <div className="Card" style={{ backgroundColor: cardColor }}>
      {faceDown === true ? (
        <div className="down-card" onClick={() => setFaceDown(false)}>
          <div className="emoji-frame">{emoji}</div>
        </div>
      ) : (
        <div className="up-card">FACE UP</div>
      )}
    </div>
  );
}
