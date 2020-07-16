// Navbar JS
$(document).ready(function () {

    //Buttons in header
    $(".menu-toggle-container").click(function() {
        $(".navbar-list").toggle();
    });
});

// About Page
$( function() {
    $( "#accordionBox" ).accordion();
} );