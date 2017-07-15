$(document).ready(function() {
  var sets = ["clubs", "diamond", "hearts", "spades"];
  sets.forEach(function(set) {

    var ranks = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king"];
    ranks.forEach(function(rank) {


      $(".output").append("<li>" + rank + " " + "of" + " " +
        set + "</li>");
    });
  });

});
