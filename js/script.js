$(document).ready(function() {
    
    $('#mobileMenuToggle').on('click', function() {
        $(this).toggleClass('active');
        $('#navMenu').toggleClass('active');
    });

    $(document).on('click', function(event) {
        if (!$(event.target).closest('.navbar').length) {
            $('#mobileMenuToggle').removeClass('active');
            $('#navMenu').removeClass('active');
        }
    });

    $('.nav-link').on('click', function() {
        $('#mobileMenuToggle').removeClass('active');
        $('#navMenu').removeClass('active');
    });

    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 50) {
            $('#navbar').addClass('scrolled');
        } else {
            $('#navbar').removeClass('scrolled');
        }
    })
    $('a[href^="#"]').on('click', function(event) {
        const target = $(this.getAttribute('href'));
        
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 100
            }, 800, 'swing');
        }
    });

    $('#book-btn').on('click', function() {
        var mailto = 'mailto:office@irespond.rs'
            + '?subject=' + encodeURIComponent('Booking Appointment')
            + '&body=' + encodeURIComponent(
                'Hello,\n\nI would like to book an appointment:\n\n[Please enter the date and time from the calendar]\n\nThank you!'
            );
        window.location.href = mailto;
    });

    $('#book-btn-sr').on('click', function() {
        var mailto = 'mailto:office@irespond.rs'
            + '?subject=' + encodeURIComponent('Zakazivanje termina')
            + '&body=' + encodeURIComponent(
                'Zdravo,\n\nželeo/la bih da zakažem termin:\n\n[Ovde unesite datum i vreme iz kalendara]\n\nHvala!'
            );
        window.location.href = mailto;
    });


    const backToTopBtn = $('#backToTop');
    
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 300) {
            backToTopBtn.addClass('show');
        } else {
            backToTopBtn.removeClass('show');
        }
    });

    backToTopBtn.on('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    $('.service-card').hover(
        function() {
            $(this).find('.service-icon i').css({
                'transform': 'rotate(360deg)',
                'transition': 'transform 0.6s ease'
            });
        },
        function() {
            $(this).find('.service-icon i').css({
                'transform': 'rotate(0deg)'
            });
        }
    );

    $('.blog-card').each(function() {
        $(this).hover(
            function() {
                $(this).find('.blog-category').css({
                    'background-color': '#1E3D58',
                    'transform': 'scale(1.05)'
                });
            },
            function() {
                $(this).find('.blog-category').css({
                    'background-color': '#C7A96B',
                    'transform': 'scale(1)'
                });
            }
        );
    });

    $(window).on('scroll', function() {
        const scrolled = $(window).scrollTop();
        $('.hero-content').css({
            'transform': 'translateY(' + (scrolled * 0.3) + 'px)',
            'opacity': 1 - (scrolled * 0.002)
        });
    });

    function isMobile() {
        return window.innerWidth <= 768;
    }

    $('.hero').on('mousemove', function(e) {
        if (isMobile()) return;
        
        const $image = $('.circular-image img');
        const heroSection = $(this);
        const heroOffset = heroSection.offset();
        const heroWidth = heroSection.width();
        const heroHeight = heroSection.height();
        
        const mouseX = e.pageX - heroOffset.left;
        const mouseY = e.pageY - heroOffset.top;
        
        const centerX = heroWidth / 2;
        const centerY = heroHeight / 2;
        
        const deltaX = (mouseX - centerX) / centerX;
        const deltaY = (mouseY - centerY) / centerY;
        
        const moveX = deltaX * 20;
        const moveY = deltaY * 20;
        
        $image.css({
            'transform': `translate(${moveX}px, ${moveY}px)`,
            'transition': 'transform 0.1s ease-out'
        });
    });

    $('.hero').on('mouseleave', function() {
        if (isMobile()) return;
        $('.circular-image img').css({
            'transform': 'translate(0, 0)',
            'transition': 'transform 0.5s ease-out'
        });
    });

    function updateMobileImagePosition() {
        if (!isMobile()) {
            $('.circular-image img').css('transform', 'translate(0, 0)');
            return;
        }

        const $heroSection = $('.hero');
        const $image = $('.circular-image img');
        
        if (!$heroSection.length || !$image.length) return;

        const heroOffset = $heroSection.offset().top;
        const heroHeight = $heroSection.outerHeight();
        const scrollTop = $(window).scrollTop();
        const windowHeight = $(window).height();

        const heroCenter = heroOffset + (heroHeight / 2);
        const viewportCenter = scrollTop + (windowHeight / 2);
        
        const maxDistance = heroHeight / 2 + windowHeight / 2;
        const distanceFromCenter = viewportCenter - heroCenter;
        let progress = distanceFromCenter / maxDistance;
        
        progress = Math.max(-1, Math.min(1, progress));
        
        const moveY = progress * 30;
        
        $image.css({
            'transform': `translateY(${moveY}px)`,
            'transition': 'transform 0.15s ease-out'
        });
    }

    $(window).on('scroll', function() {
        if (isMobile()) {
            updateMobileImagePosition();
        }
    });

    $(window).on('resize', function() {
        updateMobileImagePosition();
    });

    updateMobileImagePosition();

    $('.certification-header').on('click', function() {
        const certificationItem = $(this).parent('.certification-item');
        certificationItem.toggleClass('open');
    });

});

$(window).on('resize', function() {
    if ($(window).width() > 768) {
        $('#mobileMenuToggle').removeClass('active');
        $('#navMenu').removeClass('active');
    }
});

$('a[href="#"]').on('click', function(event) {
    event.preventDefault();
});
