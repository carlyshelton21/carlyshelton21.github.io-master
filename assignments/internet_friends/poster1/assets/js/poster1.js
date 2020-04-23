

    $.fn.isInViewport = function() {
        var elementTop = $(this).offset().top + ($(window).height()/1.5);
        var elementBottom = elementTop + $(this).outerHeight();
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
        return elementBottom > viewportTop && elementTop < viewportBottom;
    };


    function isPortrait() {
        return window.innerHeight > window.innerWidth;
    }

    window.addEventListener("resize", isPortrait)

    var bg = document.getElementById('background');

    window.addEventListener('load', function() {
        bg.scrollTop = 0;
    });


    $('a[href*=\\#]').on('click', function(event){
        event.preventDefault();
        if(this.hash == "#top"){
            $('#background').animate({scrollTop: 0}, 2000);
            return;
        }else{
            $('#background').animate({scrollTop: $(this.hash).offset().top + bg.scrollTop }, 2000);
        }
    });


    // fallback css classen für positon sticky !!

    let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);

        window.addEventListener('resize', () => {
          let vh = window.innerHeight * 0.01;
          document.documentElement.style.setProperty('--vh', `${vh}px`);
        });

	var r1, g1, b1, r2, g2, b2;

	rA1 = 246; rA2 = 230; //-16
	gA1 = 162; gA2 = 51;  //-111
	bA1 = 0; bA2 = 18; 	  //+18

	rB1 = 98; rB2 = 0;  //-98
	gB1 = 81; gB2 = 31;	//-50
	bB1 = 61; bB2 = 26; //-35

	rC1 = 150; rC2 = 0;   //-150
	gC1 = 159; gC2 = 170; //+11
	bC1 = 183; bC2 = 232; //+49



	var x, y;

	$('#background').scroll(function() {

    var heightInVh = $(this).scrollTop()/$(this).height() * 100;
    var heightFloor = Math.floor(heightInVh/100)*100;
    var heightOdd = (heightFloor/100) % 2;
    var titleHeight = $('header').height();
    var topMove;

    if (heightInVh < 75) {

        if(isPortrait())
            var pixels = ($(this).width()/100) * heightInVh * 1.333;
        else
            var pixels = ($(this).height()/100) * heightInVh * 1.333;

		//$('h1').css({'position': '-webkit-sticky', 'top': 0})
        $('#ball').css({'height': pixels + 'px','width': pixels + 'px' });
        $('#ball').css({'left': '50%', 'transform': 'translate3d(-50%, -50%, 0)'});
        topMove = 0;
        $('nav a').removeClass('sphere');


    } else if (heightInVh >= 75 && heightInVh <= 100) {
    	x = (100 - heightInVh) * 2;
        //$('h1').css({'position': 'relative', 'top': $(this).height()/100*75 })

        if(isPortrait())
           $('#ball').css({'left':'0%','top': ''+x+'%', 'transform': 'translate3d(0%, -'+x+'%, 0)'})
        else
    	   $('#ball').css({'left': ''+x+'%', 'transform': 'translate3d(-'+x+'%, -50%, 0)'})



        topMove = heightInVh - 75;



    }

    else {

        if(isPortrait()){
            $('#ball').css({'height': $(this).width() + 'px','width': $(this).width() + 'px' });
            if (heightOdd == 1){
                x = (heightInVh) - (Math.floor(heightInVh/100)*100);
                y = 100 + ((Math.floor(heightInVh/100)*100) - heightInVh);
                $('#ball').css({'left':'0%','top': ''+x+'%', 'transform': 'translate3d(0%, -'+x+'%, 0)'});
            } else {
                x = 100 + ((Math.floor(heightInVh/100)*100) - heightInVh);
                y = (heightInVh) - (Math.floor(heightInVh/100)*100);
                $('#ball').css({'left':'0%','top': ''+x+'%', 'transform': 'translate3d(0%, -'+x+'%, 0)'});
            }
        }
        else{
            $('#ball').css({'height': $(this).height() + 'px','width': $(this).height() + 'px' });
            if (heightOdd == 1){
                x = (heightInVh) - (Math.floor(heightInVh/100)*100);
                y = 100 + ((Math.floor(heightInVh/100)*100) - heightInVh);
                $('#ball').css({'left': ''+x+'%', 'transform': 'translate3d(-'+x+'%, -50%, 0)'});
            } else {
                x = 100 + ((Math.floor(heightInVh/100)*100) - heightInVh);
                y = (heightInVh) - (Math.floor(heightInVh/100)*100);
                $('#ball').css({'left': ''+x+'%', 'transform': 'translate3d(-'+x+'%, -50%, 0)'});
            }
        }
    	//$('#ball').css({'height': 'calc(var(--vh, 1vh) * 100)', 'width': '100vh'})

        topMove = 25;




    		rA1 = Math.round(246 - (x * 0.16));
    		gA1 = Math.round(162 - (x * 1.11));
    		bA1 = Math.round(0 + (x * 0.18));

    		rB1 = Math.round(98 - (x * 0.98));
    		gB1 = Math.round(81 - (x * 0.50));
    		bB1 = Math.round(61 - (x * 0.35));

    		rC1 = Math.round(150 - (x * 1.50));
    		gC1 = Math.round(159 + (x * 0.11));
    		bC1 = Math.round(183 + (x * 0.49));

    		rA2 = Math.round(246 - (y * 0.16));
    		gA2 = Math.round(162 - (y * 1.11));
    		bA2 = Math.round(0 + (y * 0.18));

    		rB2 = Math.round(98 - (y * 0.98));
    		gB2 = Math.round(81 - (y * 0.50));
    		bB2 = Math.round(61 - (y * 0.35));

    		rC2 = Math.round(150 - (y * 1.50));
    		gC2 = Math.round(159 + (y * 0.11));
    		bC2 = Math.round(183 + (y * 0.49));

    }

    if($('#mobile-nav').offset().top <= 1)
        $('.mobile-top').html('&uarr;');
    else
        $('.mobile-top').html('&darr;');


    var topMultiply = (100/$(window).height()) * $('header > h1').height() / 25;
    $('header > h1').css('top', - (topMove * topMultiply)+'vh');

    $('#ball').css({'background-image':'linear-gradient('+ Math.ceil(heightInVh * 3.6) +'deg, rgba('+rA1+','+gA1+','+bA1+',1) 0%, rgba('+rB1+','+gB1+','+bB1+',1) 52%, rgba('+rC1+','+gC1+','+bC1+',1) 95%)'});

    $('.mobile-top').css({'background-image':'linear-gradient(to top, rgba('+rA1+','+gA1+','+bA1+',1) 0%, rgba('+rB1+','+gB1+','+bB1+',1) 52%, rgba('+rC1+','+gC1+','+bC1+',1) 95%)'});

    $('#background').css({'background-image':'linear-gradient(to top, rgba('+rA2+','+gA2+','+bA2+',1) 0%, rgba('+rB2+','+gB2+','+bB2+',1) 52%, rgba('+rC2+','+gC2+','+bC2+',1) 95%)'});


$('section').each(function(){
    if($(this).isInViewport()){
        $('nav a').removeClass('sphere');
        $("a[href*='#"+$(this).attr('id')+"']").addClass('sphere');
    }
})

});
