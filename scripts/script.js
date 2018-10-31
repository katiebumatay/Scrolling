$(document).ready(function() {


    $.fn.switchSpots = function() {
        var cells = $(".small-container");
        for(var i = 0; i < cells.length; i++){
            var target = Math.floor(Math.random() * cells.length -1) + 1;
            var target2 = Math.floor(Math.random() * cells.length -1) +1;
            cells.eq(target).before(cells.eq(target2));
        }
    }
    

    $('.small-container').each(function(){
        var newWidth = Math.floor(Math.random()* 20)+ 15 + '%';
        $(this).css('width',newWidth);
    });

    $.fn.placementone = function() {
        var one = $('h1');
        for(var i = 0; i < one.length; i ++) {
            var m = Math.floor(Math.random() * 30); 
            let neg = Math.random();
            if (neg > 0.5) {
                m = m * -1
            }
            m = m + '%'
            $(one[i]).animate({marginLeft: m,}, 0);
        }

    }

    $.fn.placementtwo = function() {
        var two = $('h2');
        for(var i = 0; i < two.length; i ++) {
            var m = Math.floor(Math.random() * 30); 
            let neg = Math.random();
            if (neg > 0.5) {
                m = m * -1
            }
            m = m + '%'
            $(two[i]).animate({marginLeft: m,}, 0);
        }
    }

    $.fn.placementthree = function() {
        var three = $('h3');
        for(var i = 0; i < three.length; i ++) {
            var m = Math.floor(Math.random() * 80); 
            let neg = Math.random();
            if (neg > 0.5) {
                m = m * -1
            }
            m = m + '%'
            $(three[i]).animate({marginLeft: m,}, 0);
        }
    }

    $.fn.placementfour = function() {
        var four = $('h4');
        for(var i = 0; i < four.length; i ++) {
            var m = Math.floor(Math.random() * 100); 
            let neg = Math.random();
            if (neg > 0.5) {
                m = m * -1
            }
            m = m + '%'
            $(four[i]).animate({marginLeft: m,}, 0);
        }
    }


    $(function(){

        $('body').switchSpots();
        $('h1').placementone();
        $('h2').placementtwo();
        $('h3').placementthree();
        $('h4').placementfour();
        // $('body').reloadAtTop();

        var fonts = ['IBM Plex Mono', 'Montserrat', 'Roboto Slab', 'Playfair Display', 'Rubik', 'Arvo',
            'Abril Fatface', 'Domine', 'Archivo Black', 'Black Han Sans', 'Philosopher', 'Ultra', 'Barlow Semi Condensed',
            'Titan One', 'Oleo Script', 'Fugaz One', 'Cantata One', 'Yeseva One', 'Poller One', 'Graduate', 
            'Coda Caption', 'Averia Serif Libre', 'Maitree', 'Rammetto One', 'Rozha One', 'Expletus Sans', 
            'Suez One', 'Germania One', 'Plaster', 'Rakkas', 'serif', 'sans-serif'];
        var num = Math.floor(Math.random()*32);
        var weights = [400, 700, 900];
        var w = Math.floor(Math.random()*3);
        document.body.style.fontFamily = fonts[num];
        document.body.style.fontWeight = weights[w];


        // var colors = ['#e8dfbb', '#ff0048', '#03005b', '#ff8c00', '#166263', '#ffafdb', '#7c0034', 
        // '#ff5f38', '#003316', '#3dff9a', '#edf6ff'];
        // var colors = ['#94D4BF', '#3AA884', '#09996A', '#006F4B', '#003F2A', '#FFE7B1', '#FCC957', '#E6A30D', 
        // '#A67300', '#5F4100', '#FFCBB1', '#FC8F57', '#E6560D', '#A63800', '#5F2000', '#9CAAD6', '#475EAA', '#1A389C', '#0B2371', '#031140'];
        // var num1 = Math.floor(Math.random()*20);
        // var num2 = Math.floor(Math.random()*20);
        // if (num1 == num2) {
        //     num2 = num2+1;
        // }
        // document.body.style.backgroundColor= colors[num1];
        // document.body.style.color = colors[num2];

        var graynum = Math.floor(Math.random()*245) + 10;
        document.body.style.color = ["rgb(",graynum,",",graynum,",",graynum,")"].join("");
    });

$(window).scroll(function() {
  if($(window).scrollTop() + $(window).height() >= $(document).height()) {
    location.assign("index.html");
  }
});


// setTimeout(function(){
//     location.reload();
// },8000);


});
