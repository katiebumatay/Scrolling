$(document).ready(function() {

(function () {
    "use strict";
    // Cycle over each .shuffledv HTMLElement
    $(".skrollr-container").each(function () {
        // Remove all divs within, store in $d
        var $d = $(this).find(".small-container").remove();
        // Sort $d randomnly
        $d.sort(function () { return Math.floor(Math.random() * $d.length); });
        // Append divs within $d to .shuffledv again
        $d.appendTo(this);
    });
}());

$(window).scroll(function() {
  if($(window).scrollTop() + $(window).height() >= $(document).height()) {
    // window.location.reload(true);
    // $(this).scrollTop(0);
    location.assign("index-manipulated.html");
  }
});

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
