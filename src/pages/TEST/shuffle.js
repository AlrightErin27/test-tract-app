export default function shuffle(arr) {
  let currIdx = arr.length,
    randomIdx;

  while (currIdx > 0) {
    randomIdx = Math.floor(Math.random() * currIdx);
    currIdx--;

    [arr[currIdx], arr[randomIdx]] = [arr[randomIdx], arr[currIdx]];
  }
  return arr;
}
