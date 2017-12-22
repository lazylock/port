//BODY FADE

  $(function() {
      $('body').removeClass('fade-out');
  });

//STICKY NAV

  var mn = $(".main-nav");
      mns = "main-nav-scrolled";
      hero = $('.hero').height();

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

  $(window).resize(function() {

    setTimeout(function() {
        if ($('header').css('z-index') == '-2' || $('header').css('z-index') == '-3') {
            toggleScrolled(4);
        } else {
            toggleScrolled(6);
        }
    }, 500);

  });

  function toggleScrolled(input){

    hero = $('.hero').height();
    if( $(window).scrollTop() > hero - em(input) ) {
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
    $('.entry').fadeTo(10,0);
    $('.entry').filter(':not(.'+tag+')').delay(500).fadeOut().hide();
    $('.entry').filter('.'+tag).delay(1000).fadeTo('fast',1);

    var goTo = $(this).children().first().attr("href");

    $('.grid').masonry({
       itemSelector: '.grid-item',
       columnWidth: '.grid-sizer',
       gutter: '.gutter-sizer',
       percentPosition: true
    });

    setTimeout(function(){
      window.location = goTo;
    },1000);

    $('.filter > a').css('color', 'black');
    $('.filter > .'+tag).css('color', 'rgba(255, 187, 41, 1)');
  });

  $('.all').click(function() {
    $('.entry').fadeTo(100,0);
    $('.entry').delay(1000).show().fadeTo('fast',1);

  $('.grid').masonry({
       itemSelector: '.grid-item',
       columnWidth: '.grid-sizer',
       gutter: '.gutter-sizer',
       percentPosition: true
    });

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

  $('.mobile-nav .all').click(function(){
    $(".mobile-nav").animate({width:'toggle'},350);
  });

//SMOOTH SCROLL
  $('.return a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
  });