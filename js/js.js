// شهر، يوم، ساعة، دقيقة، ثانية odHMS بصيغة countdown إضافة عداد زمني 
$(document).ready(function () {
    // Count-Down
    $(function () {
        var austDay = new Date();
        austDay = new Date(austDay.getFullYear() + 0, 1 - 1, 39);
        $('#defaultCountdown').countdown({ until: austDay, format: 'odHMS' });
    });

    // ‫ إلغاء الحركة في شاشات الجوال وتهيئة مكتبة wow  للعمل
    var wow = new WOW({ mobile: false });
    wow.init();

    $(function () {

        // إظهار رسالة النجاح عند إدخال بريد إلكتروني صحيح والفشل عند إدخال بريد إلكتروني خاطئ 
        $('.form-control').blur(function () {
            /* هون طبق ما يلي في حال عدم التركيز blur ال*/
            var x = document.forms["myForm"]["email"].value;
            var atpos = x.indexOf("@");
            var dotpos = x.lastIndexOf(".");
            if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
                $(this).parent().find(".alert-danger").fadeIn(200);
            }
            else {
                $(this).parent().find(".alert-success").fadeIn(200);
            }
        });

    });


    $(function () {
        // إظهار رسالة النجاح عند إدخال بريد إلكتروني صحيح والفشل عند إدخال بريد إلكتروني خاطئ 
        $('.form-control').blur(function () {
            /* هون طبق ما يلي في حال عدم التركيز blur ال*/
            var x = document.forms["myForm2"]["email2"].value;
            var atpos = x.indexOf("@");
            var dotpos = x.lastIndexOf(".");
            if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
                $(this).parent().find(".alert-danger").fadeIn(200);
            }
            else {
                $(this).parent().find(".alert-success").fadeIn(200);
            }
        });
    });

});

document.addEventListener('DOMContentLoaded', () => {
  
  //===== MICRO-SLIDER begin
    const __ms = document.querySelector('.micro-slider');
  const __msSlider = new MicroSlider(__ms, { indicators: true, indicatorText: '' });
  const __hammer = new Hammer(__ms);
    let __msTimer = 2000;
    let __msAutoplay;
    
  //set autoplay
    __msAutoplay = setInterval(() => __msSlider.next(), __msTimer);
  //detect mouseenter event
    __ms.onmouseenter = function(e) {
    clearInterval(__msAutoplay); 
    console.log(e.type + ' mouse detected');
  }
  //detect mouseleave event
    __ms.onmouseleave = function(e) {
    __msAutoplay = setInterval(() => __msSlider.next(), __msTimer);
    console.log(e.type + ' mouse detected');

  }
  //detect gesture tap event with hammer js library
  hammer.on('tap', function(e) {
    clearInterval(__msAutoplay);
    console.log(e.type + ' gesture detected');
  });
  //detect gesture swipe event with hammer js library
  hammer.on('swipe', function(e) {
    __msAutoplay = setInterval(() => __msSlider.next(), __msTimer);
    console.log(e.type + ' gesture detected');
  });
  //===== MICRO-SLIDER end


});



$('#toUp').click(()=>{
  $("html,body").animate({scrollTop:0},2700);
  return false ;
});