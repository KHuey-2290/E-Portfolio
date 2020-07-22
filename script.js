// Navbar JS
$(document).ready(function () {

    //Buttons in header
    $(".menu-toggle-container").click(function() {
        $(".navbar-list").toggle();
    });

    $("#resumeButtonPNG").click(function() {
        $(".resume-box").toggle();
    });
});

