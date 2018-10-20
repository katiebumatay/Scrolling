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




});
