$(document).ready(function() {
   var number = Math.floor(Math.random() * 25);
   console.log(number);
   var guesses = '';
   $('#enter').click(function() {
     var guess = $('input').val();
     guesses += digit + ' ';
     $('.guesses p').text(guesses);
     console.log(digit);
     if (number == digit) {
       $('h1').text(number + 'Correct!');
       $('input').val('');
     } else if (number < digit) {
       $('h1').text(digit + 'Too high');
       $('input').val('')
     } else {
       $('h1').text(digit + 'Too low');
       $('input').val('');
     }
   });
   $(document).keypress(function(e){
       if(e.which == 9){ //Enter key pressed
           $('#submit').click();//Trigger button click event
       }
   });
});
