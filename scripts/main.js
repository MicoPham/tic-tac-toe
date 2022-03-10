let gameBoard = (function() {
    let playerOne = '', playerTwo = '', currentPlayer;
    let boardArr = ['','','','','','','','',''];
    const display = document.querySelector('#display');
    const board = document.querySelector('#board');
    let playerFactory = (name, token) => {
        return {name, token};
    }
    let render = () => {
        board.innerHTML = '';
        for (let i = 0; i < boardArr.length; i++) {
            let tile = document.createElement('div');
            tile.setAttribute('class', 'tile');
            tile.setAttribute('id', i)
            tile.textContent = boardArr[i];
            tile.addEventListener('click', currentPlayerClick);
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
        if (boardArr[tile1] === '') return;
        if (boardArr[tile1] !== boardArr[tile2]) return;
        if (boardArr[tile1] !== boardArr[tile3]) return;
        document.querySelectorAll('.tile').forEach((tile) => tile.removeEventListener('click', currentPlayerClick));
        if (boardArr[tile1] === 'x') {
            return display.innerText = `${playerOne.name} is the winner!`;
        } else {
            display.innerText = `${playerTwo.name} is the winner!`;
        }
    }
    function tieGame(){
        for (let i = 0; i < boardArr.length; i++) {
            if (boardArr[i] === '') return;
        }
        document.querySelectorAll('.tile').forEach((tile) => tile.removeEventListener('click', currentPlayerClick)); 
        display.innerText = `It's a tie!`;
    }
    startBtn.addEventListener('click', (e) => {
        playerOne = playerFactory(document.getElementById('player1').value, "x");
        playerTwo = playerFactory(document.getElementById('player2').value, 'o');
        currentPlayer = playerOne;
        document.querySelector('form').remove();
        document.querySelector('#startBtn').remove();
        display.innerText = `${playerOne.name} is ${playerOne.token} and ${playerTwo.name} is ${playerTwo.token}.`;
        gameBoard.render();
    })
    restartBtn.addEventListener('click', (e) => {
        location.reload();
    })
    return {render};
})();