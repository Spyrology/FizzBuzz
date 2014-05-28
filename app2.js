var fizz = function (number) {
		return number % 3;
}
var buzz = function (number) {
		return number % 5;
}

var fizzBuzz = function() {
	var userInput = $("input").val();
	if (userInput.length < 0 || userInput % 1 !== 0 || userInput <= 0) {
		alert("Please enter a numerical value greater than 0");
	}
	for (var i = 1; i <= userInput; i++) {
		if ((fizz(i) === 0) && (buzz(i) === 0)) {
			$("body").append($("<p>FizzBuzz</p>")); 
		}  
		else if (fizz(i) === 0) {
			$("body").append($("<p>Fizz</p>"));
		}
		else if (buzz(i) === 0) {
			$("body").append($("<p>Buzz</p>"));
		}
		else {
			$("body").append($("<p>" + i + "</p>"));
		}
	}
};

$(document).ready(function() {
	$("input").keydown(function(e) {
		if(e.keyCode == 13) {
			$("body").find("p").remove();
			fizzBuzz();
		}
	});
});