$(document).ready(function() {

    
    // $.fn.randFont = function() {
    //     var fonts = [ "Arial", "Verdana", "Helvetica"];
    //     var num;
    //     num = Math.floor(Math.random()*3);
    //     document.(this).style.fontFamily = fonts[num];
    //     // console.log(num)
    // }

$(function () {
    // $("h4").randFont();
    // "use strict";
    // // Cycle over each .shuffledv HTMLElement
    // $(".skrollr-container").each(function () {
    //     // Remove all divs within, store in $d
    //     var $d = $(this).find(".small-container").remove();
    //     // Sort $d randomnly
    //     $d.sort(function () { return Math.floor(Math.random() * $d.length); });
    //     // Append divs within $d to .shuffledv again
    //     $d.appendTo(this);
    // });
    var cells = $(".small-container");
    for(var i = 0; i < cells.length; i++){
        var target = Math.floor(Math.random() * cells.length -1) + 1;
        var target2 = Math.floor(Math.random() * cells.length -1) +1;
        cells.eq(target).before(cells.eq(target2));
    }
});

$(window).scroll(function() {
  if($(window).scrollTop() + $(window).height() >= $(document).height()) {
    // window.location.reload(true);
    // $(this).scrollTop(0);
    location.assign("index.html");
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

// $.fn.switchLocations = function() {
//     "use strict";
//     // Cycle over each .shuffledv HTMLElement
//     $(".skrollr-container").each(function () {
//         // Remove all divs within, store in $d
//         var $d = $(this).find(".small-container").remove();
//         // Sort $d randomnly
//         $d.sort(function () { return Math.floor(Math.random() * $d.length); });
//         // Append divs within $d to .shuffledv again
//         $d.appendTo(this);
//     });
// }



});
