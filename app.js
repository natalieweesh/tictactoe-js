$(function() {
  
  
  $('body').append('<table id="t">');
  for (var i = 0; i < 3; i++) {
    $('#t').append('<tr id="r' + i + '">');
    for (var j = 0; j < 3; j++) {
      var row = "#r" + i;
      var className = "";
      if (i < 2) {className += " bottomLine"};
      if (i > 0) {className += " topLine"};
      if (j < 2) {className += " rightLine"};
      if (j > 0) {className += " leftLine"};
      $(row).append('<td class="square' + className + '" id="r' + i + "c" + j + '"></td>');
    }
  
  }
  $('body').append("<p id='textbox'>hello</p>")
  


});