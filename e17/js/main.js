$(document).ready(function(){
  console.log('ready');

  $('.one').click(function(){
    $('.one').toggleClass('align-left');
  });

  $('.two').click(function(){
    $('.two').toggleClass('align-right');
  });

  $('.three').click(function(){
      $('.three').toggleClass('uppercase');
  });

  $('.four').click(function(){
      $('.four').toggleClass('grow');
  });

  $('.five').click(function(){
      $('.five').toggleClass('color');
  });
});
