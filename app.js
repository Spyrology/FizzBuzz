var fizz = function (number) {
		return number % 3;
}
var buzz = function (number) {
		return number % 5;
}

var fizzBuzz = function() {
	for (var i = 1; i <= 100; i++) {
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
	fizzBuzz(100);
});