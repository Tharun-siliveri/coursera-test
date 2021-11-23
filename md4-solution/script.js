(function (window) {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (var prop in names) {
    var firstLetter = names[prop].charAt(0);

    if (firstLetter == 'J' || firstLetter == 'j') {
      byeSpeaker.speak(names[prop]);
    } else {
      helloSpeaker.speak(names[prop]);
    }
  }
})(window);
