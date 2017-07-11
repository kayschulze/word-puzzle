var convertSentence = function(phrase) {
  console.log(phrase);
  //return phrase.split("");
};

$(function() {
  $("#inputValue").submit(function(event) {
    event.preventDefault();
    var sentence = $("#inputSentence").val();
    convertSentence(sentence);
  });
});
