let playerFactory = (name, token) => {
    return {name, token};
}


let gameBoard = (function() {
    let boardArr = ['','','','','','','','',''];
    let playerOne = playerFactory('Player 1', "x");
    let playerTwo = playerFactory('Player 2', 'o');
    let currentPlayer = playerOne;
    let render = () => {
        let board = document.querySelector('#board');
        for (let i = 0; i < boardArr.length; i++) {
            let tile = document.createElement('div');
            tile.setAttribute('class', 'tile');
            tile.setAttribute('id', i)
            tile.textContent = boardArr[i];
            if(tile.textContent === '') {
                tile.addEventListener('click', currentPlayerClick);
            }
            board.appendChild(tile);
        }
        return board;    
    }
    let currentPlayerClick = (e) => {
        if(currentPlayer === playerOne){
            e.target.textContent = playerOne.token;
            boardArr[e.target.id] = playerOne.token;
            currentPlayer = playerTwo;
        } else if (currentPlayer === playerTwo){
            e.target.textContent = playerTwo.token;
            boardArr[e.target.id] = playerTwo.token;
            currentPlayer = playerOne;
        }
        e.target.removeEventListener('click', currentPlayerClick);
        gameOver();
    }
    function gameOver() {
        return winCondition(0,1,2) || winCondition(3,4,5) || winCondition(6,7,8) || winCondition(0,3,6) || winCondition(1,4,7) || winCondition(2,5,8) || winCondition(0,4,8) || winCondition(2,4,6) || tieGame();
    }
    function winCondition(tile1, tile2, tile3){
        let tokenAtOne = boardArr[tile1];
        if (tokenAtOne === '') return false;
        let tokenAtTwo = boardArr[tile2];
        if (tokenAtOne !== tokenAtTwo) return false;
        let tokenAtThree = boardArr[tile3];
        if (tokenAtOne !== tokenAtThree) return false;
        console.log(`${tokenAtOne} won`);
    }
    function tieGame(){
        for (let i = 0; i < boardArr.length; i++) {
            if (boardArr[i] === '') return false;
        }  
        console.log(`game over`);
        return;
    }

    return {render};
})();

gameBoard.render();

