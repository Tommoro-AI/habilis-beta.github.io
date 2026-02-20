window.HELP_IMPROVE_VIDEOJS = false;

$(document).ready(function() {
    // 1. Tab Switching Logic (Moved to top for priority)
    $(document).on('click', '#simulation-tabs li', function(e) {
        e.preventDefault();
        const task = $(this).data('task');
      
        $('#simulation-tabs li').removeClass('is-active');
        $(this).addClass('is-active');
      
        $('.task-video-container').addClass('is-hidden');
        $('#' + task + '-videos').removeClass('is-hidden');
      });

    // 2. Navbar Burger Logic
    $(".navbar-burger").click(function() {
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
    });

    // 3. Carousel Logic (With safety check)
    var options = {
        slidesToScroll: 1,
        slidesToShow: 3,
        loop: true,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 3000,
    }

    // Only attempt to attach if .carousel elements exist
    if ($('.carousel').length > 0) {
        var carousels = bulmaCarousel.attach('.carousel', options);
        if (carousels) {
            for(var i = 0; i < carousels.length; i++) {
                carousels[i].on('before:show', state => {
                    console.log(state);
                });
            }
        }
    }

    // 4. Other UI element checks
    var element = document.querySelector('#my-element');
    if (element && element.bulmaCarousel) {
        element.bulmaCarousel.on('before-show', function(state) {
            console.log(state);
        });
    }
});