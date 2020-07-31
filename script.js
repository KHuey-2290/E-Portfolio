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

// Projects Page
    // Open the Modal
    var myProject1 = document.getElementById("project1");
    var myProject2 = document.getElementById("project2");
    var myProject3 = document.getElementById("project3");
    var myProject4 = document.getElementById("project4");
    var myProject5 = document.getElementById("project5");
    var myProject6 = document.getElementById("project6");
    var myProject7 = document.getElementById("project7");
    var myProject8 = document.getElementById("project8");

    var myModalBM = document.getElementById("myModalBM");
    var myModalType = document.getElementById("myModalType");
    var myModalUX = document.getElementById("myModalUX");
    var myModalDR = document.getElementById("myModalDR");
    var myModalRebrand1 = document.getElementById("myModalRebrand1");
    var myModalRebrand2 = document.getElementById("myModalRebrand2");
    var myModalPack1 = document.getElementById("myModalPack1");
    var myModalPack2 = document.getElementById("myModalPack2");

    myProject1.onclick = function() {openModalBM()};
    myProject2.onclick = function() {openModalType()};
    myProject3.onclick = function() {openModalUX()};
    myProject4.onclick = function() {openModalDR()};
    myProject5.onclick = function() {openModalRebrand1()};
    myProject6.onclick = function() {openModalRebrand2()};
    myProject7.onclick = function() {openModalPack1()};
    myProject8.onclick = function() {openModalPack2()};

    function openModalBM() {
        myModalBM.style.display = "block";
    }

    function openModalType() {
        myModalType.style.display = "block";
    }

    function openModalUX() {
        myModalUX.style.display = "block";
    }

    function openModalDR() {
        myModalDR.style.display = "block";
    }

    function openModalRebrand1() {
        myModalRebrand1.style.display = "block";
    }

    function openModalRebrand2() {
        myModalRebrand2.style.display = "block";
    }

    function openModalPack1() {
        myModalPack1.style.display = "block";
    }

    function openModalPack2() {
        myModalPack2.style.display = "block";
    }
    
    // Close the Modal
    function closeModal() {
        myModalBM.style.display = "none";
        myModalType.style.display = "none";
        myModalUX.style.display = "none";
        myModalDR.style.display = "none";
        myModalRebrand1.style.display = "none";
        myModalRebrand2.style.display = "none";
        myModalPack1.style.display = "none";
        myModalPack2.style.display = "none";
    }
    
    var slideIndex = 1;
    showSlides(slideIndex);
    
    // Next/previous controls
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }
    
    // Thumbnail image controls
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }
    
    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("demo");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
    }