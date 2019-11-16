$(document).ready(function(){
  console.log("ready");

  $('.one').click(function(){
    $('.lab').toggleClass('align-left')
    });

  $('.two').click(function(){
    $('.corgi').toggleClass('align-right')
  });

  $('.three').click(function(){
      $('.beags').toggleClass('up')
  });
});
