$(function () {
  var g = new Game();
  g.playGame();
  
  
  $('td').click(function() {
    var id = $(this).attr('id');
    g.gameStep(id);
  });
  
});

