function checkColumn(grid, columnIndex){
    let column = new Set();
    for(let i=0; i<grid.length; i++) {
        let row = grid[i];
        if(row[columnIndex]!=="."){

            if(column.has(row[columnIndex])){
                return false;
            }
            else{
                column.add(row[columnIndex]);
            }
        }
    }
    return true;
}



function sudoku2(grid) {
    for(let j=0; j<grid.length; j++){
        if(!checkColumn(grid,j)){
            return false;
        }
    }
    return true;
}

//{2,1,4} 




console.log(sudoku2([   ['.', '.', '.', '1', '4', '.', '.', '2', '.'],
                        ['.', '.', '6', '.', '.', '.', '.', '.', '.'],
                        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
                        ['.', '.', '1', '.', '.', '.', '.', '.', '.'],
                        ['.', '6', '7', '.', '.', '.', '.', '.', '9'],
                        ['.', '.', '.', '.', '.', '.', '8', '1', '.'],
                        ['.', '3', '.', '.', '.', '.', '.', '.', '6'],
                        ['.', '.', '.', '.', '.', '7', '.', '.', '.'],
                        ['.', '.', '.', '5', '.', '.', '.', '7', '.']]));