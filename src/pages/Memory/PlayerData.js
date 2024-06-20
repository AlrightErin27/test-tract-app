import "./Memory.css";

export default function PlayerData({ name, movesLeft }) {
  return (
    <div className="PlayerData">
      <div>Player: {name}</div>
      <div>Moves Left: {movesLeft}</div>
    </div>
  );
}
