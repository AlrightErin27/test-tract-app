import "./Concentration.css";
import shuffle from "./shuffle";

import Card from "./Card";

export default function Game() {
  const emojis = ["🦓", "🐅", "🦢", "🐇", "🐏", "🐈‍⬛", "🦜"];
  const allEmojis = shuffle([...emojis, ...emojis]);

  return (
    <div className="Concentration">
      <div className="player-info">Data</div>
      <div className="board">
        {allEmojis.map((emoji, idx) => {
          return <Card key={idx} emoji={emoji} />;
        })}
      </div>
    </div>
  );
}
