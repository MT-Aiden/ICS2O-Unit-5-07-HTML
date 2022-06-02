// Aiden McLeod
// ICS2O-Unit5-07-HTML
// May 10 2022

'use strict'
/**
 * Adds the integer the user chose added up to all the numbers from one to the integer
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit5-07-HTML/sw.js", {
    scope: "/ICS2O-Unit5-07-HTML/",
  })
}

/**
 * Alerts "Hello, World!"
 */
function onButtonClick() {
  const integer = document.getElementById("integer").value
  var text = "1"
  var counter = 1
  var answer

  if (integer > 0) {
    answer = 1
    for (let count = 1; count < integer; count++) {
      counter++
      text = text + " + " + counter
      answer = answer + counter
    }
    document.getElementById("answer").innerHTML = "<h5>" + answer + "</h5><br><h5>is the answer of " + text + "</h5>"
  } else if (integer == 0) {
    answer = 0
    text = "nothing."
    document.getElementById("answer").innerHTML = "<h5>" + answer + "</h5><br><h5>is the answer of " + text + "</h5>"
  } else {
    document.getElementById("answer").innerHTML = "<h5>Error: This integer is negative.</h5>"
  }
}
