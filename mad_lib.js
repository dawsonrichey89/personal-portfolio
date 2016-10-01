// Note
var answer1 = prompt("Adjective");
var answer2 = prompt("Noun");
var answer3 = prompt("Noun plural");
var answer4 = prompt("Noun");
var answer5 = prompt("Verb ending in 'ed'");

var madlib = "<p> There was a/an " + answer1 + " woman who lived in a/an " + answer2 + ". <br>She had so many " + answer3 + " she didn't know what to do.<br>She gave them some broth without any " + answer4 + ".<br>She " + answer5 + " them all soundly and put them to bed. </p>";

document.write(madlib);
