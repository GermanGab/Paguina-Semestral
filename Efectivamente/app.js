$(document).ready(function(){
    $('#fadeOut').click(function(){
      $('#caja').fadeOut(3000, function(){
        $('#fadeOut').text('Fin del efecto')
      });
    })
    
    $('#fadeIn').click(function(){
      $('#caja').fadeIn(3000);
    })
    $('#fadeTog').click(function(){
      $('#caja').fadeToggle(1000);
    })
    $('#slideDown').click(function(){
      $('#caja').slideDown(1000);
    })
    $('#slideUp').click(function(){
      $('#caja').slideUp(1000);
    })
    $('#slideTog').click(function(){
      $('#caja').slideToggle(1000);
    })
});