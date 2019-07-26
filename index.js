var width = $(window).width()
var height = $(window).height()

$(window).on('resize', function () {
  if (
    width > 768 && $(window).width() < 768 || // 모바일로 사이즈 바뀜
    (width < 768 || width > 1024) && $(window).width() > 768 && $(window).width() < 1024 || // 태블릿으로 바뀜
    width < 1024 && $(window).width() >= 1024 // 데스크탑 사이즈 바뀜
  ) {
    window.location.reload()
  } 
  width = $(window).width()
  height = $(window).height()
  
})
// alert('a2')

// $(window).on('scroll', onScroll)
var scrollNow = 0
var scrollNowId = 'ambition'
var isScrolling = true
var isNowTouching = false
// function setupScroll () {
//   $('.paging-section').each(function () {
//     // 아이디별로 위치를 지정한다
//     var id = $(this).attr('id')
//     var height = $(this).offset().top
//     console.log(height)
//     sectionHeight[id] = height
//   })
// }


// function onScroll () {
//   if (isScrolling) {
//      return false
//   }
  
//   var windowScrollTop = $(window).scrollTop()
//   console.log('window scroll ' + windowScrollTop)
//   var THRESH_HOLD = width < 768 ? 5 : 5
//   if (windowScrollTop > scrollNow + THRESH_HOLD) {
//     console.log('scroll')
//     scrollNext()
//   } else if (windowScrollTop < scrollNow - THRESH_HOLD) {
//     scrollPrev()
//   }
// }
// function scrollPrev () {
//   if (isNowTouching) {
//     return false
//   }
//   console.log('isScrolling? : ' + isScrolling)
//   if (isScrolling) {
//     return false
//   }
//   var prev = width < 768 ?  $('#' + scrollNowId).attr('data-mobile-prev') || $('#' + scrollNowId).attr('data-prev') : $('#' + scrollNowId).attr('data-prev')
//   if (!prev) {
//     return false
//   }
//   isScrolling = true
//   var prevTop = $('#' + prev).offset().top
//   var scrollTop = prevTop
//   $('html,body').animate({
//     'scrollTop': scrollTop
//   }, 500, function () {
//     isScrolling = false
//     scrollNow = scrollTop
//     scrollNowId = prev
//   })
// }
// function scrollNext () {
//   if (isNowTouching) {
//     return false
//   }
//   console.log('isScrolling? : ' + isScrolling)
//   if (isScrolling) {
//     return false
//   }
//   var next = width < 768 ? ($('#' + scrollNowId).attr('data-mobile-next') || $('#' + scrollNowId).attr('data-next')) : $('#' + scrollNowId).attr('data-next')
//   console.log('next : ' + next)
//   if (!next) {
//     return false
//   }

//   isScrolling = true
  
//   var nextTop = $('#' + next).offset().top
//   var scrollTop = nextTop
//   console.log('scroll-top : ' + scrollTop)
//   $('html,body').animate({
//     'scrollTop': scrollTop
//   }, 500, function () {
//     isScrolling = false
//     scrollNow = scrollTop
//     scrollNowId = next
//   })
// }




function openAside () {
  window.myFullpage.setAllowScrolling(false);
  window.myFullpage.setKeyboardScrolling(false);
  $('body').css({overflow: 'hidden'})
  $('aside').addClass('active')
}
function closeAside () {
  window.myFullpage.setAllowScrolling(true);
  window.myFullpage.setKeyboardScrolling(true);
  $('aside').removeClass('active')
  $('body').css({overflow: 'auto'})
}
// function setSection () {
//   console.log(width)
//   var pagings = width < 760 ? $('.section, .mobile-section') : width < 1024 ? $('.section') : $('.section, .pc-section')
//   pagings.each(function () {
//     console.log($(this))
//     $(this).css({height: $(window).height() * 1.2})
    
//   })
//   isScrolling = false
// }
function clickApplyButton () {
  window.location.href = 'https://www.rocketpunch.com/companies/tripbtoz/jobs'
}
$(window).ready(function () {
  // $("#modal").on('scroll', function () {
  //   e.preventDefault()
  //   e.stopPropagation()
  // })
  $('#career-button').click(clickApplyButton)
  $('[data-big-image]').each(function () {
    var bigImageSrc = $(this).data('big-image')
    var id = $(this).attr('id')
    var img = new Image()
    img.src = bigImageSrc
    img.onload = function () {
      $('#'+id).css({'backgroundImage': 'url("' + bigImageSrc + '")'})
    }
  })
  width = $(window).width()
  height = $(window).height()
  if (width < 768) {
    $('.mobile-section').addClass('section')
  } else if (width < 1024) {
    $('.tablet-section').addClass('section')
  } else {
    $('.pc-section').addClass('section')
  }
  var anchors = []
  if (width < 768) {
    anchors = ['firstPage', 'secondPage', "3rdPage", "4thPage", '5thPage', '6thPage',  '7thPage', '8thPage', '9thPage','10thPage', '11thPage']
  } else if (width < 1024) {
    anchors = ['firstPage', 'secondPage', "3rdPage", "4thPage", '5thPage', '6thPage',  '7thPage', '8thPage', '9thPage','10thPage', '11thPage']
  }
  window.myFullpage = new fullpage('#fullpage', {
    //Navigation
    licenseKey: '33509323-B215456D-A8C38CEC-9E69E47C',
    // lockAnchors: false,
    anchors:[ 'firstPage', 'secondPage', "3rdPage", "4thPage", '5thPage', '6thPage',  '7thPage'],
    menu: '#header-menu-wrap',
    navigation: true,
    // navigationPosition: 'right',
    // navigationTooltips: ['firstSlide', 'secondSlide'],
    showActiveTooltip: true,
    slidesNavigation: true,
    normalScrollElements: '#modal-vision-content',
    // slidesNavigation: false,
    // slidesNavPosition: 'bottom',
  
    // //Scrolling
    // css3: true,
    // scrollingSpeed: 700,
    // autoScrolling: true,
    // fitToSection: true,
    // fitToSectionDelay: 1000,
    // scrollBar: false,
    // easing: 'easeInOutCubic',
    // easingcss3: 'ease',
    // loopBottom: false,
    // loopTop: false,
    // loopHorizontal: true,
    // continuousVertical: false,
    // continuousHorizontal: false,
    // scrollHorizontally: false,
    // interlockedSlides: false,
    // dragAndMove: false,
    // offsetSections: false,
    // resetSliders: false,
    // fadingEffect: false,
    // normalScrollElements: '#element1, .element2',
    // scrollOverflow: false,
    // scrollOverflowReset: false,
    // scrollOverflowOptions: null,
    // touchSensitivity: 15,
    // normalScrollElementTouchThreshold: 5,
    // bigSectionsDestination: null,
  
    // //Accessibility
    // keyboardScrolling: true,
    // animateAnchor: true,
    // recordHistory: true,
  
    // //Design
    // controlArrows: true,
    // verticalCentered: true,
    // sectionsColor : ['#ccc', '#fff'],
    // paddingTop: '3em',
    // paddingBottom: '10px',
    // fixedElements: '#header, .footer',
    // responsiveWidth: 0,
    // responsiveHeight: 0,
    // responsiveSlides: false,
    // parallax: false,
    // parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
    // cards: false,
    // cardsOptions: {perspective: 100, fadeContent: true, fadeBackground: true},
  
    //Custom selectors
    sectionSelector: '.section',
    slideSelector: '.slide',
    navigation: true,
    // lazyLoading: true,
  
    // //events
    // onLeave: function(origin, destination, direction){},
    // afterLoad: function(origin, destination, direction){},
    // afterRender: function(){},
    // afterResize: function(width, height){},
    // afterResponsive: function(isResponsive){},
    // afterSlideLoad: function(section, origin, destination, direction){},
    onLeave: function (origin, destination, direction){
      var menues = $('#fp-nav ul li a span, #menu-line, .fp-slidesNav ul li a span')
      if (destination.index === 1 || destination.index === 3 || destination.index === 5) {
        menues.addClass('black')
      } else {
        menues.removeClass('black')
      }
    }
  });
  
  setTimeout(function () {
    $('#loading-image').hide()
  }, 2000)
  // $('body').on('touchstart', function () {
  //   isNowTouching = true
  // })
  // $('body').on('touchend', function () {
  //   isNowTouching = false
  //   onScroll()
  // })
  $('#aside-opener').click(openAside)
  $('#aside').click(function (e) {
    e.preventDefault()
    e.stopPropagation()
  })
  $('.aside-item').click(function () {
    closeAside()
    var scroll = $(this).data('scroll')
    var scrollValue = 0
    if (scroll.includes('second')) {
      scrollValue = 2
    } else {
      scrollValue = parseInt(scroll.replace(/D/g, ''))
    }
    if (scrollValue !== 0) {
      window.myFullpage.moveTo(scrollValue)
    }
  })
  $('aside').click(closeAside)
  // $('.section').each(function () {
  //   $(this).css({height: $(window).height()})
  //   isScrolling = false
  // })
  // setSection()

  // $(".menu, .aside-item").click(function(){
  //   closeAside()
  //   var target = $(this).attr('data-target')
  //   var scrollTop = $("#"+target).offset().top
  //   if (window.width < 768) {
  //     scrollTop -= 47
  //   } else {
  //     scrollTop -= 92
  //   }
  //   $('html,body').animate({
  //     'scrollTop': scrollTop
  //   }, 500)
  // })
  $('.button').click(function(){
    var button = $(this)
    var target = button.attr('data-modal-target');
    $("#modal-content > *").hide();
    $('#modal-close-btn-wrap').show()
    $("#"+target).show();
    $("#modal").addClass('show')
    if (width >= 1024) {
      if (target === 'modal-path') {
        $('#modal-content').css({
          height: 'auto',
        })
      }
    }
    // $('body').css({'overflow': 'hidden'})
    window.myFullpage.setAllowScrolling(false);
    window.myFullpage.setKeyboardScrolling(false);
  })
  $('#modal-close-btn, #modal').click(function () {
    // $('body').css({'overflow': 'auto'})
    $("#modal").removeClass('show')
    window.myFullpage.setAllowScrolling(true);
    window.myFullpage.setKeyboardScrolling(true);
    if (width >= 1024) {
      $('#modal-content').css({
        height: 520,
      })
    }
  })
  $('#modal-content').click(function (evt) {
    evt.preventDefault()
    evt.stopPropagation()
    return false
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
// $(window).on('scroll', function () {
  
//   var windowScrollTop = $(window).scrollTop()
  
  
//   var ambitionTop = $("#ambition").offset().top
//   var hotelServiceTop = $("#hotel-service").offset().top
//   var visionTop = $("#vision").offset().top
//   var definitionTop = $("#definition").offset().top
//   var valueTop = $("#value").offset().top
//   var careerTop = $("#career").offset().top
//   var joinTop = $("#join").offset().top
//   var contactTop = $("#contact").offset().top

//   var hotelServiceHeight = $("#hotel-service").height()
//   var visionHeight = $("#vision").height()
//   var definitionHeight = $("#definition").height()
//   var valueHeight = $("#value").height()
//   var careerHeight = $("#career").height()
//   var joinHeight = $("#join").height()
//   var contactHeight = $("#contact").height()

//   // var ambitionBottom = $("#ambition").offset().top + $('#ambition').height()
//   // var hotelServiceBottom = $("#hotel-service").offset().top + $("#hotel-service").height()
//   // var visionBottom = $("#vision").offset().top + $("#vision").height()
//   // var definitionBottom = $("#definition").offset().top + $("#definition").height()
//   // var valueBottom = $("#value").offset().top + $("#value").height()
//   // var careerBottom = $("#career").offset().top + $("#career").height()
//   // var joinBottom = $("#join").offset().top + $("#join").height()
//   // var contactBottom = $("#contact").offset().top + $('#contact').height()
  
  
//   // testVisibleAndShow(windowScrollTop, ambitionTop, "#ambition")
//   testVisibleAndShowForHotelService(windowScrollTop, hotelServiceTop, hotelServiceHeight,  "#hotel-service")
//   testVisibleAndShow(windowScrollTop, visionTop, visionHeight, "#vision")
//   testVisibleAndShow(windowScrollTop, definitionTop, definitionHeight, "#definition")
//   testVisibleAndShow(windowScrollTop, valueTop, valueHeight, "#value")
//   testVisibleAndShow(windowScrollTop, careerTop, careerHeight, "#career")
//   testVisibleAndShow(windowScrollTop, joinTop, joinHeight, "#join")
//   testVisibleAndShow(windowScrollTop, contactTop, contactHeight, "#contact")
// })
// function testVisibleAndShowForHotelService (windowScrollTop, itemTop, itemHeight, selector) {
//   // 화면의 최상단 => windowScrollTop
//   // 화면의 최하단 => windowScrollTop + height
//   if (windowScrollTop  < itemTop && itemTop  < windowScrollTop + height - 150) {
//     $(selector).addClass('active')
//   } else {
//     $(selector).removeClass('active')
//   }
// }
// function testVisibleAndShow (windowScrollTop, itemTop, itemHeight, selector) {
//   // 화면의 최상단 => windowScrollTop
//   // 화면의 최하단 => windowScrollTop + height
//   if (windowScrollTop  < itemTop && itemTop + itemHeight - 150 < windowScrollTop + height - 150) {
//     $(selector).addClass('active')
//   } else {
//     $(selector).removeClass('active')
//   }
// }