//SMOTH SCROLL
$(document).ready(function () {
    $('.menu').click(function () {
        $('.navigation__items').toggleClass('active');
    })
})

$('a.smooth-scroll').on('click', function(event){
    event.preventDefault()
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 30
    }, 800)
})