//MAGELLAN

  var indexOffset = -em(2);
  var projectOffset = em(16)
  var halfOffset = -em(2)

  $(document).ready(function() {

    if ($('header').css('z-index') == '-3'){
        projectOffset = em(6);
    } else if ($('header').css('z-index') == '-2'){
        projectOffset = em(12);
    }

    $('.magellan-index').attr('data-offset', indexOffset);
    $('.magellan-project').attr('data-offset', projectOffset);
    $('.magellan-half').attr('data-offset', halfOffset);

    $(document).foundation();
  });

//BODY FADE

  $(function() {
      $('body').removeClass('fade-out');
  });

//STICKY NAV

  var mn = $(".main-nav");
      mns = "main-nav-scrolled";
      hdr = $('header').height();

  $(document).ready(function() {

    if($('header').css('z-index') == '-2' || $('header').css('z-index') == '-3'){
      toggleScrolled(4);
    } else {
      toggleScrolled(6);
    }

  });

  $(window).scroll(function() {

    if($('header').css('z-index') == '-2' || $('header').css('z-index') == '-3'){
      toggleScrolled(4);
    } else {
      toggleScrolled(6);
    }

  });

  function toggleScrolled(input){

    hdr = $('header').height();
    if( $(window).scrollTop() > hdr - em(input) ) {
      mn.addClass(mns);
    } else {
      mn.removeClass(mns);
    }
  }

  function em(input) {
      var emSize = parseFloat($("body").css("font-size"));
      return (emSize * input);
  }

  function px(input) {
      var emSize = parseFloat($("body").css("font-size"));
      return (Math.floor(input / emSize));
  }

//CONTENT

  $('.filter').click(function() {
    var tag = $(this).children().first().attr('class');
    $('.content').parent().fadeTo(10,0);
    $('.content').filter(':not(.'+tag+')').parent().delay(500).fadeOut();
    $('.content').filter('.'+tag).parent().delay(1000).fadeTo('fast',1);

    $('.filter > a').css('color', 'black');
    $('.filter > .'+tag).css('color', 'rgba(255, 187, 41, 1)');
  });

  $('.all').click(function() {
    $('.content').parent().fadeTo(100,0);
    $('.content').parent().delay(1000).fadeTo('fast',1);
    $('.filter > a').css('color', 'black');
  });

  $('.all').click(function (e) {
      e.preventDefault();                  
      var goTo = $(this).children().first().attr("href");

      setTimeout(function(){
           window.location = goTo;
      },1000);       
  }); 

//MOBILE NAV

  $('.hamburger').click(function(){
    $(".mobile-nav").animate({width:'toggle'},350);
  });

  $('.x').click(function(){
    $(this).parent().animate({width:'toggle'},350);
  });

  $('.categories').click(function(){
    $(".mobile-nav").fadeOut();
    $(".mobile-tags").animate({width:'toggle'},350);
  });

  $('.mobile-tags a').click(function(){
    $(".mobile-tags").animate({width:'toggle'},350);
  });

  $('.all').click(function(){
    $(".mobile-nav").animate({width:'toggle'},350);
  });