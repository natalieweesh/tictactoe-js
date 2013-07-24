
var Player = function(number) {
  this.number = number;
  this.player_name = this.number.toString();
};


var Game = function(board) {
  this.gameEnded = false;
  this.draw = false;
  this.board = [["_","_","_"],["_","_","_"],["_","_","_"]];
  this.players = [new Player(0), new Player(1)];
  this.playerTurn = 0;
};


Game.prototype.gameOver = function() {
  // check rows
  for(var i = 0; i < this.board.length; i++) {
    var first = this.board[i][0];
    var same = true;
    if(first != "_") {
      for(var j = 1; j < this.board[i].length; j++) {
        if(this.board[i][j] != first)
          same = false
      }

      if(same)
        return true;
    }
  }

  // check columns
  for(var i = 0; i < this.board[0].length; i++) {
    var first = this.board[0][i];
    var same = true;
    if(first != "_") {
      for(var j = 1; j < this.board.length; j++) {
        if(this.board[j][i] != first)
          same = false
      }

      if(same)
        return true;
    }
  }
  // check diagonals
  if(this.board[0][0] != "_") {
    var first = this.board[0][0];
    if(this.board[1][1] == first && this.board[2][2] == first)
      return true;
  }

  if(this.board[0][2] != "_") {
    var first = this.board[0][2];
    if(this.board[1][1] == first && this.board[2][0] == first)
      return true;
  }
  
  // check for a draw
  var filledSpaces = 0;
  for (var i=0; i<this.board.length; i++) {
    for (var j=0; j < this.board.length; j++) {
      if (this.board[i][j] != '_') {
        filledSpaces++;
      }
    }
  }
  if (filledSpaces === 9) {
    this.draw = true;
    return true;
  }

  return false;
};

Game.prototype.playGame = function() {
  $('#textbox').html("Player " + (this.playerTurn+1) + "'s turn");
  
};


Game.prototype.gameStep = function(coords) {
  var that = this;
  console.log(coords);
  var x = parseInt(coords[1]);
  var y = parseInt(coords[3]);
  
  if (this.gameEnded === true) {
    return;
  }
  
  else if (x < 3 && x >= 0 && y < 3 && y >= 0 && this.board[x][y] === '_')
  {
    idString = "#r" + x + "c" + y;
    var xoro = (this.playerTurn === 0) ? "X" : "O";
    $(idString).html(xoro);
    this.board[x][y] = xoro;
    this.playerTurn = (this.playerTurn === 0) ? 1 : 0;
    $('#textbox').html("player " + (this.playerTurn+1) + "'s turn");
  } else {
    $('#textbox').html("player " + (this.playerTurn+1) + "'s turn" + "<p>invalid move!</p>");
  }
  if (this.gameOver() === true) {
    this.gameEnded = true;
    if (this.draw === false) {
      $('#textbox').html('player ' + (1 - this.playerTurn + 1) + ' wins!');
    }
    else { $('#textbox').html('game over!'); }
  }
  
}
