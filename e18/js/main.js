$(document).ready(function() {
    // run function on initial page load
	animalGuess();
});

function animalGuess() {
	var animalArray = ["Dog","Cat","Kangaroo","Skunk","Hippopotamus","Jackrabbit","Fox","Manatee","Swordfish","Crab","Alligator","Cow","Octopus","Turtle","Pig","Sloth","Tarantula","Iguana","Starfish","Possum","Sparrow","Grizzly Bear","Zebra","Goat","Penguin","Ostrich","Alpaca","Goose","Porcupine","Monkey","Bumblebee","Monarch Butterfly","Praying Mantis","Racoon","Polar Bear"];
	var randomNumber = Math.floor(Math.random() * animalArray.length);
	var stripped = animalArray[randomNumber].toLowerCase();
	console.log(animalArray[randomNumber]);
	console.log(stripped);
	$('#submit').click(function() {
		var input = $('input').val();
		var guess = input.toLowerCase();
		console.log(guess);
		if (guess == stripped || guess == animalArray[randomNumber]) {
			$('h1').text('Correct!');
			$('input').val('');
			$('.button p').text('Play Again!');
			$('#submit').click(function() {
				location.reload(true);
			});
		} else  {
			$('h1').text('Incorrect!');
			$('input').val('');
			$('.button p').text('Play Again?');
			$('#submit').click(function() {
				location.reload(true);
			});
		}
	});
	$(document).keypress(function(e){
			if(e.which == 13){ //Enter key pressed
					$('#submit').click();//Trigger button click event
			}
	});
}
