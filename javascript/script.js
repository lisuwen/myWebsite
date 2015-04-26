document.getElementById("foot01").innerHTML =
"<p>&copy;  " + new Date().getFullYear() + " Suwen Li. All rights reserved.</p>";

var main = function() {
  $('.dropdown-toggle').click(function() {
    $('.dropdown-menu').toggle();
  });
}

$(document).ready(main);