$( document ).ready(function() {


  // Приветственная анимация
  $( ".first-video-text " ).fadeOut(0);
  $( ".main-video-text " ).fadeOut(0);
  $( ".is_overlay" ).addClass('js_overlay-on');
  $( ".first-video-text ").delay(1200).fadeIn(1000);
  $( ".first-video-text ").delay(400).fadeOut(1000);
  $( ".main-video-text ").delay(3600).fadeIn(1000);
  $( "#myBtn").delay(3600).fadeIn(1000);



  // Модальное окно
  var modal = document.getElementById("myModal");
  var btn = document.getElementById("myBtn");
  var span = document.getElementsByClassName("close")[0];

  btn.onclick = function () {
    $('#myModal').fadeIn(400);
  }
  span.onclick = function() {
    $('#myModal').fadeOut(400);
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      $('#myModal').fadeOut(400);
    }
  }








// Запрогал инпут на Имя

  $( "#username" ).focus(function() {
  $( "#username-name-label" ).addClass('js_name-label');
  $( "#username-line-label" ).addClass('js_line-label');
  });

  $( "#username" ).focusout(function() {
  $( "#username-name-label" ).removeClass('js_name-label');
  $( "#username-line-label" ).removeClass('js_line-label');
  });

  $('#username').change(function(){
    $( "#username" ).focusout(function() {
    $( "#username-name-label" ).addClass('js_name-label');
    $( "#username-line-label" ).addClass('js_line-label');
    });

    tmpval = $(this).val();

    if(tmpval == '') {
        $( "#username-name-label" ).removeClass('js_name-label');
        $( "#username-line-label" ).removeClass('js_line-label');
        $( "#username" ).focusout(function() {
          $( "#username-name-label" ).removeClass('js_name-label');
          $( "#username-line-label" ).removeClass('js_line-label');
        });
    }
      else {
        $( "#username-name-label" ).addClass('js_name-label');
        $( "#username-line-label" ).addClass('js_line-label');
        $( "#username" ).focusout(function() {
          $( "#username-name-label" ).addClass('js_name-label');
          $( "#username-line-label" ).removeClass('js_line-label');
        });
    }
  });


  // Запрогал инпут на Email

  $( "#e-mail" ).focus(function() {
  $( "#e-mail-name-label" ).addClass('js_name-label');
  $( "#e-mail-line-label" ).addClass('js_line-label');
  });

  $( "#e-mail" ).focusout(function() {
  $( "#e-mail-name-label" ).removeClass('js_name-label');
  $( "#e-mail-line-label" ).removeClass('js_line-label');
  });

  $('#e-mail').change(function(){

    $( "#e-mail" ).focusout(function() {
    $( "#e-mail-name-label" ).addClass('js_name-label');
    $( "#e-mail-line-label" ).addClass('js_line-label');
    });

    tmpval = $(this).val();

    if(tmpval == '') {
        $( "#e-mail-name-label" ).removeClass('js_name-label');
        $( "#e-mail-line-label" ).removeClass('js_line-label');
        $( "#e-mail" ).focusout(function() {
          $( "#e-mail-name-label" ).removeClass('js_name-label');
          $( "#e-mail-line-label" ).removeClass('js_line-label');
        });
    }
      else {
        $( "#e-mail-name-label" ).addClass('js_name-label');
        $( "#e-mail-line-label" ).addClass('js_line-label');
        $( "#e-mail" ).focusout(function() {
          $( "#e-mail-name-label" ).addClass('js_name-label');
          $( "#e-mail-line-label" ).removeClass('js_line-label');
        });
    }
  });

  // Запрогал инпут на Телефон

  $( "#phone" ).focus(function() {
  $( "#phone-name-label" ).addClass('js_name-label');
  $( "#phone-line-label" ).addClass('js_line-label');
  });

  $( "#phone" ).focusout(function() {
  $( "#phone-name-label" ).removeClass('js_name-label');
  $( "#phone-line-label" ).removeClass('js_line-label');
  });

  $('#phone').change(function(){

    $( "#phone" ).focusout(function() {
    $( "#phone-name-label" ).addClass('js_name-label');
    $( "#phone-line-label" ).addClass('js_line-label');
    });

    tmpval = $(this).val();

    if(tmpval == '') {
        $( "#phone-name-label" ).removeClass('js_name-label');
        $( "#phone-line-label" ).removeClass('js_line-label');
        $( "#phone" ).focusout(function() {
          $( "#phone-name-label" ).removeClass('js_name-label');
          $( "#phone-line-label" ).removeClass('js_line-label');
        });
    }
      else {
        $( "#phone-name-label" ).addClass('js_name-label');
        $( "#phone-line-label" ).addClass('js_line-label');
        $( "#phone" ).focusout(function() {
          $( "#phone-name-label" ).addClass('js_name-label');
          $( "#phone-line-label" ).removeClass('js_line-label');
        });
    }
  });

  // Запрогал инпут на Текст

  $( "#about-project" ).focus(function() {
  $( "#about-project-name-label" ).addClass('js_name-label');
  $( "#about-project-line-label" ).addClass('js_line-label');
  });

  $( "#about-project" ).focusout(function() {
  $( "#about-project-name-label" ).removeClass('js_name-label');
  $( "#about-project-line-label" ).removeClass('js_line-label');
  });

  $('#about-project').change(function(){

    $( "#about-project" ).focusout(function() {
    $( "#about-project-name-label" ).addClass('js_name-label');
    $( "#about-project-line-label" ).addClass('js_line-label');
    });

    tmpval = $(this).val();

    if(tmpval == '') {
        $( "#about-project-name-label" ).removeClass('js_name-label');
        $( "#about-project-line-label" ).removeClass('js_line-label');
        $( "#about-project" ).focusout(function() {
          $( "#about-project-name-label" ).removeClass('js_name-label');
          $( "#about-project-line-label" ).removeClass('js_line-label');
        });
    }
      else {
        $( "#about-project-name-label" ).addClass('js_name-label');
        $( "#about-project-line-label" ).addClass('js_line-label');
        $( "#about-project" ).focusout(function() {
          $( "#about-project-name-label" ).addClass('js_name-label');
          $( "#about-project-line-label" ).removeClass('js_line-label');
        });
    }
  });
});



// Программирую крутой ховер по кнопкам сортировки фильтра

  $( ".filter-button" ).mouseenter(function() {
    $(this).find( ".side-c" ).addClass('js-on');
    $(this).find( ".side-a" ).addClass('js-on').delay(300).queue(function(next){
      $(this).parent('div').find( ".side-b" ).addClass('js-on');
      $(this).parent('div').find( ".side-d" ).addClass('js-on');
      // дубль для защиты от спама по кнопке
      $(this).parent('div').find( ".side-a" ).addClass('js-on');
      $(this).parent('div').find( ".side-c" ).addClass('js-on');
       next();
    });
  });

    $( ".filter-button" ).mouseleave(function() {
    $(this).find( ".side-d" ).removeClass('js-on');
    $(this).find( ".side-b" ).removeClass('js-on').delay(300).queue(function(next){
      $(this).parent('div').find( ".side-a" ).removeClass('js-on');
      $(this).parent('div').find( ".side-c" ).removeClass('js-on');
      // дубль для защиты от спама по кнопке
      $(this).parent('div').find( ".side-d" ).removeClass('js-on');
      $(this).parent('div').find( ".side-b" ).removeClass('js-on');
       next();
    });
  });


// Клик по выбору
  $( ".filter-button" ).on('click', function(e) {
    $(this).parent('div').find( ".filter-button" ).find( ".side-a" ).removeClass('js-tap');
    $(this).parent('div').find( ".filter-button" ).find( ".side-b" ).removeClass('js-tap');
    $(this).parent('div').find( ".filter-button" ).find( ".side-c" ).removeClass('js-tap');
    $(this).parent('div').find( ".filter-button" ).find( ".side-d" ).removeClass('js-tap');

    $(this).find( ".side-a" ).addClass('js-tap');
    $(this).find( ".side-b" ).addClass('js-tap');
    $(this).find( ".side-c" ).addClass('js-tap');
    $(this).find( ".side-d" ).addClass('js-tap');
  });


// Сортирую
  $( "#js-filter-button__all" ).on('click', function(e) {

    // Я понимаю, что давать нумерованные ID моветон,
    // но для меня все эти темы просто рыба типа lorem,
    // поэтому решил не расходовать понапрасно фантазию.
    $("#item8").css({'margin-right': '20px'});
    $("#item6").css({'margin-right': '0px'});

    $("#item1").show(400);
    $("#item2").show(400);
    $("#item3").show(400);
    $("#item4").show(400);
    $("#item5").show(400);
    $("#item6").show(400);
    $("#item7").show(400);
    $("#item8").show(400);
    $("#item9").show(400);
    $("#item10").show(400);


  });

  $( "#js-filter-button__banks" ).on('click', function(e) {
    $("#item6").css({'margin-right': '20px'});
    $("#item8").css({'margin-right': '20px'});

    $("#item1").hide(400);
    $("#item2").hide(400);
    $("#item3").hide(400);
    $("#item4").hide(400);
    $("#item5").show(400);
    $("#item6").show(400);
    $("#item7").show(400);
    $("#item8").hide(400);
    $("#item9").hide(400);
    $("#item10").hide(400);
  });

  $( "#js-filter-button__credit" ).on('click', function(e) {
    $("#item6").css({'margin-right': '20px'});
    $("#item8").css({'margin-right': '20px'});
    $("#item8").css({'margin-right': '20px'});

    $("#item1").hide(400);
    $("#item2").show(400);
    $("#item3").hide(400);
    $("#item4").hide(400);
    $("#item5").hide(400);
    $("#item6").show(400);
    $("#item7").hide(400);
    $("#item8").hide(400);
    $("#item9").hide(400);
    $("#item10").show(400);
  });

  $( "#js-filter-button__internet" ).on('click', function(e) {
    $("#item6").css({'margin-right': '20px'});
    $("#item8").css({'margin-right': '0px'});

    $("#item1").show(400);
    $("#item2").hide(400);
    $("#item3").show(400);
    $("#item4").show(400);
    $("#item5").show(400);
    $("#item6").show(400);
    $("#item7").hide(400);
    $("#item8").show(400);
    $("#item9").show(400);
    $("#item10").show(400);
  });

  $( "#js-filter-button__fintech" ).on('click', function(e) {
    $("#item6").css({'margin-right': '20px'});
    $("#item8").css({'margin-right': '20px'});

    $("#item1").hide(400);
    $("#item2").hide(400);
    $("#item3").hide(400);
    $("#item4").show(400);
    $("#item5").show(400);
    $("#item6").show(400);
    $("#item7").hide(400);
    $("#item8").show(400);
    $("#item9").hide(400);
    $("#item10").hide(400);
  });
