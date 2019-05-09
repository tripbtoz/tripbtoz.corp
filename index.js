var width = $(window).width()
var height = $(window).height()
$(window).on('resize', function () {
  width = $(window).width()
  height = $(window).height()
})
console.log(width, height)
$(window).ready(function () {
  $(".menu").click(function(){
    var target = $(this).attr('data-target')
    var scrollTop = $("#"+target).offset().top
    if (window.width < 768) {
      scrollTop -= 100
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

  var hotelServiceHeight = $("#hotel-service").height()
  var visionHeight = $("#vision").height()
  var definitionHeight = $("#definition").height()
  var valueHeight = $("#value").height()
  var careerHeight = $("#career").height()
  var joinHeight = $("#join").height()
  var contactHeight = $("#contact").height()

  // var ambitionBottom = $("#ambition").offset().top + $('#ambition').height()
  // var hotelServiceBottom = $("#hotel-service").offset().top + $("#hotel-service").height()
  // var visionBottom = $("#vision").offset().top + $("#vision").height()
  // var definitionBottom = $("#definition").offset().top + $("#definition").height()
  // var valueBottom = $("#value").offset().top + $("#value").height()
  // var careerBottom = $("#career").offset().top + $("#career").height()
  // var joinBottom = $("#join").offset().top + $("#join").height()
  // var contactBottom = $("#contact").offset().top + $('#contact').height()
  
  
  // testVisibleAndShow(windowScrollTop, ambitionTop, "#ambition")
  testVisibleAndShowForHotelService(windowScrollTop, hotelServiceTop, hotelServiceHeight,  "#hotel-service")
  testVisibleAndShow(windowScrollTop, visionTop, visionHeight, "#vision")
  testVisibleAndShow(windowScrollTop, definitionTop, definitionHeight, "#definition")
  testVisibleAndShow(windowScrollTop, valueTop, valueHeight, "#value")
  testVisibleAndShow(windowScrollTop, careerTop, careerHeight, "#career")
  testVisibleAndShow(windowScrollTop, joinTop, joinHeight, "#join")
  testVisibleAndShow(windowScrollTop, contactTop, contactHeight, "#contact")
})
function testVisibleAndShowForHotelService (windowScrollTop, itemTop, itemHeight, selector) {
  // 화면의 최상단 => windowScrollTop
  // 화면의 최하단 => windowScrollTop + height
  if (windowScrollTop  < itemTop && itemTop  < windowScrollTop + height - 150) {
    $(selector).addClass('active')
  } else {
    $(selector).removeClass('active')
  }
}
function testVisibleAndShow (windowScrollTop, itemTop, itemHeight, selector) {
  // 화면의 최상단 => windowScrollTop
  // 화면의 최하단 => windowScrollTop + height
  if (windowScrollTop  < itemTop && itemTop + itemHeight - 150 < windowScrollTop + height - 150) {
    $(selector).addClass('active')
  } else {
    $(selector).removeClass('active')
  }
}