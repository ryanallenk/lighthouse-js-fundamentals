const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];
const finalPosition = function (moves) {
  let final = [];
  let x = 0;
  let y = 0;
  for (const move of moves){
    if (move === "north") {
      y++;
    } else if (move === "south") {
      y--;
    } else if (move === "east") {
      x++;
    } else if (move === "west") {
      x--;
    }
  }
  final.push(x, y);
  return final  
};
console.log(finalPosition(moves));