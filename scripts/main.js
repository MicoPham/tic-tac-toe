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
            tile.textContent = boardArr[i];
            if(tile.textContent === '') {
                tile.addEventListener('click', currentPlayerClick);
            }
            board.appendChild(tile);
        }
        return board;    
    };
    let currentPlayerClick = (e) => {
        if(currentPlayer === playerOne){
            e.target.textContent = playerOne.token;
            boardArr[`e.target.id`] = playerOne.token;
            currentPlayer = playerTwo;
        } else if (currentPlayer === playerTwo){
            e.target.textContent = playerTwo.token;
            boardArr['e.target.id'] = playerTwo.token;
            currentPlayer = playerOne;
        }
        e.target.removeEventListener('click', currentPlayerClick);
    }
    return {render};
})();

gameBoard.render();