
//those are the functions that we will be implementing 
//in our game 
//so we bring our html elements
const statusDiv = document.querySelector('.status');
const resetDiv = document.querySelector('.reset');
const cellDivs = document.querySelectorAll('.cell');

// our constant variables
const xSympol = 'x';
const oSympol = 'o';

let gameLive = true;
let xIsNext = true;
let winner = null;

//functions

const letterToSympol = (letter) => letter === 'x' ? xSympol : oSympol;

const handleWin = (letter) =>{
    gameLive = false;
    winner = letter;
    if (winner === 'x'){
        statusDiv.innerHTML = `${letterToSympol(winner)} has won!`;
    }else{
        statusDiv.innerHTML = `${letterToSympol(winner)} has won!`;
    }
};

const checkGameCondition = () =>{
    const cellOne = cellDivs[0].classList[1];
    const cellTwo = cellDivs[1].classList[1];
    const cellThree = cellDivs[2].classList[1];
    const cellFoure = cellDivs[3].classList[1];
    const cellFive = cellDivs[4].classList[1];
    const cellSix = cellDivs[5].classList[1];
    const cellSeven = cellDivs[6].classList[1];
    const cellEight = cellDivs[7].classList[1];
    const cellNine = cellDivs[8].classList[1];


    //check the winner
    if (cellOne && cellOne === cellTwo && cellOne === cellThree){
        handleWin(cellOne);
    }else if (cellFoure && cellFoure === cellFive && cellFoure === cellSix){
        handleWin(cellFoure);
    }else if (cellSeven && cellSeven === cellEight && cellSeven === cellNine){
        handleWin(cellSeven);
    }else if (cellOne && cellOne === cellFoure && cellOne === cellSeven){
        handleWin(cellOne);
    }else if (cellTwo && cellTwo === cellFive && cellTwo === cellEight){
        handleWin(cellTwo);
    }else if (cellThree && cellThree === cellSix && cellThree === cellNine){
        handleWin(cellThree);
    }else if (cellOne && cellOne === cellFive && cellOne === cellNine){
        handleWin(cellOne);
    }else if (cellThree && cellThree === cellFive && cellThree === cellSeven){
        handleWin(cellThree);
    }else if (cellOne && cellThree && cellTwo && cellFoure && cellFive && cellSeven && cellEight && cellNine){
        gameLive = false;
        statusDiv.innerHTML = 'Game is tied!'
    } else {
       xIsNext = !xIsNext;
       if (xIsNext === 'x') {
           statusDiv.innerHTML = `${xSympol} is next`;
       } else {
           statusDiv.innerHTML = `${oSympol} is next`;
       }
    }
};

//event handler
const handleReset = (e) =>{
    //make the player start always x
    xIsNext = true;
    statusDiv.innerHTML = `${xSympol} is next`;
    for (const cellDiv of cellDivs){
        cellDiv.classList.remove('x');
        cellDiv.classList.remove('o');
    }
 };

const handleCellClick = (e) =>{
    const classList = e.target.classList;
    const location = classList[1];

    //if the cell having x or o then dont do anything in this cell
    if (classList[1] === 'x' || classList[1] === 'o'){
        return;
    }
    //adding x or o to the class name
    if (xIsNext) {
        classList.add('x');
        checkGameCondition();
    }else{
        classList.add('o');
        checkGameCondition();
    }

}

//event listeners
resetDiv.addEventListener('click', handleReset);

for (const cellDiv of cellDivs){
    cellDiv.addEventListener('click', handleCellClick)
}