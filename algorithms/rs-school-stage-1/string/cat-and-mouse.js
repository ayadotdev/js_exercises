function catMouse(map,moves){

    
    
    for (let i = 0; i < map.length; i++) {
        const row = matrix[i];
      
        for (let j = 0; i < row.length; j++) {
          // index C
          // index M
          // Find cat position
          // find mouse position
        }
      }
    
  }


  // Find distance in matrix

const mapTwo = `
.C.......
.........
......m..
`;

// abs(a1-a2)+abs(b1-b2)

// 1 2 3 4 m 6
// 4 6 7 8 8 9
// 3 C 5 6 7 8
// 4 5 5 6 7 7

// const matrix = [row1, row2, row3, row4];

for (let i = 0; i < matrix.length; i++) {
  const row = matrix[i];

  for (let j = 0; i < row.length; j++) {
    // index C
    // index M
    // Find cat position
    // find mouse position
  }
}

// apply distance formula to find distance

console.log(mapTwo.split(""));

const map = ".....C.......m....";
const map2 = "C....m............";
const moves = 3;

function catMouse(map, moves) {
  const mapToArr = map.split("");
  let catPosition = null;
  let mousePosition = null;
  let distance = 0;
  for (let i = 0; i < mapToArr.length; i++) {
    if (mapToArr[i] === "C") {
      catPosition = i;
      console.log("cat", catPosition);
    }
    if (mapToArr[i] === "m") {
      mousePosition = i;
      console.log("mouse", mousePosition);
    }
  }
  console.log(mousePosition, catPosition);
  distance = catPosition - mousePosition;

  if (catPosition === null || mousePosition === null) {
    return "boring without two animals";
  }

  return Math.abs(distance) - 1 === moves ? "Caught!" : "Escaped!";
}

console.log(catMouse(map2, 3));