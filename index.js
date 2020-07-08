let player1 = {
  name: '',
  shipCount: 4,
  gameBoard: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ]
};
let player2 = {
  name: '',
  shipCount: 4,
  gameBoard: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ]
};
player1.name = prompt('Type a name of the first player');
player2.name = prompt('Type a name of the second player');
//gameboard setup
const getCoordinates = (ship) => {
  let x = Math.floor(Math.random() * 4) + 0;
  let y = Math.floor(Math.random() * 4) + 0;
  while (ship.gameBoard[x][y] === 1) {
    x = Math.floor(Math.random() * 4) + 0;
    y = Math.floor(Math.random() * 4) + 0;
  }
  ship.gameBoard[y][x] = 1
}
//positioning ships
const battleship = () => {
  for (let i = 0; i < 4; i++) {
    const playerOne = getCoordinates(player1)
    const playerTwo = getCoordinates(player2)
  }
  for(let i = 0; i < player1.gameBoard.length; i++) {  
    console.log(player1.gameBoard[i].toString());  
    }
  while (player1.shipCount > 0 && player2.shipCount > 0) {
    //player1 turn
    let player1Xposition = prompt(`${player1.name}, enter the x coordinate for your attack`);
    let player1Yposition = prompt(`${player1.name}, enter the y coordinate for your attack`);
    //if hit or miss
    if (player2.gameBoard[player1Yposition][player1Xposition] === 1) {
      alert('Hit!')
      player2.shipCount--;
    } else {
      alert('Miss!')
    }
    if (player2.shipCount === 0) {
      return(`The winner is player ${player1.name}!`)
    }
    //player2 turn
    let player2Xposition = prompt(`${player2.name}, enter the x coordinate for your attack`);
    let player2Yposition = prompt(`${player2.name}, enter the y coordinate for your attack`);
    //if hit or miss
    if (player1.gameBoard[player2Yposition][player2Xposition] === 1) {
      alert('Hit!')
      player1.shipCount--;
    } else {
      alert('Miss!')
    }
    if (player1.shipCount === 0) {
      return(`The winner is player ${player2.name}!`)
    }
  }
}

const gameResult = battleship()

const htmlTarget = document.getElementById('result')
htmlTarget.innerHTML = gameResult
