$(document).ready(function(){
$('.slider').slick({
   arrows:true,
   dots: true,
   adaptiveHeight:true,
   slidesToShow:4,
   slidesToScroll:4,
   easing: 'ease',
   infinite:true,
   autoplay:true,
   autoplaySpeed:2500,
   pauseOnFocus:true,
   pauseOnHover: true,
   pauseOnDotsHover:true,
   touchThreshold:10,
   waitForAnimate:false,
   responsive:[
     {
       breakpoint: 1080,
      settings:{
        slidesToShow:2,
        slidesToScroll:2,
      }
     }
   ],
});
});
