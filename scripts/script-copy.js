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
        var newWidth = Math.floor(Math.random()* 25)+ 10 + '%';
        $(this).css('width',newWidth);
    });

    // $('.small-container').each(function(){
    //     var newHeight = Math.floor(Math.random()* 10)+ 15 + '%';
    //     $(this).css('height',newHeight);
    // });

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
            console.log(neg)
            if (neg > 0.5) {
                m = m * -1
            }
            m = m + '%'
            console.log(m)
            $(four[i]).animate({marginLeft: m,}, 0);
        }
    }





    // var fonts = [ "serif", "sans-serif"];
    // var num = Math.floor(Math.random()*2);
    // document.body.style.fontFamily = fonts[num];

    $(function(){

        $('body').switchSpots();
        $('h1').placementone();
        $('h2').placementtwo();
        $('h3').placementthree();
        $('h4').placementfour();

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

        // $('body').randFont();
        // $('h1').placementone();
        // $('h2').placementtwo();
    });

$(window).scroll(function() {
  if($(window).scrollTop() + $(window).height() >= $(document).height()) {
    // window.location.reload(true);
    // $(this).scrollTop(0);
    location.assign("index-copy.html");
  }
});

// var fontType = [ "Arial", "Verdana", "Helvetica"];
// var num;
// num=Math.floor(Math.random()*3);
// document.getElementByClass(".size1, .size2").style.fontFamily =fontType[num];
// console.log(num)

// setTimeout(function(){
//     location.reload();
// },8000);


});
