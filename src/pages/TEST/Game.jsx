import "./Game.css";
import shuffle from "./shuffle";

export default function Game() {
  const items = [1, 2, 3, 4, 5];
  const allItems = shuffle([...items, ...items]);

  const handleClick = () => {};

  return (
    <div className="Game">
      <div className="cards-cont">
        {allItems.map((item, idx) => {
          if (idx % 2 == 0) {
            return (
              <div key={idx} className="even-row" onClick={handleClick}>
                <div className="face-up-even">{item}</div>
              </div>
            );
          } else {
            return (
              <div key={idx} className="odd-row" onClick={handleClick}>
                <div className="face-up-odd">{item}</div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
