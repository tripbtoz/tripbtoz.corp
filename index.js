var width = $(window).width()
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
  console.log(page)
  
  if (to === 'prev' && page > 0) {
    console.log('aaaa')
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
  var threshold = 200
  var windowScrollTop = $(window).scrollTop()
  
  
  var ambitionTop = $("#ambition").offset().top
  var hotelServiceTop = $("#hotel-service").offset().top
  var visionTop = $("#vision").offset().top
  var definitionTop = $("#definition").offset().top
  var valueTop = $("#value").offset().top
  var careerTop = $("#career").offset().top
  var joinTop = $("#join").offset().top
  var contactTop = $("#contact").offset().top

  var ambitionBottom = $("#ambition").offset().top + $('#ambition').height()
  var hotelServiceBottom = $("#hotel-service").offset().top + $("#hotel-service").height()
  var visionBottom = $("#vision").offset().top + $("#vision").height()
  var definitionBottom = $("#definition").offset().top + $("#definition").height()
  var valueBottom = $("#value").offset().top + $("#value").height()
  var careerBottom = $("#career").offset().top + $("#career").height()
  var joinBottom = $("#join").offset().top + $("#join").height()
  var contactBottom = $("#contact").offset().top + $('#contact').height()
  
  
  if (ambitionTop - threshold < windowScrollTop && windowScrollTop < ambitionBottom + threshold){
    $('#ambition').addClass('active')
  } else {
    $('#ambition').removeClass('active')
  }

  if (hotelServiceTop - threshold < windowScrollTop && windowScrollTop < hotelServiceBottom + threshold){
    $('#hotel-service').addClass('active')
  } else {
    $('#hotel-service').removeClass('active')
  }

  
  if (visionTop - threshold < windowScrollTop && windowScrollTop < visionBottom + threshold){
    $('#vision').addClass('active')
  } else {
    $('#vision').removeClass('active')
  }

  if (definitionTop - threshold < windowScrollTop && windowScrollTop < definitionBottom + threshold){
    $('#definition').addClass('active')
  } else {
    $('#definition').removeClass('active')
  }

  if (valueTop - threshold < windowScrollTop && windowScrollTop < valueBottom + threshold){
    $('#value').addClass('active')
  } else {
    $('#value').removeClass('active')
  }

  if (careerTop - threshold < windowScrollTop && windowScrollTop < careerBottom + threshold){
    $('#career').addClass('active')
  } else {
    $('#career').removeClass('active')
  }
  
  if (joinTop - threshold < windowScrollTop && windowScrollTop < joinBottom + threshold){
    $('#join').addClass('active')
  } else {
    $('#join').removeClass('active')
  }
  
  if (contactTop - threshold < windowScrollTop && windowScrollTop < contactBottom + threshold){
    $('#contact').addClass('active')
  } else {
    $('#contact').removeClass('active')
  }

})
