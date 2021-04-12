
/**
 * You will be given a string (map) featuring a cat "C" and a mouse "m".
 * The rest of the string will be made up of dots (".")
 * The cat can move the given number of moves up, down, left or right, but not diagonally.
 * You need to find out if the cat can catch the mouse from it's current position and return "Caught!" or "Escaped!" respectively.
 * Finally, if one of two animals are not present, return "boring without two animals".
 */

// Find distance in matrix

const mapTwo = `
.C.......
.........
......m..
.........
`;

const mapThree = `
........C
.........
.m.......
.........
`;

// abs(a1-a2)+abs(b1-b2)

// 1 2 3 4 m 6
// 4 6 7 8 8 9
// 3 C 5 6 7 8
// 4 5 5 6 7 7

// const matrix = [row1, row2, row3, row4];

function catMouse(map, moves) {
  // parse string into two dimensional array
  const rows = map.split("\n");

  rows.pop();
  rows.shift();

  const matrix = rows.map((row) => row.split(""));

  // find coordinates of C and m
  let catPos = null;
  let mousePos = null;

  for (let y = 0; y < matrix.length; y++) {
    const row = matrix[y];

    for (let x = 0; x < row.length; x++) {
      if (matrix[y][x] === "C") {
        catPos = {
          x,
          y
        };
      }

      if (matrix[y][x] === "m") {
        mousePos = {
          x,
          y
        };
      }
    }
  }

  if (catPos === null || mousePos === null) {
    return "Not fun";
  }

  // find distance abs(y1-y2)+abs(x1-x2)
  // 0,1 - catPos
  // 2,6 - mousePos
  // D = (0 - 2) + (1 - 6) =  7

  const distance =
    Math.abs(catPos.x - mousePos.x) + Math.abs(catPos.y - mousePos.y);

  // compare moves and distance

  return moves >= distance ? "Caught!" : "Mouse escaped!";
}

console.log(catMouse(mapTwo, 7));