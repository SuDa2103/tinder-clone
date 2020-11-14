$(function() {
var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var $activeSlide = $('#slides .slide:first-child');


$activeSlide.addClass("showing");

$("#decline").on("click", function() {
    goToSlide('decline');
})

$("#approve").on("click", function() {
    goToSlide('approve');
})

function goToSlide(action) {
$activeSlide.removeClass("showing");
    if(action == "approve") {
        
    } else {
        
    }
    
    $activeSlide.next(".slide").addClass("showing");
}
})
