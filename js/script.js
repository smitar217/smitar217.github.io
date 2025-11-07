/**
 * RESPOND Coaching Website - JavaScript
 * jQuery-based interactions and animations
 */

$(document).ready(function() {
    
    // ==========================================
    // Mobile Menu Toggle
    // ==========================================
    $('#mobileMenuToggle').on('click', function() {
        $(this).toggleClass('active');
        $('#navMenu').toggleClass('active');
    });

    // Close mobile menu when clicking outside
    $(document).on('click', function(event) {
        if (!$(event.target).closest('.navbar').length) {
            $('#mobileMenuToggle').removeClass('active');
            $('#navMenu').removeClass('active');
        }
    });

    // Close mobile menu when clicking on a link
    $('.nav-link').on('click', function() {
        $('#mobileMenuToggle').removeClass('active');
        $('#navMenu').removeClass('active');
    });

    // ==========================================
    // Sticky Navbar on Scroll
    // ==========================================
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 50) {
            $('#navbar').addClass('scrolled');
        } else {
            $('#navbar').removeClass('scrolled');
        }
    });

    // ==========================================
    // Smooth Scrolling for Anchor Links
    // ==========================================
    $('a[href^="#"]').on('click', function(event) {
        const target = $(this.getAttribute('href'));
        
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 100
            }, 800, 'swing');
        }
    });

    // ==========================================
    // Book Button - Open Email Application
    // ==========================================
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

    // ==========================================
    // Back to Top Button
    // ==========================================
    const backToTopBtn = $('#backToTop');
    
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 300) {
            backToTopBtn.addClass('show');
        } else {
            backToTopBtn.removeClass('show');
        }
    });

    backToTopBtn.on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 600, 'swing');
    });

    // ==========================================
    // Contact Form Validation & Submission
    // ==========================================
    $('#contactForm').on('submit', function(event) {
        event.preventDefault();
        
        // Clear previous errors
        $('.error-message').hide();
        let isValid = true;
        
        // Name validation
        const name = $('#name').val().trim();
        if (name === '') {
            $('#nameError').text('Please enter your name').show();
            isValid = false;
        }
        
        // Email validation
        const email = $('#email').val().trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === '') {
            $('#emailError').text('Please enter your email').show();
            isValid = false;
        } else if (!emailRegex.test(email)) {
            $('#emailError').text('Please enter a valid email address').show();
            isValid = false;
        }
        
        // Phone validation (optional but if filled, should be valid)
        const phone = $('#phone').val().trim();
        if (phone !== '') {
            const phoneRegex = /^[\d\s\+\-\(\)]+$/;
            if (!phoneRegex.test(phone)) {
                $('#phoneError').text('Please enter a valid phone number').show();
                isValid = false;
            }
        }
        
        // Subject validation
        const subject = $('#subject').val().trim();
        if (subject === '') {
            $('#subjectError').text('Please enter a subject').show();
            isValid = false;
        }
        
        // Message validation
        const message = $('#message').val().trim();
        if (message === '') {
            $('#messageError').text('Please enter your message').show();
            isValid = false;
        } else if (message.length < 10) {
            $('#messageError').text('Message must be at least 10 characters').show();
            isValid = false;
        }
        
        // If validation passes
        if (isValid) {
            // Simulate form submission (in production, this would send to server)
            const formData = {
                name: name,
                email: email,
                phone: phone,
                subject: subject,
                message: message
            };
            
            console.log('Form submitted with data:', formData);
            
            // Show success message
            $('#formSuccess').addClass('show');
            
            // Reset form
            $('#contactForm')[0].reset();
            
            // Hide success message after 5 seconds
            setTimeout(function() {
                $('#formSuccess').removeClass('show');
            }, 5000);
        }
    });

    // ==========================================
    // Newsletter Form Submission
    // ==========================================
    $('#newsletterForm').on('submit', function(event) {
        event.preventDefault();
        
        const email = $(this).find('input[type="email"]').val().trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (email === '') {
            alert('Please enter your email address');
            return;
        }
        
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Simulate newsletter subscription
        console.log('Newsletter subscription:', email);
        alert('Thank you for subscribing to our newsletter!');
        $(this)[0].reset();
    });

    // ==========================================
    // Load More Blog Posts (Blog Page)
    // ==========================================
    $('#loadMoreBtn').on('click', function() {
        const button = $(this);
        button.html('<i class="fas fa-spinner fa-spin"></i> Loading...');
        
        // Simulate loading more posts
        setTimeout(function() {
            button.html('Load More Posts <i class="fas fa-chevron-down"></i>');
            alert('This would load more blog posts. Feature can be connected to backend.');
        }, 1000);
    });

    // ==========================================
    // Feature Card Hover Effects
    // ==========================================
    $('.feature-card').hover(
        function() {
            $(this).find('.feature-number .number').css({
                'transform': 'scale(1.1)',
                'background-color': '#C7A96B'
            });
        },
        function() {
            $(this).find('.feature-number .number').css({
                'transform': 'scale(1)',
                'background-color': '#1E3D58'
            });
        }
    );

    // ==========================================
    // Service Card Animations
    // ==========================================
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

    // ==========================================
    // Blog Card Hover Animation
    // ==========================================
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

    // ==========================================
    // Parallax Effect for Hero Section
    // ==========================================
    $(window).on('scroll', function() {
        const scrolled = $(window).scrollTop();
        $('.hero-content').css({
            'transform': 'translateY(' + (scrolled * 0.3) + 'px)',
            'opacity': 1 - (scrolled * 0.002)
        });
    });

    // ==========================================
    // Hero Image Mouse Follow Effect (Full Hero Section Tracking)
    // ==========================================
    $('.hero').on('mousemove', function(e) {
        const $image = $('.circular-image img');
        const heroSection = $(this);
        const heroOffset = heroSection.offset();
        const heroWidth = heroSection.width();
        const heroHeight = heroSection.height();
        
        // Get mouse position relative to the hero section
        const mouseX = e.pageX - heroOffset.left;
        const mouseY = e.pageY - heroOffset.top;
        
        // Calculate the center of the hero section
        const centerX = heroWidth / 2;
        const centerY = heroHeight / 2;
        
        // Calculate the distance from center (normalized to -1 to 1)
        const deltaX = (mouseX - centerX) / centerX;
        const deltaY = (mouseY - centerY) / centerY;
        
        // Move the image (adjust multiplier for more/less movement)
        const moveX = deltaX * 20; // 20px max movement
        const moveY = deltaY * 20;
        
        $image.css({
            'transform': `translate(${moveX}px, ${moveY}px)`,
            'transition': 'transform 0.1s ease-out'
        });
    });

    // Reset position when mouse leaves
    $('.hero').on('mouseleave', function() {
        $('.circular-image img').css({
            'transform': 'translate(0, 0)',
            'transition': 'transform 0.5s ease-out'
        });
    });

    // ==========================================
    // Form Input Focus Animation
    // ==========================================
    $('.form-group input, .form-group textarea').on('focus', function() {
        $(this).parent().find('label').css({
            'color': '#C7A96B',
            'transform': 'translateY(-2px)'
        });
    });

    $('.form-group input, .form-group textarea').on('blur', function() {
        if ($(this).val() === '') {
            $(this).parent().find('label').css({
                'color': '#1E3D58',
                'transform': 'translateY(0)'
            });
        }
    });

    // ==========================================
    // Typewriter Effect for Hero Title (Optional)
    // ==========================================
    function typeWriter(element, text, speed) {
        let i = 0;
        element.html('');
        
        function type() {
            if (i < text.length) {
                element.append(text.charAt(i));
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }

    // Uncomment to enable typewriter effect on homepage
    /*
    if ($('.hero-title').length) {
        const heroText = $('.hero-title').text();
        typeWriter($('.hero-title'), heroText, 50);
    }
    */

    // ==========================================
    // Counter Animation for Statistics
    // ==========================================
    function animateCounter(element, target, duration) {
        let current = 0;
        const increment = target / (duration / 16);
        
        const timer = setInterval(function() {
            current += increment;
            if (current >= target) {
                element.text(Math.ceil(target));
                clearInterval(timer);
            } else {
                element.text(Math.ceil(current));
            }
        }, 16);
    }

    // Example usage for counters (add to HTML if needed)
    $('.counter').each(function() {
        const target = parseInt($(this).data('target'));
        const duration = 2000;
        
        if ($(this).visible()) {
            animateCounter($(this), target, duration);
        }
    });

    // ==========================================
    // Circular Progress Indicator
    // ==========================================
    function updateProgressBar() {
        const windowHeight = $(window).height();
        const documentHeight = $(document).height();
        const scrollTop = $(window).scrollTop();
        const trackLength = documentHeight - windowHeight;
        const percentage = Math.floor((scrollTop / trackLength) * 100);
        
        // Update progress bar if it exists
        if ($('.progress-bar').length) {
            $('.progress-bar').css('width', percentage + '%');
        }
    }

    $(window).on('scroll', updateProgressBar);

    // ==========================================
    // Lazy Loading Images (Simple Implementation)
    // ==========================================
    function lazyLoadImages() {
        $('img[data-src]').each(function() {
            const img = $(this);
            const imgTop = img.offset().top;
            const viewportBottom = $(window).scrollTop() + $(window).height();
            
            if (imgTop < viewportBottom + 200) {
                img.attr('src', img.data('src'));
                img.removeAttr('data-src');
            }
        });
    }

    $(window).on('scroll', lazyLoadImages);
    lazyLoadImages(); // Run on page load

    // ==========================================
    // Certifications Toggle (About Page)
    // ==========================================
    $('.certification-header').on('click', function() {
        const certificationItem = $(this).parent('.certification-item');
        
        // Toggle the clicked item
        certificationItem.toggleClass('open');
        
        // Optional: Close other certifications when opening one (uncomment if you want only one open at a time)
        // $('.certification-item').not(certificationItem).removeClass('open');
    });

    // ==========================================
    // Console Welcome Message
    // ==========================================
    console.log('%c Welcome to RESPOND Coaching Website ', 
                'background: #1E3D58; color: #C7A96B; font-size: 16px; padding: 10px;');
    console.log('%c Developed with HTML, CSS, and jQuery ', 
                'background: #C7A96B; color: #fff; font-size: 12px; padding: 5px;');

}); // End of document ready

// ==========================================
// Window Resize Handler
// ==========================================
$(window).on('resize', function() {
    // Close mobile menu on window resize
    if ($(window).width() > 768) {
        $('#mobileMenuToggle').removeClass('active');
        $('#navMenu').removeClass('active');
    }
});

// ==========================================
// Prevent Default on Empty Links
// ==========================================
$('a[href="#"]').on('click', function(event) {
    event.preventDefault();
});
