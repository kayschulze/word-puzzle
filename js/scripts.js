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

var validateGuess = function(original, guess) {
  for (var k = 0; k <= original.length; k++) {
    if (original[k] != guess[k]) {
      return false;
    }
  }
  return true;
};

var splicedSentence;

$(function() {
  $("#inputValue").submit(function(event) {
    event.preventDefault();
    var sentence = $("#inputSentence").val();

    splicedSentence = spliceSentence(sentence);
    var noVowelsSentence = spliceSentence(sentence);
    noVowelsSentence = noVowels(noVowelsSentence);

    console.log(splicedSentence);
    console.log(noVowelsSentence);

    displayString(noVowelsSentence);
  });

  $("#guess").submit(function(event) {
    event.preventDefault();
    var guess = $("#guessSentence").val();
    var splicedGuess = spliceSentence(guess);

    var result = validateGuess(splicedSentence, splicedGuess);
    if (result == true) {
      console.log("you're on your way!");
      $(".resultPositive").show();
    }
    else {
      console.log("sorry, try again.")
      $(".resultNegative").show();
    }
  });
});
