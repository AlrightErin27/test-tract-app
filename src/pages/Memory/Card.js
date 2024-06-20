import "./Memory.css";
import { useState, useEffect } from "react";

export default function Card({ emoji, cardColor }) {
  const [faceDown, setFaceDown] = useState(true);

  return (
    <div className="Card">
      {faceDown === true ? (
        <div className="down-card" style={{ backgroundColor: cardColor }}>
          <div className="emoji-frame">{emoji}</div>
        </div>
      ) : (
        "face up"
      )}
    </div>
  );
}
