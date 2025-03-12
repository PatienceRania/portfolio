$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });

    $('.back-to-top').click(function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
    });
});

$('.skills').waypoint(function () {
    $('.progress .progress-bar').each(function () {
        const progressValue = $(this).attr('aria-valuenow');
        $(this).css('width', progressValue + '%');
    });
}, { offset: '80%' });

const links = document.querySelectorAll('nav a');

links.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();

        const targetSectionId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetSectionId);

        const navbarHeight = document.querySelector('nav').offsetHeight;
        const extraSpace = 40;

        window.scrollTo({
            top: targetSection.offsetTop - navbarHeight - extraSpace,
            behavior: 'smooth'
        });
    });
});

$(document).ready(function () {
    $(".navbar-toggler").click(function () {
        $(".Tabs").slideToggle();
    });

    $(".Tabs a").click(function () {
        if ($(window).width() < 576) {
            $(".Tabs").slideUp();
        }
    });
});



