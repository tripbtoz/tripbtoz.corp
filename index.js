$(".menu").click(function(){
  var target = $(this).attr('data-target')
  var scrollTop = $("#"+target).offset().top
  $('html,body').animate({
    'scrollTop': scrollTop
  }, 500)
    // $(window).scrollTop(scrollTop)
})
$('.button').click(function(){
  var button = $(this)
  var target = button.attr('data-modal-target');
  $("#modal-content > *").hide();
  $("#"+target).show();
  $("#modal").addClass('show')
  $('body').css({'overflow': 'hidden'})
})
$('#modal-close-btn').click(function () {
  $('body').css({'overflow': 'auto'})
  $("#modal").removeClass('show')
})