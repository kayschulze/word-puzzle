var spliceSentence = function(phrase) {
  return phrase.split("");
};

var isAVowel = function(letter) {
  if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
    return true;
  }
  else {
    return false;
  }
};

var noVowels = function(spliced) {
  for (i = 0; i <= spliced.length; i++) {
    if (isAVowel(spliced[i])) {
      spliced[i] = "-";
    }
  }
  return spliced;
};

var displayString = function(inputtedString) {
  $(".playerOne").hide();
  $(".challenge").show();
  for (j = 0; j <= inputtedString.length; j++) {
    $("p").append(inputtedString[j]);
  }
};

$(function() {
  $("#inputValue").submit(function(event) {
    event.preventDefault();
    var sentence = $("#inputSentence").val();

    var splicedSentence = spliceSentence(sentence);
    var noVowelsSentence = noVowels(splicedSentence);
    console.log(noVowelsSentence);

    displayString(noVowelsSentence);
  });
});
