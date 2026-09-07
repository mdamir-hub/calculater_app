
var display = document.getElementById("display");

var buttons = document.querySelectorAll("button");
console.log(buttons)
console.log("end")
buttons.forEach(function(button) {
  console.log(buttons)
    button.onclick = function() {

        var value = button.innerText;

        if (value == "AC") {
            display.innerText = "";
        }

        else if (value == "=") {
            display.innerText = eval(display.innerText);
        }

        else {
            display.innerText = display.innerText + value;
        }

    };

});