$('.menu-icon').click(function() {
    $(".mobile_nav").slideToggle("slow");
});

$('#hamburger').click(function() {
    $("#hamburger").addClass("hidden");
    $("#cross").removeClass("hidden");
});

$('#cross').click(function() {
    $("#cross").addClass("hidden");
    $("#hamburger").removeClass("hidden");
});

