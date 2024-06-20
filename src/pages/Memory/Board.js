import "./Memory.css";
import Card from "./Card";
// import { useState } from "react";

export default function Board() {
  const stylesArr = [
    ["♥", "#993300"],
    ["♣️", "#00004d"],
    ["♠", "#e5f9f8"],
    ["♡", "#0066ff"],
    ["♢", "#004d00"],
    ["♧", "#666600"],
  ];
  const idx = Math.floor(Math.random() * stylesArr.length);

  return (
    <div className="Board">
      <div className="board-row ">
        <Card emoji={stylesArr[idx][0]} cardColor={stylesArr[idx][1]} />
        <Card emoji={stylesArr[idx][0]} cardColor={stylesArr[idx][1]} />
        <Card emoji={stylesArr[idx][0]} cardColor={stylesArr[idx][1]} />
        <Card emoji={stylesArr[idx][0]} cardColor={stylesArr[idx][1]} />
        <Card emoji={stylesArr[idx][0]} cardColor={stylesArr[idx][1]} />
        <Card emoji={stylesArr[idx][0]} cardColor={stylesArr[idx][1]} />
      </div>
      <div className="board-row ">
        <Card emoji={stylesArr[idx][0]} cardColor={stylesArr[idx][1]} />
        <Card emoji={stylesArr[idx][0]} cardColor={stylesArr[idx][1]} />
        <Card emoji={stylesArr[idx][0]} cardColor={stylesArr[idx][1]} />
        <Card emoji={stylesArr[idx][0]} cardColor={stylesArr[idx][1]} />
        <Card emoji={stylesArr[idx][0]} cardColor={stylesArr[idx][1]} />
        <Card emoji={stylesArr[idx][0]} cardColor={stylesArr[idx][1]} />
      </div>
    </div>
  );
}
