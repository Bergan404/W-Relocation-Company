document.addEventListener('DOMContentLoaded', function() {
    var burgerNav = document.getElementById('burger-nav');

    if (burgerNav) {
        burgerNav.addEventListener('click', function() {
            console.log('clicked');

            // Toggle the 'open' class on the #burger-nav element
            burgerNav.classList.toggle('open');

            // Toggle the 'open' class on the .mobile-nav element
            var mobileNav = document.querySelector('.mobile-nav');
            if (mobileNav) {
                mobileNav.classList.toggle('open');
            }

            // Toggle the 'show' class on the .burger-overlay element
            var burgerOverlay = document.querySelector('.burger-overlay');
            if (burgerOverlay) {
                burgerOverlay.classList.toggle('show');
            }
        });
    }
});
