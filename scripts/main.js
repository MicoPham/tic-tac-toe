

let gameBoard = (function() {
    let boardArr = ['x','x','x','x','x','x','x','x','x'];
    let render = () => {
        let board = document.querySelector('#board');
        for (let i = 0; i < boardArr.length; i++) {
            let tile = document.createElement('div');
            tile.setAttribute('class', 'tile');
            tile.textContent = boardArr[i];
            board.appendChild(tile);
        }
    return board;    
    }
    return {render};
})();

gameBoard.render();