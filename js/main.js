$(document).ready(function() {
    // Smooth scrolling for navigation links
    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();
        
        const target = $(this.getAttribute('href'));
        if(target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 80
            }, 1000);
        }
    });
    // Mobile menu functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');

    menuToggle.addEventListener('click', function() {
        mobileNav.classList.toggle('active');
    });
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.mobile-nav') && !event.target.closest('.menu-toggle')) {
            mobileNav.classList.remove('active');
        }
    });
    // Close menu when clicking on a link
    const navItems = document.querySelectorAll('.mobile-nav a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            mobileNav.classList.remove('active');
        });
    });
}); 