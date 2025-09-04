const prompt = require("prompt-sync")();

function makeMove(turn, board){
    while(true){
        const row = parseInt(prompt("Enter row (1-3): ")); 
        const col = parseInt(prompt("Enter a column(1-3): "));
        if(isNaN(row) ||row < 1 || row > 3) console.log("Invalid row!");
        else if(isNaN(col) || col < 1 || col > 3) console.log("Invalid column!");
        else if(board[row-1][col-1] !== " ") console.log("Position Occupied!")
        else{
            board[row - 1][col - 1] = turn;
            break;
        }
    }
}

function printBoard(Board){
    for(let i = 0; i < Board.length; i++){
        let rowString = "";
        for(let j = 0; j < Board[i].length; j++){
            rowString += Board[i][j]
            if(j < Board.length-1) rowString += " | "
        }
        console.log(rowString);
        if(i < Board.length - 1) console.log("---------");
    }
}

function checkWin(Board){
    for(let i = 0; i < Board.length; i++){
        if(Board[i][0] !== " " && Board[i][0] === Board[i][1] && Board[i][1] === Board[i][2]) return true;
    }
    for(let j = 0; j < Board.length; j++){
        if(Board[0][j] !== " " && Board[0][j] === Board[1][j] && Board[1][j] === Board[2][j]) return true;
    }
    if(Board[0][0] !== " " && Board[0][0] === Board[1][1] && Board[1][1] ===Board[2][2]) return true;

    if(Board[0][2] !== " " && Board[0][2] === Board[1][1] && Board[1][1]=== Board[2][0]) return true;

    return false;
}
    
const Board = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
]

let turn = "X";
let turnCount = 0;


printBoard(Board);
console.log();



while(turnCount < 9){
    console.log(turn, "players turn")
    makeMove(turn, Board);
    printBoard(Board);
    console.log();

    if(checkWin(Board)){
        console.log(turn, "has won!")
        break;
    }

    turnCount++;

    if(turn === "X") turn = "O";
    else turn = "X";
    
}

if(turnCount === 9 && !checkWin(Board)){
        console.log("\"It's a draw!\"");
}
