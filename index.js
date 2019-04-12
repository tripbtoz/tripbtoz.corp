var width = $(window).width()
var height = $(window).height()
$(".menu").click(function(){
  var target = $(this).attr('data-target')
  var scrollTop = $("#"+target).offset().top
  if (window.width < 768) {
    scrollTop -= 72
  } else {
    scrollTop -= 92
  }
  $('html,body').animate({
    'scrollTop': scrollTop
  }, 500)
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
$('.modal-value-button').click(function () {
  var button = $(this)
  var to = button.attr('data-value')
  var page = $('#modal-value-page').val()
  page = parseInt(page)
  if (to === 'prev' && page > 0) {
    page -= 1
  } else if (to === 'next' && page < 2) {
    page += 1
  }
  $("#modal-value-page-ind").html(page+1)
  $('#modal-value-page').val(page)
  var marginLeftValue = (- page * 100)+'%'
  $('#modal-value-content').css({marginLeft: marginLeftValue})
})
$(window).on('scroll', function () {
  
  var windowScrollTop = $(window).scrollTop()
  
  
  var ambitionTop = $("#ambition").offset().top
  var hotelServiceTop = $("#hotel-service").offset().top
  var visionTop = $("#vision").offset().top
  var definitionTop = $("#definition").offset().top
  var valueTop = $("#value").offset().top
  var careerTop = $("#career").offset().top
  var joinTop = $("#join").offset().top
  var contactTop = $("#contact").offset().top

  // var ambitionBottom = $("#ambition").offset().top + $('#ambition').height()
  // var hotelServiceBottom = $("#hotel-service").offset().top + $("#hotel-service").height()
  // var visionBottom = $("#vision").offset().top + $("#vision").height()
  // var definitionBottom = $("#definition").offset().top + $("#definition").height()
  // var valueBottom = $("#value").offset().top + $("#value").height()
  // var careerBottom = $("#career").offset().top + $("#career").height()
  // var joinBottom = $("#join").offset().top + $("#join").height()
  // var contactBottom = $("#contact").offset().top + $('#contact').height()
  
  
  // testVisibleAndShow(windowScrollTop, ambitionTop, "#ambition")
  testVisibleAndShow(windowScrollTop, hotelServiceTop, "#hotel-service")
  testVisibleAndShow(windowScrollTop, visionTop, "#vision")
  testVisibleAndShow(windowScrollTop, definitionTop, "#definition")
  testVisibleAndShow(windowScrollTop, valueTop, "#value")
  testVisibleAndShow(windowScrollTop, careerTop, "#career")
  testVisibleAndShow(windowScrollTop, joinTop, "#join")
  testVisibleAndShow(windowScrollTop, contactTop, "#contact")
})
function testVisibleAndShow (windowScrollTop, itemTop, selector) {
  if (windowScrollTop < itemTop - 150 && itemTop + 150 < windowScrollTop + height ) {
    $(selector).addClass('active')
  } else {
    $(selector).removeClass('active')
  }
}