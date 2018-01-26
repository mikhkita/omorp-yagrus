$(document).ready(function(){	
    function resize(){
       if( typeof( window.innerWidth ) == 'number' ) {
            myWidth = window.innerWidth;
            myHeight = window.innerHeight;
        } else if( document.documentElement && ( document.documentElement.clientWidth || 
        document.documentElement.clientHeight ) ) {
            myWidth = document.documentElement.clientWidth;
            myHeight = document.documentElement.clientHeight;
        } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
            myWidth = document.body.clientWidth;
            myHeight = document.body.clientHeight;
        }
    }
    $(window).resize(resize);
    resize();

    $.fn.placeholder = function() {
        if(typeof document.createElement("input").placeholder == 'undefined') {
            $('[placeholder]').focus(function() {
                var input = $(this);
                if (input.val() == input.attr('placeholder')) {
                    input.val('');
                    input.removeClass('placeholder');
                }
            }).blur(function() {
                var input = $(this);
                if (input.val() == '' || input.val() == input.attr('placeholder')) {
                    input.addClass('placeholder');
                    input.val(input.attr('placeholder'));
                }
            }).blur().parents('form').submit(function() {
                $(this).find('[placeholder]').each(function() {
                    var input = $(this);
                    if (input.val() == input.attr('placeholder')) {
                        input.val('');
                    }
                });
            });
        }
    }
    $.fn.placeholder();

    function declOfNum(number, titles) { 
        cases = [2, 0, 1, 1, 1, 2]; 
        return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ]; 
    }

    function startTimer(duration, display) {
        var start = Date.now(),
            diff,
            minutes,
            seconds;
        function timer() {
            // get the number of seconds that have elapsed since 
            // startTimer() was called
            diff = duration - (((Date.now() - start) / 1000) | 0);

            // does the same job as parseInt truncates the float
            minutes = (diff / 60) | 0;
            seconds = (diff % 60) | 0;

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = minutes + " " + declOfNum(minutes, ['минуту', 'минуты', 'минут']) + " " + seconds + " " + declOfNum(seconds, ['секунду', 'секунды', 'секунд']); 

            if (diff <= 0) {
                // add one second so that the count down starts at the full duration
                // example 05:00 not 04:59
                start = Date.now() + 1000;
            }

            if(parseInt(minutes) === 0 && parseInt(seconds) === 0){
                document.querySelector('.b-registration-cont').remove();
            }
        };
        // we don't want to wait a full second before the timer starts
        timer();
        setInterval(timer, 1000);
    }

    
        var fiveMinutes = 60 * 5,
        display = document.querySelector('#timer');
        startTimer(fiveMinutes, display);
    
    /*Senler.ButtonSubscribe("senlerBtn-111", { 
        completeCallback: function ($e) { 
        console.log('Запрос пришел успешно'); 
        }, 
        cancelCallback: function ($e) { 
        console.log('Пользователь отписался'); 
        }, 
        successCallback: function ($e) { 
        console.log('Пользователь подписался'); 
        }, 
        errorCallback: function ($e, jqXHR, textStatus, errorThrown) { 
        console.log('Ошибка при запросе'); 
        } 
    });

    successCallback: function ($e) { 
    // console.log('Пользователь подписался'); 
        ga('send', 'event', 'Button', 'click', 'subscribe'); 
        yaCounterXXXXXX.reachGoal('subscribe'); 
        } 
    });*/
    
	// var myPlace = new google.maps.LatLng(55.754407, 37.625151);
 //    var myOptions = {
 //        zoom: 16,
 //        center: myPlace,
 //        mapTypeId: google.maps.MapTypeId.ROADMAP,
 //        disableDefaultUI: true,
 //        scrollwheel: false,
 //        zoomControl: true
 //    }
 //    var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions); 

 //    var marker = new google.maps.Marker({
	//     position: myPlace,
	//     map: map,
	//     title: "Ярмарка вакансий и стажировок"
	// });

    //  var options = {
    //     $AutoPlay: true,                                
    //     $SlideDuration: 500,                            

    //     $BulletNavigatorOptions: {                      
    //         $Class: $JssorBulletNavigator$,             
    //         $ChanceToShow: 2,                           
    //         $AutoCenter: 1,                            
    //         $Steps: 1,                                  
    //         $Lanes: 1,                                  
    //         $SpacingX: 10,                              
    //         $SpacingY: 10,                              
    //         $Orientation: 1                             
    //     }
    // };

    // var jssor_slider1 = new $JssorSlider$("slider1_container", options);

});